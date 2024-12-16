/* Start Global Function */
window.onscroll = () => {
    navbar.classList.remove(`active`);
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
/* End Global Function */


/* Start header */
let navbar = document.querySelector('.navbar');
document.querySelector(`#menu-btn`).onclick = () => {
    navbar.classList.toggle(`active`);
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector(`#search-btn`).onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove(`active`);
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector(`#cart-btn`).onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove(`active`);
    searchForm.classList.remove('active');
}



/* End header */

/*  start footer */
const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = year;

/*  End footer */
