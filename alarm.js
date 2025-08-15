export class Alarm {
  static dialog = document.querySelector("#add-alarm");
  static createAlarmBtn = document.querySelector("#create-alarm");
  static saveAlarmBtn = document.querySelector("form > #submit");
  static deleteAlarmBtn = document.querySelector("#close-btn");
  static createdAlarmsContainer = document.querySelector("#created-alarms");
  static body = document.querySelector("body");
  static alarmList = [
    {
      alarmName: "wake up",
      alarmDate: "2025-10-02",
      alarmTime: "04: 26",
      uuid: crypto.randomUUID(),
    },
    {
      alarmName: "wake up wake up wake up wake up",
      alarmDate: "2025-10-02",
      alarmTime: "04: 26",
      uuid: crypto.randomUUID(),
    },
  ];

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
          console.log(index);
          Alarm.alarmList.splice(index, 1);
          this.renderAlarmTasks();
        }
      });
    }
  }

  deleteNow() {
    Alarm.body.addEventListener("click", (e) => this.deleteAlarmTasks(e));
  }
}
