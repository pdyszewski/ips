// Skrypt w p5.js generujący animację ruchu cząsteczki zgodnie z procesem Poissona

let lambda = 0.5; // Intensywność zdarzeń (średnia liczba zdarzeń na jednostkę czasu)
let duration = 100; // Całkowity czas symulacji
let events = []; // Lista zdarzeń (czasy zdarzeń)
let stepHeight = 20; // Wysokość "skoku" dla każdego zdarzenia

let currentEventIndex = 0; // Indeks aktualnie rysowanego zdarzenia
let currentHeight = 0; // Wysokość aktualnego "skoku"
let prevX = 0; // Poprzednie współrzędne X
let prevY = 0; // Poprzednie współrzędne Y

let animationSpeed = 30; // Opóźnienie animacji (klatki między zdarzeniami)
let frameCounter = 0; // Licznik klatek
let particleX = 0; // Pozycja cząsteczki w poziomie
let particleY = 0; // Pozycja cząsteczki w pionie
let path = []; // Tablica do przechowywania ścieżki

let lambdaSlider; // Suwak dla wartości lambda
let lastLambda; // Przechowuje ostatnią wartość lambda

function setup() {
  const container = select('#p5-container-poisson');
  const sliderContainer = select('#p5-container-poisson-slider');

  if (!container) {
    console.error("Kontener #p5-container-poisson nie został znaleziony.");
    return;
  }

  if (!sliderContainer) {
    console.error("Kontener #p5-container-poisson-slider nie został znaleziony.");
    return;
  }

  const containerWidth = container.width * 0.9;
  const containerHeight = containerWidth / 2;

  // Tworzenie płótna w kontenerze
  let canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(container);

  // Tworzenie suwaka w osobnym kontenerze
  lambdaSlider = createSlider(0.01, 1, lambda, 0.01);
  lambdaSlider.style('width', '200px');
  lambdaSlider.parent(sliderContainer);

  lastLambda = lambda;
  resetSimulation();
}

function draw() {
  background(220);

  // Aktualizacja wartości lambda z suwaka
  lambda = lambdaSlider.value();

  // Sprawdzenie, czy wartość lambda się zmieniła
  if (lambda !== lastLambda) {
    lastLambda = lambda;
    resetSimulation();
  }

  // Wyświetlanie wartości lambda na ekranie
  fill(0);
  textSize(14);
  text(`Lambda: ${lambda.toFixed(2)}`, 10, height - 20);

  drawAxis();
  drawPath();
  animateParticle();
}

function resetSimulation() {
  currentEventIndex = 0;
  currentHeight = 0;
  prevX = 0;
  prevY = height;
  particleX = 0;
  particleY = height;
  path = [{ x: particleX, y: particleY }];
  generatePoissonProcess();
}

function generatePoissonProcess() {
  events = [];
  let time = 0;

  while (time < duration) {
    let interArrivalTime = -log(random()) / lambda;
    time += interArrivalTime;
    if (time < duration) {
      events.push(time);
    }
  }
}

function drawAxis() {
  stroke(0);
  fill(0);
  textSize(12);

  line(0, height, width, height); // Oś czasu
  line(0, 0, 0, height);          // Oś zdarzeń

  text("Czas", width - 40, height - 10);
  text("0", 5, height - 5);

  text("Zdarzenia", 10, 20);
}

function drawPath() {
  stroke(0, 0, 255);
  noFill();
  beginShape();
  for (let i = 0; i < path.length - 1; i++) {
    let point1 = path[i];
    let point2 = path[i + 1];

    line(point1.x, point1.y, point2.x, point1.y);
    line(point2.x, point1.y, point2.x, point2.y);
  }
  endShape();
}

function animateParticle() {
  fill(255, 0, 0);
  ellipse(particleX, particleY, 10, 10); // Rysowanie cząsteczki

  if (currentEventIndex < events.length) {
    if (frameCounter >= animationSpeed) {
      let nextX = map(events[currentEventIndex], 0, duration, 0, width);
      let nextY = height - (currentHeight + stepHeight);

      path.push({ x: nextX, y: nextY });

      particleX = nextX;
      particleY = nextY;
      currentHeight += stepHeight;

      currentEventIndex++;
      frameCounter = 0;
    } else {
      frameCounter++;
    }
  }
}

function windowResized() {
  const container = select('#p5-container-poisson');
  if (!container) return;

  const containerWidth = container.width * 0.9;
  const containerHeight = containerWidth / 2;
  resizeCanvas(containerWidth, containerHeight);
  resetSimulation();
  redraw();
}

function mouseReleased() {
  redraw();
}
