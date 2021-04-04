/* eslint-disable no-param-reassign */
export default class Task {
  constructor() {
    this.task = null;
    this.pinnedEmpty = true;
    this.allTasksContainer = document.querySelector(".all-tasks");
    this.pinnedContainer = document.querySelector(".pinned");
    this.tasks = [];
    this.pinnedTasks = [];
  }

  addTask(nameTask) {
    this.task = document.createElement("div");
    this.task.classList.add("all-tasks__task");
    this.task.innerText = nameTask;

    this.allTasksContainer.insertAdjacentElement("beforeend", this.task);

    const pinnedButton = document.createElement("input");
    pinnedButton.setAttribute("type", "checkbox");
    pinnedButton.classList.add("modal-pinned_check");

    this.task.insertAdjacentElement("beforeend", pinnedButton);
    this.tasks.push(this.task);
    this.task.addEventListener("click", (event) => this.checkTask(event));
  }

  pinned() {
    if (this.pinnedContainer.lastElementChild === document.querySelector(".pinned__empty")) {
      document.querySelector(".pinned__empty").style.display = "block";
    } else {
      document.querySelector(".pinned__empty").style.display = "none";
    }
  }

  checkTask(event) {
    const task = event.currentTarget;
    if (task.querySelector("input").checked) {
      this.pinnedContainer.insertAdjacentElement("beforeEnd", task);
      this.pinned();
    } else {
      if (task.parentElement === this.allTasksContainer) {
        return;
      }
      this.allTasksContainer.insertAdjacentElement("beforeEnd", task);
      this.pinned();
    }
  }

  getTasks() {
    return this.tasks;
  }

  visibleAllTask() {
    this.tasks.forEach((task) => {
      task.style.display = "flex";
    });
  }
}
