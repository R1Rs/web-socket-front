import "./css/style.css";
import Ticket from "./js/addTicket";
new Ticket();

const subscribeWidget = document.querySelector("[data-widget=subscribe]");
const subscribeForm = subscribeWidget.querySelector('[data-id=subscribe-form]');
const nameInput = subscribeWidget.querySelector('[data-id=name]');
const phoneInput = subscribeWidget.querySelector('[data-id=phone]');

subscribeForm.addEventListener("submit", (elem) => {
    elem.preventDefault();
    console.log(subscribeForm.elements)
})

const params = Array.from(subscribeForm.elements)
    .filter(({name}) => name)
    .map(({name, value}) => `${name}=${encodeURIComponent(value)}`)
    .join("&");

const url = "http://localhost:7070";
const xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
xhr.send(params);

