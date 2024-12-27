    let grid;
    let N = 50; // Początkowy rozmiar siatki NxN
    let T = 2.0; // Temperatura
    let J = 1; // Stała wymiany
    let canvasSize; // Rozmiar płótna
    const minCanvasWidth = 450; // Minimalna szerokość płótna

    function setup() {
      // Dynamicznie ustal rozmiar płótna
      canvasSize = max(windowWidth * 0.4, minCanvasWidth);
      let canvas = createCanvas(canvasSize, canvasSize/2);
      canvas.parent('canvas-container');

      // Ustaw siatkę na podstawie wielkości płótna
      initializeGrid();
      frameRate(10);
    }

    function draw() {
      background(255);

      // Rozmiar pojedynczej komórki
      let cellSize = width / N;

      // Rysowanie siatki spinów
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          fill(grid[i][j] == 1 ? 0 : 255);
          noStroke();
          rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
      }

      // Aktualizacja spinów
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

    function windowResized() {
      // Aktualizacja rozmiaru płótna i siatki po zmianie wielkości okna
      canvasSize = max(windowWidth * 0.4, minCanvasWidth);
      resizeCanvas(canvasSize, canvasSize/2);

      // Przebuduj siatkę
      initializeGrid();
    }

    function initializeGrid() {
      // Przelicz rozmiar siatki i zainicjalizuj spin
      N = floor(canvasSize / 4); // Dynamiczne dostosowanie liczby spinów
      grid = [];
      for (let i = 0; i < N; i++) {
        grid[i] = [];
        for (let j = 0; j < N; j++) {
          grid[i][j] = random() > 0.5 ? 1 : -1;
        }
      }
    }