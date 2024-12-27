let agents = []; // Tablica agentów
let size = 100; // Liczba agentów

function setup() {
  const container = select('#p5-container-vmoned');
  if (!container) {
    console.error("Container '.p5-container-vmoned' not found!");
    return;
  }

  let canvas = createCanvas(getCanvasWidth(), getCanvasHeight());
  canvas.parent(container);

  // Inicjalizacja agentów z układem początkowym -1,...,-1,1,...,1
  for (let i = 0; i < size; i++) {
    if (i < size / 2) {
      agents.push(-1);
    } else {
      agents.push(1);
    }
  }
}

function draw() {
  background(220);
  displayAgents();
  updateModel();
}

function windowResized() {
  resizeCanvas(getCanvasWidth(), getCanvasHeight());
}

function getCanvasWidth() {
  return max(200, windowWidth * 0.45);
}

function getCanvasHeight() {
  return max(200, windowHeight * 0.1);
}

// Funkcja do wyświetlania agentów
function displayAgents() {
  let cellWidth = width / agents.length;
  for (let i = 0; i < agents.length; i++) {
    if (agents[i] === -1) {
      fill(50, 100, 200); // Kolor dla opinii -1
    } else {
      fill(200, 100, 50); // Kolor dla opinii 1
    }
    rect(i * cellWidth, 50, cellWidth, height - 100);
  }
}

// Funkcja do aktualizacji modelu
function updateModel() {
  // Znajdź indeksy agentów, którzy mają sąsiada o odmiennej opinii
  let candidates = [];
  for (let i = 0; i < agents.length; i++) {
    if ((i > 0 && agents[i] !== agents[i - 1]) || (i < agents.length - 1 && agents[i] !== agents[i + 1])) {
      candidates.push(i);
    }
  }

  // Jeśli są kandydaci, wybierz losowego
  if (candidates.length > 0) {
    let idx = random(candidates);
    // Wybierz sąsiada o odmiennej opinii
    let neighborIdx;
    if (idx > 0 && agents[idx] !== agents[idx - 1]) {
      neighborIdx = idx - 1;
    } else if (idx < agents.length - 1 && agents[idx] !== agents[idx + 1]) {
      neighborIdx = idx + 1;
    }

    // Agent przyjmuje opinię sąsiada
    if (neighborIdx !== undefined) {
      agents[idx] = agents[neighborIdx];
    }
  } else {
    // Jeśli wszyscy agenci mają tę samą opinię, rozszerz zakres
    let leftExtension = Array(100).fill(-1);
    let rightExtension = Array(100).fill(1);
    agents = leftExtension.concat(agents, rightExtension);
    size = agents.length;
  }
}
