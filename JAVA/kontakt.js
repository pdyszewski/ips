let grid;
let cols, rows;
let resolution = 10;
let infectionRate = 0.1;
let recoveryRate = 0.7;

function setup() {
  // Tworzymy canvas o szerokości i wysokości 400px
  let canvas = createCanvas(400, 400);
  // Umieszczamy canvas w elemencie o ID 'myContainer'
  canvas.parent('myContainer');
  
  cols = width / resolution;
  rows = height / resolution;
  
  frameRate(5); // Ustawienie niskiej liczby FPS
  
  // Initialize grid
  grid = create2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = random() < 0.5 ? 1 : 0; // Random initial state: 1 - infected, 0 - healthy
    }
  }
}

function draw() {
  background(255);
  
  // Draw grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] === 1) {
        fill(255, 255, 0); // Infected 
      } else {
        fill(184, 3, 255); // Healthy 
      }
      stroke(0);
      rect(x, y, resolution, resolution);
    }
  }
  
  // Update grid based on contact process rules
  let next = create2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let neighbors = countInfectedNeighbors(grid, i, j);
      
      if (state === 0) {
        // Healthy cell can become infected with infectionRate * number of infected neighbors
        if (random() < 1 - pow(1 - infectionRate, neighbors)) {
          next[i][j] = 1; // Becomes infected
        } else {
          next[i][j] = 0; // Stays healthy
        }
      } else if (state === 1) {
        // Infected cell can recover with recoveryRate
        if (random() < recoveryRate) {
          next[i][j] = 0; // Recovers
        } else {
          next[i][j] = 1; // Stays infected
        }
      }
    }
  }
  
  grid = next;
}

function create2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function countInfectedNeighbors(grid, x, y) {
  let sum = 0;
  
  // Loop through neighboring cells
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      // Skip the center cell
      if (i === 0 && j === 0) continue;
      
      // Check if the neighbor is within bounds of the grid
      let col = x + i;
      let row = y + j;
      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        sum += grid[col][row]; // Add the neighbor's state (1 or 0)
      }
    }
  }
  
  return sum;
}

