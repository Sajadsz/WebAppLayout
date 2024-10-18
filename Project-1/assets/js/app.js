// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});


// ********** dropdown toggle ************
// select button and links
const dropBtn = document.getElementById("sd-container");
const items = document.getElementById("sd-container-2");
// add event listener
dropBtn.addEventListener("click", () => {
    items.classList.toggle("services-dropdown-show");
});

// ********** dropdown 2 toggle ************
// select button and links
const dropBtn2 = document.getElementById("dropdown-2");
const items2 = document.getElementById("services-dropdown-2");
// add event listener
dropBtn2.addEventListener("click", () => {
    items2.classList.toggle("services-dropdown-2-show");
});

// ********** dropdown 2.2 toggle ************
// select button and links
const dropBtn22 = document.getElementById("dropdown-22");
const items22 = document.getElementById("services-dropdown-22");
// add event listener
dropBtn22.addEventListener("click", () => {
    items22.classList.toggle("services-dropdown-2-show");
});

// ********** dropdown sign up toggle ************
// select button and links
const dropBtn3 = document.getElementById("sign-icon-nav");
const items3 = document.getElementById("index-signup-dropdown-m");
// add event listener
dropBtn3.addEventListener("click", () => {
    items3.classList.toggle("index-signup-dropdown-m-show");
});