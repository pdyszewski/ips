    let numSites = 8;  // Liczba wierzchołków (nodes)
    let timeSteps = 10; // Liczba kroków czasowych (time)
    let spacing = 60;   // Odstęp między wierzchołkami
    let arrowSize = 15; // Rozmiar strzałki
    let recoveryPoints = [];
    let infectionEvents = [];

    function setup() {
      // Zmieniamy createCanvas na createCanvas w kontenerze
      let canvas = createCanvas(600, 700);
      canvas.parent('p5-container-contact'); // Przypisanie canvas do kontenera
      textAlign(CENTER, CENTER);
      generateEvents();
    }

    function draw() {
      background(255);
      drawGrid();
      drawEvents();
    }

    function drawGrid() {
      // Rysowanie osi czasowych dla każdego wierzchołka
      stroke(0);
      for (let i = 0; i < numSites; i++) {
        let x = (i + 1) * spacing;
        line(x, 50, x, height - 50);
        fill(0);
        text(i + 1, x, height - 30); // Numeracja węzłów
      }

      // Oś czasu
      for (let t = 1; t <= timeSteps; t++) {
        let y = t * spacing;
        fill(100);
        text(t, 30, y); // Numeracja czasu
      }
    }

    function drawEvents() {
      // Rysowanie zdarzeń zakażeń (strzałki)
      stroke(255, 0, 0);
      strokeWeight(2);
      fill(255, 0, 0);
      for (let event of infectionEvents) {
        let x1 = event.from * spacing;
        let x2 = event.to * spacing;
        let y = event.time;
        line(x1, y, x2, y);
        if (event.from < event.to) {
          triangle(x2, y, x2 - arrowSize, y - arrowSize / 2, x2 - arrowSize, y + arrowSize / 2);
        } else {
          triangle(x2, y, x2 + arrowSize, y - arrowSize / 2, x2 + arrowSize, y + arrowSize / 2);
        }
      }

      // Rysowanie zdarzeń zdrowienia (kropki)
      fill(0, 0, 255);
      noStroke();
      for (let recovery of recoveryPoints) {
        let x = recovery.site * spacing;
        let y = recovery.time;
        ellipse(x, y, 10, 10);
      }
    }

    function generateEvents() {
      // Generowanie losowych zdarzeń zakażeń (poziome strzałki) na niecałkowitych wysokościach
      for (let i = 0; i < 15; i++) {
        let site1 = floor(random(1, numSites));
        let site2 = site1 + (random() > 0.5 ? 1 : -1);
        if (site2 >= 1 && site2 <= numSites) {
          let time = random(1, timeSteps) * spacing + random(10, 50); // Losowe niecałkowite pozycje
          infectionEvents.push({ from: site1, to: site2, time: time });
        }
      }

      // Generowanie losowych zdarzeń zdrowienia (kropki) na niecałkowitych wysokościach
      for (let i = 0; i < 10; i++) {
        let site = floor(random(1, numSites + 1));
        let time = random(1, timeSteps) * spacing + random(10, 50); // Losowe niecałkowite pozycje
        recoveryPoints.push({ site: site, time: time });
      }
    }
