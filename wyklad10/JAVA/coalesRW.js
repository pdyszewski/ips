    let walkers = [];
    const numWalkers = 100; // Number of initial walkers
    const gridWidth = 600; // Width of the grid (canvas width)
    const gridHeight = 400; // Height of the grid (canvas height)
    const stepSize = 5; // Step size for the random walk
    const walkerRadius = 3; // Radius for displaying walkers

    function setup() {
      const container = document.getElementById("p5-container-cRW");
      const canvas = createCanvas(gridWidth, gridHeight);
      canvas.parent(container);

      for (let i = 0; i < numWalkers; i++) {
        walkers.push({
          x: floor(random(width / stepSize)) * stepSize,
          y: floor(random(height / stepSize)) * stepSize,
          nextMoveTime: millis() + randomExponential(1000), // Initial random delay
        });
      }
    }

    function draw() {
      background(220);

      // Draw all walkers
      noStroke();
      fill(0);
      for (let walker of walkers) {
        ellipse(walker.x, walker.y, walkerRadius * 2);
      }

      // Update walker positions based on their individual timers
      let currentTime = millis();
      for (let i = 0; i < walkers.length; i++) {
        if (currentTime >= walkers[i].nextMoveTime) {
          // Move the walker
          let direction = floor(random(4));
          switch (direction) {
            case 0:
              walkers[i].x = (walkers[i].x + stepSize) % width; // Move right
              break;
            case 1:
              walkers[i].x = (walkers[i].x - stepSize + width) % width; // Move left
              break;
            case 2:
              walkers[i].y = (walkers[i].y + stepSize) % height; // Move down
              break;
            case 3:
              walkers[i].y = (walkers[i].y - stepSize + height) % height; // Move up
              break;
          }
          // Schedule the next move with exponential delay
          walkers[i].nextMoveTime = currentTime + randomExponential(100);
        }
      }

      // Check for coalescence
      for (let i = walkers.length - 1; i >= 0; i--) {
        for (let j = walkers.length - 1; j > i; j--) {
          if (walkers[i].x === walkers[j].x && walkers[i].y === walkers[j].y) {
            walkers.splice(j, 1); // Remove walker j if it coalesces with walker i
          }
        }
      }

      // Stop the simulation when only one walker remains
      if (walkers.length === 1) {
        noLoop();
        console.log("All walkers coalesced!");
      }
    }

    // Helper function to generate exponential random variables
    function randomExponential(mean) {
      return -mean * Math.log(1 - random());
    }
