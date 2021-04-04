export default class CommunicationWithUser {
  constructor() {
    this.windowMessage = document.querySelector(".modal");
    this.modalButton = document.querySelector(".modal__button");
    this.container = document.querySelector(".container");
    this.allTasksContainer = document.querySelector(".all-tasks");
    this.taskWithDisplayNone = new Set();
    this.foundText = false;
  }

  emptyTask() {
    this.windowMessage.classList.add("modal__active");
    this.modalButton.addEventListener("click", () => this.listenerModalButton());
    this.container.classList.add("container__fixed");
  }

  listenerModalButton() {
    this.windowMessage.classList.remove("modal__active");
    this.container.classList.remove("container__fixed");
  }

  tasksFound() {
    const notFoundText = document.createElement("span");
    notFoundText.classList.add("found__text");
    notFoundText.innerText = "No tasks found";
    const allTasks = this.allTasksContainer.querySelectorAll(".all-tasks__task");
    allTasks.forEach((task) => {
      if (task.style.display === "none") {
        this.taskWithDisplayNone.add(task);
      } else {
        this.taskWithDisplayNone.delete(task);
      }

      if (this.taskWithDisplayNone.size === allTasks.length && this.foundText === false) {
        this.allTasksContainer.insertAdjacentElement("beforeend", notFoundText);
        this.foundText = true;
      } else if (this.taskWithDisplayNone.size !== allTasks.length && this.foundText === true) {
        this.foundText = false;
        document.querySelector(".found__text").remove();
      }
    });
  }
}
