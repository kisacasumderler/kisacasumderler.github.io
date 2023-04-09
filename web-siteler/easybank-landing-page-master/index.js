let hamburger, closeIcon, navUl;

hamburger = document.querySelector('#Hamburger');
closeIcon = document.querySelector('#Close');
navUl = document.querySelector('#navUl');
body = document.querySelector('body');

function activeNavbar() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    closeIcon.classList.toggle('active');
    body.classList.toggle('active');
}

hamburger.addEventListener('click', () => {
    activeNavbar();
});

closeIcon.addEventListener('click', () => {
    activeNavbar();
});

