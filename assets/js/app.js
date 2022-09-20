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
        
        goToAlphabet();

        quizSection.innerHTML = `
            <div class="alphabet-quiz"> 
                <div class="alphabet-quiz__box">
                    <div class="alphabet-quiz__buttons">
                        <button class="alphabet-quiz__btn back-btn">
                            <img src="assets/images/back-svgrepo-com.svg" alt="">
                        </button>
                        <button class="alphabet-quiz__btn speaker-btn">
                            <img src="assets/images/speaker-svgrepo-com.svg" alt="">
                        </button>
                    </div>

                    <div class="alphabet-quiz__content">
                        <p class="alphabet-quiz__jp-letter">${lettersObj[dataset]}</p>
                        <p class="alphabet-quiz__en-letter hidden">${dataset}</p>
                    </div>
                    </div>

                    <div class="alphabet-quiz__input">
                        <input type="text" autofocus class="alphabet-quiz__input-box" id="input">
                    </div>
                </div>
            </div>
        `;

        document.querySelector('.back-btn').addEventListener('click', () => {
            goToAlphabet();
        })

        document.querySelector('.alphabet-quiz__input-box').addEventListener('keypress', e => {
            if(e.key === 'Enter') {
                if(e.target.value.toLowerCase() == dataset) {
                    document.querySelector('.alphabet-quiz__en-letter').classList.remove('hidden');
                    e.target.value = '';
                    boxColor('green');

                    setTimeout(() => {
                        document.querySelector('.alphabet-quiz').remove();
                        goToAlphabet();
                        alphabetSection.classList.remove('hide');
                    }, 1000);
                } else {
                    e.target.value = '';
                    boxColor('red');
                }
            }
        }); 

        document.querySelector('.speaker-btn').addEventListener('click', (e) => {

        })

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
    sections.forEach(section => {
            if(!section.classList.contains('hide')) section.classList.add('hide');
    });
}

function goToAlphabet() {
    hideSections();
    quizSection.classList.remove('hide');
}

function boxColor(color) {
    const box = document.querySelector('.alphabet-quiz__box');

    box.style.backgroundColor = color;
    setTimeout(() => {
        box.style.backgroundColor = '';
    }, 200);
}


//  word section 

