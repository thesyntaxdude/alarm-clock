const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

getCurrentDate();
setInterval(getCurrentDate, 1000);

function getCurrentDate() {
  const currentDate = new Date();
  hoursElement.textContent = currentDate.getHours().toString().padStart(2, "0");
  minutesElement.textContent = currentDate
    .getMinutes()
    .toString()
    .padStart(2, "0");
  secondsElement.textContent = currentDate
    .getSeconds()
    .toString()
    .padStart(2, "0");
}

