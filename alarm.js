import { clock } from "./clock.js";

export class Alarm {
  static dialog = document.querySelector("#add-alarm");
  static createAlarmBtn = document.querySelector("#create-alarm");
  static saveAlarmBtn = document.querySelector("form > #submit");
  static deleteAlarmBtn = document.querySelector("#close-btn");
  static createdAlarmsContainer = document.querySelector("#created-alarms");
  static body = document.querySelector("body");
  static soundAlarmPopup = document.querySelector("#active-alarm");
  static stopAlarmBtn = document.querySelector("#stop-alarm");
  static alarmList = JSON.parse(localStorage.getItem("alarmList")) || [];

  openModal() {
    Alarm.createAlarmBtn.addEventListener("click", () => {
      Alarm.dialog.showModal();
    });
  }

  closeModal() {
    Alarm.deleteAlarmBtn.addEventListener("click", () => Alarm.dialog.close());
  }

  createAlarmTask() {
    const UUID = crypto.randomUUID();
    const alarmTask = {
      alarmName: document.querySelector("#alarm-name").value,
      alarmDate: document.querySelector("#alarm-date").value,
      alarmTime: document.querySelector("#alarm-time").value,
      uuid: UUID,
    };
    return alarmTask;
  }

  saveAlarmTask(e) {
    e.preventDefault();
    const alarmTask = this.createAlarmTask();
    Alarm.alarmList.push(alarmTask);
    localStorage.setItem("alarmList", JSON.stringify(Alarm.alarmList));
    this.renderAlarmTasks();
    document.querySelector("#alarm-name").value = "";
    document.querySelector("#alarm-date").value = "";
    document.querySelector("#alarm-time").value = "";
  }

  saveNow() {
    Alarm.saveAlarmBtn.addEventListener("click", (e) => this.saveAlarmTask(e));
  }

  renderAlarmTasks() {
    document.querySelector("#created-alarms").textContent = "";
    Alarm.alarmList.forEach((alarmTask) => {
      const itemContainer = document.createElement("ul");
      const alarmNameField = document.createElement("li");
      const alarmDateField = document.createElement("li");
      const alarmTimeField = document.createElement("li");
      const deleteBtn = document.createElement("button");
      alarmNameField.innerHTML = `<span class="headers">NAME:</span> ${alarmTask.alarmName}`;
      alarmDateField.innerHTML = `<span class="headers">DATE:</span> ${alarmTask.alarmDate}`;
      alarmTimeField.innerHTML = `<span class="headers">TIME:</span> ${alarmTask.alarmTime}`;
      deleteBtn.textContent = "⛔";

      itemContainer.classList.add("alarmTask");
      itemContainer.setAttribute("data-uuid", alarmTask.uuid);
      deleteBtn.classList.add("delete-btn");
      itemContainer.appendChild(alarmNameField);
      itemContainer.appendChild(alarmDateField);
      itemContainer.appendChild(alarmTimeField);
      itemContainer.appendChild(deleteBtn);

      Alarm.createdAlarmsContainer.appendChild(itemContainer);
    });
  }

  deleteAlarmTasks(e) {
    if (e.target.classList.contains("delete-btn")) {
      const removeTask = e.target.parentElement;
      Alarm.alarmList.forEach((alarmTask) => {
        if (alarmTask.uuid === removeTask.getAttribute("data-uuid")) {
          const index = Alarm.alarmList.indexOf(alarmTask);
          Alarm.alarmList.splice(index, 1);
          localStorage.setItem("alarmList", JSON.stringify(Alarm.alarmList));
          this.renderAlarmTasks();
        }
      });
    }
  }

  deleteNow() {
    Alarm.body.addEventListener("click", (e) => this.deleteAlarmTasks(e));
  }

  soundAlarm() {
    setInterval(() => {
      const currentTime = new Date();
      Alarm.alarmList.forEach((alarmTask) => {
        const fullDate = `${alarmTask.alarmDate} ${alarmTask.alarmTime}`;
        const alarmDate = new Date(fullDate);
        if (currentTime >= alarmDate) {
          new Audio("./alarm.wav").play();
          Alarm.soundAlarmPopup.showModal();
        }
      });
    }, 1000);
  }

  stopAlarm() {
    const currentTime = new Date();
    Alarm.alarmList.forEach((alarmTask) => {
      const fullDate = `${alarmTask.alarmDate} ${alarmTask.alarmTime}`;
      const alarmDate = new Date(fullDate);
      if (currentTime >= alarmDate) {
        const index = Alarm.alarmList.indexOf(alarmTask);
        Alarm.alarmList.splice(index, 1);
        localStorage.setItem("alarmList", JSON.stringify(Alarm.alarmList));
        Alarm.soundAlarmPopup.close();
      }
    });
    this.renderAlarmTasks();
  }
}
