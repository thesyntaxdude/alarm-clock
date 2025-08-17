export class Stopwatch {
  static hours = document.querySelector("#stopwatch-hours");
  static minutes = document.querySelector("#stopwatch-minutes");
  static seconds = document.querySelector("#stopwatch-seconds");
  static startBtn = document.querySelector("#start");
  static stopBtn = document.querySelector("#stop");
  static updateCurrentData;

  getData() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    function updateData() {
      return { seconds, minutes, hours };
    }
    return updateData;
  }

  getCurrentData() {
    const getCurrentData = this.getData();
    const currentData = getCurrentData();
    return currentData;
  }

  showTime() {
    Stopwatch.hours.textContent = "0".padStart(2, "0");
    Stopwatch.minutes.textContent = "0".padStart(2, "0");
    Stopwatch.seconds.textContent = "0".padStart(2, "0");
  }

  startTimer() {
    const data = this.getCurrentData();
    Stopwatch.updateCurrentData = setInterval(() => {
      data.seconds++;
      if (data.seconds === 60) {
        data.seconds = 0;
        data.minutes++;
        data.seconds = 0;
      }
      if (data.minutes === 60) {
        data.hours++;
        data.minutes = 0;
      }

      Stopwatch.hours.textContent = data.hours.toString().padStart(2, "0");
      Stopwatch.minutes.textContent = data.minutes.toString().padStart(2, "0");
      Stopwatch.seconds.textContent = data.seconds.toString().padStart(2, "0");
    }, 1000);
  }

  stopTimer() {
    clearInterval(Stopwatch.updateCurrentData);
  }
}
