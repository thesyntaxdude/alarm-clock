import { Clock, clock } from "./clock.js";
import { Alarm } from "./alarm.js";
import { Stopwatch } from "./stopwatch.js";

// interacting with the clock
(() => {
  setInterval(() => {
    Clock.hoursElement.textContent = clock.getCurrentHour();
    Clock.minutesElement.textContent = clock.getCurrentMinute();
    Clock.secondsElement.textContent = clock.getCurrentSecond();
  }, 1000);
})();

// interacting with the alarm
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

// interacting with the stopwatch
(() => {
  const stopwatch = new Stopwatch();
  stopwatch.showTime();
  Stopwatch.startBtn.addEventListener("click", () => stopwatch.startTimer());
  Stopwatch.stopBtn.addEventListener("click", () => stopwatch.stopTimer());
})();

// UI stuff
(() => {
  const clockSwitcherBtn = document.querySelector("#clock-switcher");
  const stopwatchSwitcherBtn = document.querySelector("#stopwatch-switcher");
  const clockMode = document.querySelector(".clock-wrapper");
  const stopwatchMode = document.querySelector(".stopwatch-wrapper");

  clockSwitcherBtn.addEventListener("click", () =>
    switchMode(clockMode, stopwatchMode)
  );
  stopwatchSwitcherBtn.addEventListener("click", () =>
    switchMode(stopwatchMode, clockMode)
  );

  function switchMode(activeMode, inactiveMode) {
    activeMode.style.display = "flex";
    inactiveMode.style.display = "none";
  }
})();
