// Model Deffuanta na grafie Petersena w p5.js

let agents = [];
let petersenEdges = [
  [0, 1], [0, 4], [0, 5], 
  [1, 2], [1, 6], 
  [2, 3], [2, 7], 
  [3, 4], [3, 8], 
  [4, 9], 
  [5, 7], [5, 8], 
  [6, 8], [6, 9], 
  [7, 9]
];
let interactionThreshold = 0.6;
let convergenceFactor = 0.1;

function setup() {
  // Tworzymy płótno o szerokości 600x600 pikseli
  let canvas = createCanvas(600, 600);

  // Sprawdzamy, czy istnieje element o ID 'myCanvasContainer'
  let canvasContainer = document.getElementById('myCanvasContainer');
  if (canvasContainer) {
    canvas.parent(canvasContainer); // Ustawiamy rodzica na kontener
  } else {
    console.error('Element #myCanvasContainer nie został znaleziony.');
  }
  
  frameRate(30); // Zmniejszamy liczbę klatek na sekundę
  
  // Tworzymy 10 wierzchołków (agentów) z losowymi opiniami i ustalamy ich pozycje
  for (let i = 0; i < 10; i++) {
    let angle = map(i, 0, 10, 0, TWO_PI); // Rozkładamy wierzchołki w okręgu
    let x = width / 2 + cos(angle) * 200;
    let y = height / 2 + sin(angle) * 200;
    agents.push(new Agent(random(1), x, y));
  }
}

function draw() {
  background(255);

  // Rysujemy krawędzie grafu Petersena
  stroke(0);
  strokeWeight(2);
  for (let edge of petersenEdges) {
    let a = agents[edge[0]];
    let b = agents[edge[1]];
    line(a.x, a.y, b.x, b.y);
  }

  // Aktualizujemy i wyświetlamy agentów (wierzchołki grafu)
  for (let agent of agents) {
    agent.display();
  }

  // Symulacja interakcji pomiędzy agentami połączonymi krawędziami
  for (let i = 0; i < 2; i++) { // Zmniejszamy liczbę interakcji na klatkę do 2
    let edge = random(petersenEdges);
    let a = agents[edge[0]];
    let b = agents[edge[1]];
    
    // Sprawdzenie różnicy opinii między agentami
    if (abs(a.opinion - b.opinion) < interactionThreshold) {
      // Agenci zbliżają swoje opinie do siebie
      let avgOpinion = (a.opinion + b.opinion) / 2;
      a.opinion = lerp(a.opinion, avgOpinion, convergenceFactor);
      b.opinion = lerp(b.opinion, avgOpinion, convergenceFactor);
    }
  }
}

class Agent {
  constructor(opinion, x, y) {
    this.opinion = opinion;
    this.x = x;
    this.y = y;
  }

  // Wyświetlanie agenta
  display() {
    let c = color(lerpColor(color(0, 0, 255), color(255, 0, 0), this.opinion));
    fill(c);
    noStroke();
    ellipse(this.x, this.y, 20, 20);
  }
}

