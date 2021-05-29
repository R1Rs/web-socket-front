export default class TasksList {
    constructor(data) {
        this.container = document.querySelector(".ticket__container-list");
        this.data = data;
        this.generationTasks()
    }
    
    generationTasks() {
        this.data.forEach(element => {
            console.log(element);
            this.createHTMLForTasksList(element);
        });
    }

    createHTMLForTasksList(task) {
        const name = task.name;
        const status = task.status;
        this.container.innerHTML += `<li class="ticket__container-list__item">
                                        <div class="list__item">
                                            <input class="item__checkbox-status" type="checkbox">
                                            <span class="item__name">${name}</span>
                                            <span class="item__date">20.12.2020</span>
                                            <input class="item__checkbox-edit" type="checkbox">
                                            <input class="item__checkbox-delete" type="checkbox">
                                        </div>
                                      </li>
                                    `

        console.log(this.container)
    }
}

