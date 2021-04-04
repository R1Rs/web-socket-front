/* eslint-disable no-param-reassign */
import Task from "./Task";
import CommunicationWithUser from "./CommunicationWithUser";

const newTask = new Task();
const communication = new CommunicationWithUser();

export default class TopTasks {
  static taskActive() {
    const field = document.querySelector(".top-tasks__field");
    field.focus();
    let allTasks = newTask.getTasks();

    field.addEventListener("focus", () => {
      allTasks = newTask.getTasks();
    });

    field.addEventListener("input", () => {
      const valueField = field.value.toLowerCase();

      allTasks.forEach((task) => {
        if (!task.textContent.toLowerCase().includes(valueField)) {
          task.style.display = "none";
        } else {
          task.style.display = "flex";
        }
        communication.tasksFound();
      });
      if (valueField === " ") {
        newTask.visibleAllTask();
      }
    });

    field.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 && field.value !== "") {
        newTask.addTask(field.value);
        field.value = "";
        newTask.visibleAllTask();
        communication.tasksFound();
      } else if (e.keyCode === 13 && field.value === "") {
        communication.emptyTask();
        field.blur();
      }
    });
  }
}
