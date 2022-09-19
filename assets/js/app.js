const circle = document.querySelector('.circle');
const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav');


circle.addEventListener('click', () => {
    circle.classList.add('circle-animate');

    setTimeout(() => {
        window.location.href = '../../jp/ee.html';
    }, 200)
});

ham.addEventListener('click', animateNav)









function animateNav() {
    if(nav.classList.contains('nav-animate')) {
        nav.classList.remove('nav-animate');
        ham.classList.remove('ham-animate');
    } else {
        nav.classList.add('nav-animate');
        ham.classList.add('ham-animate');
    }
}