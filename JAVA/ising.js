let grid;
let N = 50; // Rozmiar siatki NxN
let T = 2.0; // Temperatura
let J = 1; // Stała wymiany

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('canvas-container'); // Przypisanie kanwy do div
  grid = [];
  for (let i = 0; i < N; i++) {
    grid[i] = [];
    for (let j = 0; j < N; j++) {
      grid[i][j] = random() > 0.5 ? 1 : -1;
    }
  }
  frameRate(10);
}

function draw() {
  background(255);

  // Rysowanie siatki spinów
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] == 1) {
        fill(0);
      } else {
        fill(255);
      }
      noStroke();
      rect(i * width / N, j * height / N, width / N, height / N);
    }
  }

  // Aktualizacja siatki spinów
  for (let k = 0; k < N * N; k++) {
    let i = floor(random() * N);
    let j = floor(random() * N);

    let deltaE = 2 * J * grid[i][j] * (
      grid[(i + 1) % N][j] +
      grid[(i - 1 + N) % N][j] +
      grid[i][(j + 1) % N] +
      grid[i][(j - 1 + N) % N]
    );

    if (deltaE < 0 || random() < exp(-deltaE / T)) {
      grid[i][j] *= -1;
    }
  }
}

