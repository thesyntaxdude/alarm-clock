import { Clock, clock } from "./clock.js";
import { Alarm } from "./alarm.js";

setInterval(() => {
  Clock.hoursElement.textContent = clock.getCurrentHour();
  Clock.minutesElement.textContent = clock.getCurrentMinute();
  Clock.secondsElement.textContent = clock.getCurrentSecond();
}, 1000);

(() => {
  const alarm = new Alarm();
  alarm.renderAlarmTasks();
  alarm.saveNow();
  alarm.openModal();
  alarm.closeModal();
  alarm.deleteNow();
  alarm.soundAlarm();
  Alarm.stopAlarmBtn.addEventListener("click", () => alarm.stopAlarm());
})();

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
