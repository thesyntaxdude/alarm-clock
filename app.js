
// const hoursElement = document.querySelector("#hours");
// const minutesElement = document.querySelector("#minutes");
// const secondsElement = document.querySelector("#seconds");
class Clock {
  static hoursElement = document.querySelector("#hours");
  static minutesElement = document.querySelector("#minutes");
  static secondsElement = document.querySelector("#seconds");

  getCurrentDate() {
    const currentDate = new Date();
    return currentDate;
  }

  getCurrentHour() {
    const currentHour = this.getCurrentDate()
      .getHours()
      .toString()
      .padStart(2, "0");
    return currentHour;
  }

  getCurrentMinute() {
    const currentMinute = this.getCurrentDate()
      .getMinutes()
      .toString()
      .padStart(2, "0");
    return currentMinute;
  }

  getCurrentSecond() {
    const currentSecond = this.getCurrentDate()
      .getSeconds()
      .toString()
      .padStart(2, "0");
    return currentSecond;
  }
}

const clock = new Clock();
Clock.hoursElement.textContent = clock.getCurrentHour();
Clock.minutesElement.textContent = clock.getCurrentMinute();
Clock.secondsElement.textContent = clock.getCurrentSecond();

setInterval(() => {
  Clock.hoursElement.textContent = clock.getCurrentHour();
  Clock.minutesElement.textContent = clock.getCurrentMinute();
  Clock.secondsElement.textContent = clock.getCurrentSecond();
}, 1000);









// ----------legacy functional programming code----------


// getCurrentDate();
// setInterval(getCurrentDate, 1000);

// function getCurrentDate() {
//   const currentDate = new Date();
//   hoursElement.textContent = currentDate.getHours().toString().padStart(2, "0");
//   minutesElement.textContent = currentDate
//     .getMinutes()
//     .toString()
//     .padStart(2, "0");
//   secondsElement.textContent = currentDate
//     .getSeconds()
//     .toString()
//     .padStart(2, "0");
// }


