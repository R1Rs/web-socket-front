export default class Ticket {
    constructor() {
        this.ticket = null;
        this.addTicket();
    }

    addTicket() {
        const buttonAddTicket = document.querySelector(".ticket__button");
        buttonAddTicket.addEventListener("click", () => {
            this.ticket = document.createElement("form");
            this.ticket.innerHTML = `<span class="newTicket__header">Добавить тикет</span>
                                   <input class="input__discription" name="shortDiscription" type="text">
                                   <input class="input__discription" name="fullDiscription" type="text">
                                   <button class="button__ok">Ok</button>
                                   <button class="button__cancel">Отмена</button>`
            this.ticket.classList.add("ticket__new");
            document.body.insertAdjacentElement("afterbegin", this.ticket);
            this.sendTicket();
            this.cancelTicket();
        })
    }

    sendTicket() {
        const buttonSendTicket = document.querySelector(".button__ok");
        buttonSendTicket.addEventListener("click", (elem) => {
            elem.preventDefault();
            console.log("press Ok")
        })
    }

    cancelTicket() {
        const buttonCancelTicket = document.querySelector(".button__cancel");
        buttonCancelTicket.addEventListener("click", (elem) => {
            elem.preventDefault();
            this.ticket.remove();
        })
    }
}