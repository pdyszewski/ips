    let grid;
    let cols, rows;
    let resolution = 10; // wielkość komórki
    let states = [0, 1]; // możliwe stany (np. 0 - preferencja A, 1 - preferencja B)

    function setup() {
      let canvas = createCanvas(600, 600); // Tworzenie canvas
      canvas.parent('p5-container'); // Przypisanie canvas do div'a o ID "p5-container"
      cols = width / resolution;
      rows = height / resolution;
      
      // Inicjalizacja siatki
      grid = make2DArray(cols, rows);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          grid[i][j] = random(states); // losowe przypisanie stanu
        }
      }
    }

    function draw() {
      background(255);

      // Rysowanie siatki
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * resolution;
          let y = j * resolution;
          
          if (grid[i][j] === 1) {
            fill(0); // Stan 1 (np. preferencja B) - czarne komórki
          } else {
            fill(255); // Stan 0 (np. preferencja A) - białe komórki
          }
          stroke(0);
          rect(x, y, resolution, resolution);
        }
      }

      // Losowa zmiana stanu na podstawie sąsiada
      let i = floor(random(cols));
      let j = floor(random(rows));
      
      // Znajdź losowego sąsiada
      let neighbors = getNeighbors(i, j);
      let randomNeighbor = random(neighbors);

      // Zmień stan na stan losowego sąsiada
      grid[i][j] = grid[randomNeighbor.x][randomNeighbor.y];
    }

    function make2DArray(cols, rows) {
      let arr = new Array(cols);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
      }
      return arr;
    }

    function getNeighbors(i, j) {
      let neighbors = [];

      // Zbierz sąsiadów, uwzględniając granice
      if (i > 0) neighbors.push({x: i - 1, y: j});
      if (i < cols - 1) neighbors.push({x: i + 1, y: j});
      if (j > 0) neighbors.push({x: i, y: j - 1});
      if (j < rows - 1) neighbors.push({x: i, y: j + 1});
      
      return neighbors;
    }
