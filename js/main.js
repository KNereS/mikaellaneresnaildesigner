const doc = document.querySelector("html");

const openButton = document.getElementById("openmenu");
const closeButton = document.getElementById("closemenu");
const menu = document.getElementById("menu");

openButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    doc.classList.toggle("menuIsOpened");
});

closeButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    doc.classList.toggle("menuIsOpened");
});

let menuNavItems = document.getElementsByClassName("app-menu__nav__item");

menuNavItems = [...menuNavItems];

menuNavItems.forEach(e => {
    e.addEventListener("click", () => {
        menu.classList.remove("active");
        doc.classList.toggle("menuIsOpened");
    });
});

let initialScrollY = 0;
let isScrollPositive = false;

const pageHeader = document.body.querySelector("header");

window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    if (currentScrollY > initialScrollY) {
        isScrollPositive = true
    } else {
        isScrollPositive = false
    }

    if (isScrollPositive) {
        pageHeader.style.top = "-90px";
    } else {
        pageHeader.style.top = "-1px";
    }

    initialScrollY = currentScrollY;

})