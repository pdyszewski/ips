let lambda = 0.1; // Domyślna intensywność procesu Poissona
let currentTime = 0;
let events = [];
let counts = [];
let nextEventTime = 0; // Czas następnego zdarzenia

function setup() {
  // Tworzenie canvas w kontenerze "p5-container-poisson"
  const canvas = createCanvas(800, 400);
  canvas.parent("p5-container-poisson"); // Umieszczenie canvas wewnątrz kontenera

  background(255);

  // Podpięcie pola tekstowego i przycisku do zmiany intensywności
  let lambdaInput = select("#lambda-input");
  let applyButton = select("#apply-button");
  
  applyButton.mousePressed(() => {
    updateLambda(lambdaInput.value());
  });

  resetProcess(); // Inicjalizacja pierwszego zdarzenia
}

function draw() {
  // Generowanie zdarzeń zależnych od lambda
  if (currentTime >= nextEventTime) {
    // Dodanie nowego zdarzenia
    events.push(currentTime);
    counts.push(counts.length + 1);
    
    // Wyznaczenie czasu następnego zdarzenia
    nextEventTime += randomExponential(lambda);
  }

  // Aktualizacja bieżącego czasu
  currentTime += deltaTime / 1000; // Przekształcenie deltaTime (ms) na sekundy

  // Rysowanie wykresu
  background(255);
  text("Wykres N(t) - Liczba zdarzeń w zależności od czasu", 10, 20);
  
  // Rysowanie osi wykresu
  stroke(0);
  line(50, height - 50, width - 50, height - 50); // Oś X (czas)
  line(50, height - 50, 50, 50); // Oś Y (liczba zdarzeń N(t))

  // Etykiety osi
  textAlign(CENTER);
  text("Czas (t)", width / 2, height - 20);
  textAlign(RIGHT);
  text("N(t)", 30, height / 2);

  // Rysowanie wykresu N(t) jako funkcji skokowej
  stroke(255, 0, 0);
  noFill();
  beginShape();
  for (let i = 0; i < events.length; i++) {
    let x1 = map(events[i], 0, max(events) * 1.5, 50, width - 50);
    let y1 = map(counts[i], 0, max(counts) * 1.2, height - 50, 50);
    vertex(x1, y1);

    let y2 = map(counts[i] + 1, 0, max(counts) * 1.2, height - 50, 50);
    vertex(x1, y2);
  }
  endShape();

  // Ograniczenie liczby wyświetlanych zdarzeń dla przejrzystości
  if (events.length > 200) {
    events.shift();
    counts.shift();
  }
}

// Funkcja aktualizująca intensywność lambda na podstawie wartości z pola tekstowego
function updateLambda(inputValue) {
  let inputVal = parseFloat(inputValue);
  if (!isNaN(inputVal) && inputVal > 0) {
    lambda = inputVal;
    resetProcess(); // Restart procesu po zmianie lambda
  } else {
    alert("Podaj poprawną, dodatnią wartość dla intensywności lambda.");
  }
}

// Funkcja resetująca proces Poissona
function resetProcess() {
  currentTime = 0;
  events = [];
  counts = [];
  nextEventTime = randomExponential(lambda); // Wyznacz czas pierwszego zdarzenia
}

// Funkcja generująca losowy czas odstępu między zdarzeniami
function randomExponential(lambda) {
  return -Math.log(1 - random()) / lambda;
}
