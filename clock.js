export class Clock {
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

export const clock = new Clock();
Clock.hoursElement.textContent = clock.getCurrentHour();
Clock.minutesElement.textContent = clock.getCurrentMinute();
Clock.secondsElement.textContent = clock.getCurrentSecond();
