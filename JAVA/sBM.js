// Parametry symulacji
let kappa = 1; // Parametr lepkości (domyślny)
let T = 1; // Czas końcowy symulacji
let h = 0.01; // Krok przestrzenny
let h2 = h * h; // Kwadrat kroku przestrzennego
let x0 = 0.2; // Początkowa pozycja
let Y = []; // Wektor pozycji
let t = []; // Wektor czasu

let i = 0; // Licznik kroków
let isSimulationComplete = false;
let iterationsPerFrame = 100; // Liczba iteracji na klatkę

let kappaInput; // Pole tekstowe do wpisania lepkości
let submitButton; // Przycisk potwierdzający zmianę lepkości

function setup() {
    const container = select('#p5-container-sBM');
    const inputcontainer = select('#p5-container-sBM-input');

    const canvas = createCanvas(620, 400);
    canvas.parent(container);

    frameRate(60);
    resetSimulation();

    // Tworzenie pola tekstowego do wpisania parametru lepkości
    kappaInput = createInput(kappa.toString());
    kappaInput.parent(inputcontainer);
    kappaInput.size(100);

    // Przycisk do zatwierdzenia zmiany parametru lepkości
    submitButton = createButton("Współczynnik lepkości");
    submitButton.parent(inputcontainer);
    submitButton.mousePressed(updateKappa);
}


// Funkcja resetująca symulację
function resetSimulation() {
    Y = [x0]; // Reset wektora pozycji
    t = [0]; // Reset wektora czasu
    i = 0; // Reset licznika kroków
    isSimulationComplete = false; // Reset flagi zakończenia symulacji
}

// Funkcja aktualizująca wartość lepkości i resetująca symulację
function updateKappa() {
    let newKappa = parseFloat(kappaInput.value());
    if (!isNaN(newKappa) && newKappa > 0) {
        kappa = newKappa;
        console.log(`Zmieniono lepkość na: ${kappa}`);
        resetSimulation(); // Restart symulacji po zmianie lepkości
    } else {
        console.log("Nieprawidłowa wartość lepkości!");
    }
}

function draw() {
    background(255);
    drawGraph();

    if (!isSimulationComplete) {
        for (let n = 0; n < iterationsPerFrame; n++) {
            let u0 = random();
            let u1 = random();

            let mean_dt;
            if (Y[i] < 0.1 * h) {
                mean_dt = 0.5 * h2 + kappa * h;
                Y.push(Y[i] + h);
            } else {
                mean_dt = 0.5 * h2;
                let gamm = (u1 < 0.5) ? 1 : 0;
                Y.push(Y[i] + h * gamm - h * (1 - gamm));
            }

            let dt = -Math.log(u0) * mean_dt;
            t.push(t[i] + dt);
            i++;

            if (t[i] > T) {
                isSimulationComplete = true;
                break;
            }
        }
    }
}

function drawGraph() {
    stroke(0);
    strokeWeight(1);

    line(50, height - 50, width - 50, height - 50);
    line(50, 50, 50, height - 50);

    textSize(16);
    fill(0);
    text("t", width - 30, height - 30);
    text("X_t", 20, 60);

    let xScale = (width - 100) / T;
    let yScale = (height - 100);

    for (let j = 1; j <= i; j++) {
        let x1 = 50 + t[j - 1] * xScale;
        let y1 = height - 50 - Y[j - 1] * yScale;
        let x2 = 50 + t[j] * xScale;
        let y2 = height - 50 - Y[j] * yScale;

        line(x1, y1, x2, y2);
    }
}
