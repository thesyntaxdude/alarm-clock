import { Clock, app } from "./func.js";



setInterval(() => {
  Clock.hoursElement.textContent = app.getCurrentHour();
  Clock.minutesElement.textContent = app.getCurrentMinute();
  Clock.secondsElement.textContent = app.getCurrentSecond();
}, 1000);



















// ----------legacy functional programming code----------

// const hoursElement = document.querySelector("#hours");
// const minutesElement = document.querySelector("#minutes");
// const secondsElement = document.querySelector("#seconds");

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
