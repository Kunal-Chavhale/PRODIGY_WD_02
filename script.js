
      let timer;
      let isRunning = false;
      let startTime;
      let elapsedTime = 0;
      const display = document.getElementById("display");
      const startStopBtn = document.getElementById("startStopBtn");
      const resetBtn = document.getElementById("resetBtn");

      startStopBtn.addEventListener("click", function () {
        if (isRunning) {
          clearInterval(timer);
          elapsedTime += Date.now() - startTime;
          startStopBtn.textContent = "Start";
        } else {
          startTime = Date.now();
          timer = setInterval(updateDisplay, 1000);
          startStopBtn.textContent = "Stop";
        }
        isRunning = !isRunning;
      });

      resetBtn.addEventListener("click", function () {
        clearInterval(timer);
        elapsedTime = 0;
        isRunning = false;
        startStopBtn.textContent = "Start";
        display.textContent = "00:00:00";
      });

      function updateDisplay() {
        const timeElapsed = Date.now() - startTime + elapsedTime;
        const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeElapsed % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

        display.textContent = `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }
