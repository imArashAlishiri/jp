const circle = document.querySelector('.circle');
const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav');
const letters = document.querySelectorAll('.alphabet-column__letter');
const alphabetSection = document.querySelector('.alphabet-section');
const navButtons = document.querySelectorAll('.nav__btn')
const sections = document.querySelectorAll('.section');
const quizSection = document.querySelector('.quiz-section');

const lettersObj = {
    a: 'あ',
    i: 'い',
    u: 'う',
    e: 'え',
    o: 'お',
}

circle.addEventListener('click', () => {
    circle.classList.add('circle-animate');

    setTimeout(() => {
        window.location.href = '../../jp/ee.html';
    }, 200)
});

navButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        hideSections()
        const targetSection = document.querySelector(`.${e.target.dataset.subject}-section`);
        targetSection.classList.remove('hide');
        animateNav();
    })
})

ham.addEventListener('click', animateNav)

letters.forEach(letter => {
    letter.addEventListener('click', e => {
        const dataset = e.target.dataset.letter;
        
        hideSections();

        quizSection.classList.remove('hide');
        quizSection.textContent = lettersObj[dataset];
    })
})


function animateNav() {
    if(nav.classList.contains('nav-animate')) {
        nav.classList.remove('nav-animate');
        ham.classList.remove('ham-animate');
    } else {
        nav.classList.add('nav-animate');
        ham.classList.add('ham-animate');
    }
}


function hideSections() {
    alphabetSection.classList.add('hide');
}

function hideSections() {
    sections.forEach(section => {
            if(!section.classList.contains('hide')) section.classList.add('hide');
    });
}