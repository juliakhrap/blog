let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu");
    }
});