let grid;
let cols, rows;
let resolution = 10; // Rozmiar komórki
let infectionRate = 0.25; // Parametr wykładniczy dla zarażania (domyślna wartość)
let recoveryRate = 1; // Parametr wykładniczy dla zdrowienia
let inputInfectionRate; // Pole wejściowe dla parametru zarażania
let updateButton; // Przycisk aktualizacji

function setup() {
  const canvas = createCanvas(600, 400); // Wymiary torusa: 600x400
  canvas.parent("p5-container-cp1"); // Umieszczenie w kontenerze
  frameRate(10); // Ogranicz liczbę klatek na sekundę do 10
  cols = width / resolution;
  rows = height / resolution;
  grid = createGrid();

  // Tworzenie elementów interfejsu w kontenerze
  const container = select("#p5-container-cp1");
  container.child(createP("Symulacja procesu na torusie 60x40 wykonana w p5.js Poniżej możesz wpisać wartość współczynnia lambda"));
  inputInfectionRate = createInput(infectionRate.toString());
  inputInfectionRate.size(100);
  container.child(inputInfectionRate);
  updateButton = createButton("Zaktualizuj");
  updateButton.mousePressed(updateInfectionRate);
  container.child(updateButton);
}

function draw() {
  background(220);

  drawGrid();
  grid = updateGrid();
}

function createGrid() {
  let arr = [];
  for (let x = 0; x < cols; x++) {
    arr[x] = [];
    for (let y = 0; y < rows; y++) {
      if (random() < 0.1) {
        // Zarażona komórka z czasem do zdrowienia i czasem do infekcji
        arr[x][y] = { 
          state: 1, 
          recoveryTime: randomExponential(recoveryRate), 
          infectionTime: randomExponential(infectionRate) 
        };
      } else {
        // Zdrowa komórka
        arr[x][y] = { state: 0, recoveryTime: 0, infectionTime: 0 };
      }
    }
  }
  return arr;
}

function drawGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y].state === 1) {
        fill(255, 0, 0); // Zarażone komórki są czerwone
      } else {
        fill(0, 255, 0); // Zdrowe komórki są zielone
      }
      stroke(0);
      rect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

function updateGrid() {
  let newGrid = create2DArray(cols, rows);
  
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let cell = grid[x][y];

      if (cell.state === 1) {
        // Aktualizuj czas do wyzdrowienia i czas do zarażania
        cell.recoveryTime -= 1 / frameRate();
        cell.infectionTime -= 1 / frameRate();
        
        if (cell.recoveryTime <= 0) {
          // Komórka zdrowieje
          newGrid[x][y] = { state: 0, recoveryTime: 0, infectionTime: 0 };
        } else {
          // Komórka pozostaje zarażona
          newGrid[x][y] = { 
            state: 1, 
            recoveryTime: cell.recoveryTime, 
            infectionTime: cell.infectionTime 
          };
        }
      } else {
        // Zdrowa komórka może zostać zarażona przez sąsiadów
        let neighbors = getNeighbors(x, y);
        let canInfect = neighbors.some(n => {
          let neighbor = grid[n[0]][n[1]];
          return neighbor.state === 1 && neighbor.infectionTime <= 0;
        });

        if (canInfect) {
          // Zarażenie zdrowej komórki
          newGrid[x][y] = { 
            state: 1, 
            recoveryTime: randomExponential(recoveryRate), 
            infectionTime: randomExponential(infectionRate) 
          };
        } else {
          // Komórka pozostaje zdrowa
          newGrid[x][y] = { state: 0, recoveryTime: 0, infectionTime: 0 };
        }
      }
    }
  }
  
  return newGrid;
}

function getNeighbors(x, y) {
  // Sąsiedzi na torusie (wrap-around)
  let neighbors = [];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue; // Pomiń siebie
      let nx = (x + dx + cols) % cols;
      let ny = (y + dy + rows) % rows;
      neighbors.push([nx, ny]);
    }
  }
  return neighbors;
}

function create2DArray(cols, rows) {
  let arr = [];
  for (let x = 0; x < cols; x++) {
    arr[x] = [];
    for (let y = 0; y < rows; y++) {
      arr[x][y] = { state: 0, recoveryTime: 0, infectionTime: 0 }; // Domyślnie zdrowe
    }
  }
  return arr;
}

// Funkcja generująca losowy czas z rozkładu wykładniczego
function randomExponential(rate) {
  return -Math.log(1 - random()) / rate;
}

// Funkcja aktualizująca parametr infekcji
function updateInfectionRate() {
  let newRate = parseFloat(inputInfectionRate.value());
  if (!isNaN(newRate) && newRate > 0) {
    infectionRate = newRate;
    console.log(`Zaktualizowano parametr infekcji: ${infectionRate}`);
  } else {
    console.log("Nieprawidłowa wartość. Wprowadź liczbę większą od 0.");
  }
}

