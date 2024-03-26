const openButton = document.getElementById("openmenu");
const closeButton = document.getElementById("closemenu");
const menu = document.getElementById("menu");

openButton.addEventListener("click", () => {
    menu.classList.toggle("active");
})

closeButton.addEventListener("click", () => {
    menu.classList.toggle("active");
})