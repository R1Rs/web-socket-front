import createRequest from "./createRequest";
import TasksLists from "../ui/TaskListForm";

export default class Ticket {
    constructor() {
        this.ticket = null;
        this.method = null;
        this.url = null;
        this.data = null;
        this.getAllTickets();
        this.addTicket();
    }

    addTicket() {
        const buttonAddTicket = document.querySelector(".ticket__button");
        buttonAddTicket.addEventListener("click", () => {
            this.ticket = document.createElement("form");
            this.ticket.innerHTML = `<span class="newTicket__header">Добавить тикет</span>
                                   <span class="ticket__discription">Краткое описание</span> 
                                   <input class="input__discription" name="shortDiscription" type="text">
                                   <span class="ticket__discription">Подробное описание</span> 
                                   <input class="input__discription-full" name="fullDiscription" type="text">
                                   <button class="button__ok">Ok</button>
                                   <button class="button__cancel">Отмена</button>`
            this.ticket.classList.add("ticket__new");
            document.querySelector(".container").insertAdjacentElement("afterbegin", this.ticket);
            this.cancelTicket();
            this.sendTicket();
        })
    }

    sendTicket() {
        const buttonSendTicket = document.querySelector(".button__ok");
        this.url = "http://localhost:3000?method=createTicket";
        this.method = "POST";
        buttonSendTicket.addEventListener("click", (elem) => {
            elem.preventDefault();
            this.data = new FormData(this.ticket);
            let options = {
                method: this.method,
                url: this.url,
                data: this.data,
                callback: (response, err) => {
                    if (response) {
                        console.log(response);
                    } else {
                        console.log(err);
                    }
                }
            }
            createRequest(options);
        })
    }

    cancelTicket() {
        const buttonCancelTicket = document.querySelector(".button__cancel");
        buttonCancelTicket.addEventListener("click", (elem) => {
            elem.preventDefault();
            this.ticket.remove();
        })
    }

    getAllTickets() {
        this.url = "http://localhost:3000/?method=allTickets";
        this.method = "GET";
        let options = {
            method: this.method,
            url: this.url,
            data: null,
            callback: (response, err) => {
                if (response) {
                    console.log(response);
                    new TasksLists(response);
                } else {
                    console.log(err);
                }
            }
        }
        createRequest(options);
    }

    getTicket() {
        this.url = `http://localhost:3000/?method=ticketById&id=${id}`;
        this.method = "GET" ;
        let options = {
            method: this.method,
            url: this.url,
            data: null,
            callback: (response, err) => {
                if (response) {
                    console.log(response);
                } else {
                    console.log(err);
                }
            }
        }
        createRequest(options);
    }

    
}