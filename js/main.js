const body = document.body;

const openButton = document.getElementById("openmenu");
const closeButton = document.getElementById("closemenu");
const menu = document.getElementById("menu");

openButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("menuIsOpened");
});

closeButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("menuIsOpened");
});

let menuNavItems = document.getElementsByClassName("app-menu__nav__item");

menuNavItems = [...menuNavItems];

menuNavItems.forEach(e => {
    e.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});