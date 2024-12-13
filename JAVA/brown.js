let x; // pozycja cząsteczki
let history = []; // historia pozycji
let input, button; // pole tekstowe i przycisk do ustawienia początkowej wartości

function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent('p5-container-brown'); // Umieszczenie płótna w kontenerze

  // Utworzenie pola tekstowego dla wartości początkowej
  input = createInput("0"); // domyślna wartość początkowa
  input.parent('p5-container-brown'); // Umieszczenie pola w kontenerze
  input.style('margin', '10px'); // Dodanie marginesu nad polem

  // Przycisk do ustawienia wartości początkowej
  button = createButton('Ustaw wartość początkową');
  button.parent('p5-container-brown'); // Umieszczenie przycisku w kontenerze
  button.mousePressed(setStartValue); // Akcja po kliknięciu przycisku
  button.style('margin-left', '10px'); // Dodanie odstępu między polem a przyciskiem

  setStartValue(); // Ustawienie początkowej wartości po uruchomieniu
}

function setStartValue() {
  let startValue = parseFloat(input.value());
  if (!isNaN(startValue)) {
    x = -startValue; // Ustaw pozycję początkową
    history = [x]; // Resetowanie historii
  } else {
    alert("Proszę wpisać poprawną liczbę");
  }
}

function draw() {
  background(255);

  // Losowa zmiana pozycji cząsteczki
  let step = random([-1, 1]); // zmiana o -1 lub +1 w każdym kroku
  x += step * random(1, 5); // skalowanie kroku dla bardziej zróżnicowanego ruchu

  // Dodawanie bieżącej pozycji do historii
  history.push(x);

  // Usuwanie starych pozycji, jeśli historia jest zbyt długa
  if (history.length > width - 60) { // uwzględniamy margines dla osi
    history.shift();
  }

  // Rysowanie osi pionowej
  stroke(0);
  line(50, 0, 50, height);

  // Oznaczenia na osi pionowej
  for (let i = 0; i <= height; i += 50) {
    stroke(200);
    line(45, i, 55, i);
    fill(0);
    noStroke();
    let label = ((height / 2 - i)).toFixed(0);
    text(label, 15, i + 5);
  }

  // Rysowanie śladu ruchu
  noFill();
  stroke(0);
  beginShape();
  for (let i = 0; i < history.length; i++) {
    vertex(50 + i, height / 2 + history[i]); // Przesunięcie, aby uwzględnić oś pionową
  }
  endShape();

  // Rysowanie aktualnej pozycji cząsteczki
  fill(255, 0, 0);
  noStroke();
  ellipse(50 + history.length, height / 2 + x, 10, 10); // Rysowanie kółka w bieżącej pozycji
}
