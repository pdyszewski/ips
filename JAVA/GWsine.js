// Skrypt w p5.js do wizualizacji T_t f(x) z suwakiem do zmiany t, umieszczony w kontenerze o nazwie p5-container-GWsine

let tSlider;
let resolution = 500; // Liczba punktów na wykresie
let xMin = -2 * Math.PI;
let xMax = 2 * Math.PI;
let dx;
let canvas;

function setup() {
  const container = select('#p5-container-GWsine');
  if (!container) {
    console.error("Kontener #p5-container-GWsine nie został znaleziony.");
    return;
  }

  const containerWidth = container.width * 0.9;
  const containerHeight = containerWidth / 2;

  // Tworzenie płótna wewnątrz kontenera
  canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(container);

  dx = (xMax - xMin) / resolution;

  // Tworzenie suwaka do zmiany wartości t
  tSlider = createSlider(0.1, 5, 0.5, 0.1); // Min: 0.1, Max: 5, Start: 0.5, Krok: 0.1
  tSlider.parent(container);
  tSlider.style('width', '200px');

  noLoop();
}

function draw() {
  background(255);
  translate(50, height / 2);

  // Osie układu współrzędnych
  drawAxes();

  // Aktualna wartość t z suwaka
  let t = tSlider.value();

  // Wyświetlanie wartości t
  noStroke();
  fill(0);
  textSize(14);
  text(`t = ${t}`, 20, -height / 2 + 20);

  // Rysowanie wykresu T_t f(x)
  stroke(0);
  noFill();
  beginShape();
  for (let i = 0; i <= resolution; i++) {
    let x = xMin + i * dx;
    let y = computeTtf(x, t);
    vertex(map(x, xMin, xMax, 0, width - 100), map(y, -1, 1, 100, -100));
  }
  endShape();
}

function computeTtf(x, t) {
  let integral = 0;
  let step = 0.01; // Dokładność całkowania
  for (let y = -Math.PI; y <= Math.PI; y += step) {
    let W_t = (1 / Math.sqrt(4 * Math.PI * t)) * exp(-((x - y) ** 2) / (4 * t));
    let f_y = sinFunction(y);
    integral += W_t * f_y * step;
  }
  return integral;
}

function sinFunction(x) {
  if (x >= -Math.PI && x <= Math.PI) {
    return sin(x);
  } else {
    return 0;
  }
}

function drawAxes() {
  stroke(150);
  line(0, 0, width - 100, 0); // Oś X
  line(0, -100, 0, 100); // Oś Y

  fill(0);
  noStroke();
  textSize(12);
  text("0", -15, 15);
  text("X", width - 90, 15);
  text("Y", -15, -110);
}

function windowResized() {
  const container = select('#p5-container-GWsine');
  if (!container) return;

  const containerWidth = container.width * 0.9;
  const containerHeight = containerWidth / 2;
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function mouseReleased() {
  redraw();
}
