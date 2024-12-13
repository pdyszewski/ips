let discreteWalk = [];
let continuousWalk = [];
let currentTime = 0;
let xDiscrete = 0;
let xContinuous = 0;
let lambda = 1; // Parametr do losowania odstępów czasowych
let tNextJump = 0;
let canvasHeight = 400;
let canvasWidth = 800;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
  
  // Inicjalizacja tablic
  discreteWalk.push({ time: currentTime, position: xDiscrete });
  continuousWalk.push({ time: currentTime, position: xContinuous });
  
  // Pierwszy losowy czas skoku dla spaceru ciągłego
  tNextJump = nextExponential(lambda);
}

function draw() {
  background(255);
  
  // Wykres pozycji w funkcji czasu dla obu spacerów
  stroke(0);
  drawWalk(discreteWalk, color(0, 0, 255), 10, height / 2);
  drawWalk(continuousWalk, color(255, 0, 0), height / 2 + 10, height - 10);
  
  // Dyskretny spacer losowy
  if (frameCount % 10 == 0) { // Skok co 10 klatek
    let step = random() < 0.5 ? -1 : 1;
    xDiscrete += step;
    currentTime += 1;
    discreteWalk.push({ time: currentTime, position: xDiscrete });
  }
  
  // Spacer losowy w czasie ciągłym
  if (currentTime >= tNextJump) {
    let step = random() < 0.5 ? -1 : 1;
    xContinuous += step;
    tNextJump = currentTime + nextExponential(lambda);
    continuousWalk.push({ time: currentTime, position: xContinuous });
  }

  // Aktualizacja czasu
  currentTime += 1 / 30;
  
  // Ograniczenie liczby punktów na wykresie (żeby nie zapychać pamięci)
  if (discreteWalk.length > 500) {
    discreteWalk.shift();
  }
  if (continuousWalk.length > 500) {
    continuousWalk.shift();
  }
}

// Funkcja rysująca spacer
function drawWalk(walk, lineColor, yMin, yMax) {
  noFill();
  stroke(lineColor);
  beginShape();
  for (let i = 0; i < walk.length; i++) {
    let x = map(walk[i].time, currentTime - 30, currentTime, 0, width);
    let y = map(walk[i].position, -10, 10, yMin, yMax);
    vertex(x, y);
  }
  endShape();
}

// Funkcja generująca czas z rozkładu wykładniczego
function nextExponential(lambda) {
  return -log(1 - random()) / lambda;
}

