const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const navMenu = document.querySelector(".nav-menu");
const logoContainer = document.querySelector(".sociallogo_container");
const accountDropdown = document.querySelector(".dropdown-content");
const dropdownButton = document.querySelector(".dropdoen-button");
const dropdownButtonShop = document.querySelector(".dropdown-buttonShop");
const shopDropdown = document.querySelector(".dropdown-contentShop");


menuIcon.addEventListener("click",() => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
    logoContainer.classList.toggle("active");
    closeIcon.classList.toggle("active");
})
closeIcon.addEventListener("click",() => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
    logoContainer.classList.toggle("active");
    closeIcon.classList.toggle("active");
    accountDropdown.classList.remove("active");

})

dropdownButton.addEventListener("click",() => {
    accountDropdown.classList.toggle("active");
})

dropdownButtonShop.addEventListener("click",() => {
    shopDropdown.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
    logoContainer.classList.remove("active");
    closeIcon.classList.remove("active");
    
}))

document.querySelectorAll(".dropdoen-link").forEach(n => n.addEventListener("click",() =>{
    accountDropdown.classList.remove("active");
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
    logoContainer.classList.remove("active");
    closeIcon.classList.remove("active");
}))