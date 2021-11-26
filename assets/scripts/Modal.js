let button = document.querySelector('.burger');
let app = document.querySelector('body')
let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menu-list')

menu.style.display = "none";


button.addEventListener('click', () => {
    button.classList.toggle("change");
    if (menu.style.display== "none") {
        menu.style.display = "flex";
        menuList.style.display = "flex";
        app.style.overflowY = "hidden";
    }
    else {
        menu.style.display = "none";
        menuList.style.display = "none";
        app.style.overflowY = "scroll";
    }
})