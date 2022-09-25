const circle = document.querySelector('.circle');
const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav');
const boxes = document.querySelectorAll('.column__box');
const alphabetSection = document.querySelector('.alphabet-section');
const navButtons = document.querySelectorAll('.nav__btn')
const sections = document.querySelectorAll('.section');
const quizSection = document.querySelector('.quiz-section');
const barsEl = document.querySelectorAll('.animate div');
let sectionState = null;
let score = 0;
let questions = 0;
let objCopy = {};
let objKeys = [];
let currentQuizEl;
let quizColumnType;

const wordsObj = {
    day1: {
        'いいえ': {
            en: "No",
            answer: ['no'],
        },
        'はい': {
            en: 'Yes',
            answer: ['yes'],
        },
        'おねがいします': {
            en: 'Please',
            answer: ['please'],
        },

        "どういたしまして": {
            en: "You're welcome",
            answer: ["you'rewelcome", "yourwelcome", "yourewelcome"],
        },

        'ありがとう': {
            en: 'Thank you/Thanks',
            answer: ['thanks', 'thankyou'],
        },
        'すみません': {
            en: 'Excuse me',
            answer: ['excuseme'],
        },
        'ごめん': {
            en: "Sorry",
            answer: ["sorry", "imsorry", "i'msorry", "iamsorry"],
        },
        'おはよう': {
            en: 'Good morning',
            answer: ['goodmorning'],
        },
        'おやすみ': {
            en: 'Good night',
            answer: ['goodnight'],
        },
        'こんばんは': {
            en: 'Good evening',
            answer: ['goodevening'],
        },

    },

    day2: {
        'ね': {
            en: 'Hey/Right?',
            answer: ['right', 'right?', 'hey'],
        },
        'いいね': {
            en: 'Sounds good/Good idea',
            answer: ['soundsgood', 'good', 'goodidea'],
        },
        'すき': {
            en: 'To Like/Love',
            answer: ['like', 'love'],
        },
        'じゃ': {
            en: 'Well/So/Then',
            answer: ['well', 'then', 'so', 'wellthen'],
        },
        'こんにちは': {
            en: 'Hello/Hi',
            answer: ['hi','hello','goodafternoon',"what'sup"],
        },
        'うるさい': {
            en: 'Shut up',
            answer: ['shutup', 'bequite'],
        },
        'いつ': {
            en: 'When?/How soon?',
            answer: ['when', 'howsoon', 'howsoon?', 'atwhattime']
        },
        'なんだ': {
            en: 'What?',
            answer: ['what', 'what?', 'whatis?', 'whatis'],
        },
        'なに': {
            en: 'What?',
            answer: ['what', 'what?', 'whatis?', 'whatis'],
        },
        'と': {
            en: 'en',
            answer: ['and', 'and?'],
        },
        'たべる': {
            en: 'To Eat',
            answer: ['toeat', 'eat'],
        },
    },
    day3: {
        'わかった': {
            en: 'Okay/Alright',
            answer: ['ok','okay', 'alright','gotit','igotit','understood','iunderstand']
        },
        'ねる': {
            en: 'To Sleep',
            answer: ['sleep', 'tosleep'],
        },
        'わるい': {
            en: 'Bad',
            answer: ['bad'],
        },
        'いい': {
            en: 'Good',
            answer: ['good'],
        },
        'わ': {
            en: 'As for',
            answer: ['asfor'],
        },
        'もしもし': {
            en: 'Hey(When on the phone)',
            answer: ['hi', 'hello','hey', 'hionthephone', 'heyonthephone','helloonthephone'],
        },
        'いく': {
            en: 'To Go',
            answer: ['go', 'togo'],
        },
        'だいじょうぶ': {
            en: 'Okay/Alright',
            answer: ['alright', 'okay', 'imokay','imalright'],
        },
        'ばか': {
            en: 'Stupid',
            answer: ['stupid', 'idiot', 'dumb']
        },
        'よわい': {
            en: 'You watch too much Anime!',
            answer: ['weak'],
        },
        'かわいい': {
            en: 'Cute',
            answer: ['cute'],
        },
        'わたし': {
            en: 'I',
            answer: ['i','me'],
        },
        'あなた': {
            en: 'You',
            answer: ['you'],
        },
        'これ': {
            en: 'This',
            answer: ['this'],
        },
        'それ': {
            en: 'That',
            answer: ['that'],
        },
        'かれ': {
            en: 'He',
            answer: ['he', 'him'],
        },
        'かのじょ': {
            en: 'She',
            answer: ['she', 'her'],
        },
        'かれら': {
            en: 'They',
            answer: ['they', 'them'],
        },
        'みる': {
            en: 'To See/Watch',
            answer: ['see','watch', 'tosee', 'towatch'],
        }
    },
    day4: {
        'はじめまして': {
            en: 'Nice to meet you',
            answer: ['nicetomeetyou'],
        },
        'まって': {
            en: 'Wait',
            answer: ['wait', 'hold on'],
        },
        'えいが': {
            en: 'Movie',
            answer: ['movie', 'film', 'cinema'],
        },
        'みせ': {
            en: 'Shop/Store',
            answer: ['shop', 'store'],
        },
        'いえ': {
            en: 'Home/House',
            answer: ['home', 'house'],
        },
        'あとで': {
            en: 'Later',
            answer: ['later', 'lateron', 'afterwards'],
        },
        'まえに': {
            en: 'Before',
            answer: ['before', 'earlier','previously'],
        },
        'いま': {
            en: 'Now/Currently',
            answer: ['now','currently'],
        },
        'きょう': {
            en: 'Today',
            answer: ['today'],
        },
        'きのう': {
            en: 'Yesterday',
            answer: ['yesterday'],
        },
        'あした': {
            en: 'Tomorrow',
            answer: ['tomorrow'],
        },
        'どうして': {
            en: 'Why?',
            answer: ['why', 'why?','whatfor', 'whatfor?'],
        },
        'あら': {
            en: 'Oh dear/Oh my',
            answer: ['ohdear','ohmy','ohgod'],
        },
        'がんばる': {
            en: 'Do your best/Try hard',
            answer: ['goodluck', 'doyourbest', 'tryhard', 'tryharder']
        },
        'そうか': {
            en: 'Aha/I see',
            answer: ['aha','isee','okay'],
        },
        'きれい': {
            en: 'Pretty/Beautiful',
            answer: ['pretty', 'beautiful',],
        },
        'わかる': {
            en: 'To Understand/Know',
            answer: ['tounderstand', 'toknow', 'understand','know'],
        }
    }
}

const lettersObj = {
    v: {
        a: 'あ',
        i: 'い',
        u: 'う',
        e: 'え',
        o: 'お',
    },
    k: {
        ka: 'か',
        ki: 'き',
        ku: 'く',
        ke: 'け',
        ko: 'こ',
    },
    s: {
        sa: 'さ',
        shi: 'し',
        su: 'す',
        se: 'せ',
        so: 'そ',
    },
    t: {
        ta: 'た',
        chi: 'ち',
        tsu: 'つ',
        te: 'て',
        to: 'と',
    },

    n: {
        na: 'な',
        ni: 'に',
        nu: 'ぬ',
        ne: 'ね',
        no: 'の',
    },

    h: {
        ha: 'は',
        hi: 'ひ',
        fu: 'ふ',
        he: 'へ',
        ho: 'ほ',
    },

    m: {
        ma: 'ま',
        mi: 'み',
        mu: 'む',
        me: 'め',
        mo: 'も',
    },

    y: {
        ya: 'や',
        yu: 'ゆ',
        yo: 'よ',
    },

    r: {
        ra: 'ら',
        ri: 'り',
        ru: 'る',
        re: 'れ',
        ro: 'ろ',
    },

    w: {
        wa: 'わ',
        wo: 'を',
    },
}

insertHtml('alphabet', lettersObj);
insertHtml('word', wordsObj);




// event listeners ==================================================
circle.addEventListener('click', () => {
    circle.classList.add('circle-animate');
    
    setTimeout(() => {
        window.location.href = '../../jp/ee.html';
    }, 200)
});

// navigation
ham.addEventListener('click', animateNav);

navButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        navHandler(e);
        animateNav();
    })
});
// navigation

document.querySelectorAll('.column__box').forEach(box => {
    box.addEventListener('click', boxHandler);
});

document.querySelectorAll('.random-quiz-btn').forEach(btn => {
    btn.addEventListener('click', randomQuizHandler);
})

document.querySelectorAll('.column__quiz-btn').forEach(btn => {
    btn.addEventListener('click', columnBtnHandler);
})




function boxHandler(e) {
    objCopy = {};
    objKeys = [];
    quizColumnType = null;
    score = 0;
    let letterJp;
    let letterEn;

    if(e.target.dataset.type == 'word') {
        letterJp = e.target.dataset.box;
        letterEn = wordsObj[e.target.dataset.column][letterJp].en;
    } else {
        letterEn = e.target.dataset.box.toUpperCase();
        letterJp = e.target.textContent;
    }
    
    currentQuizEl = e.target;

    displayQuizPage(letterJp, letterEn);
}

function columnBtnHandler(e) {
    score = 0;
    if(e.target.dataset.type == 'word') {
        objCopy = {};
        objKeys = [];
        Object.assign(objCopy, wordsObj[e.target.dataset.column]);
        objKeys = Object.keys(objCopy);
        quizColumnType = 'word';
    }else {
        objCopy = {};
        objKeys = [];
        Object.assign(objCopy, lettersObj[e.target.dataset.column]);
        objKeys = Object.keys(objCopy);
        quizColumnType = 'alphabet';
    }
    questions = objKeys.length;

    manageQuizState();
}

function randomQuizHandler(e) {
    objCopy = {};
    objKeys = [];
    score = 0;
    if(e.target.dataset.type == 'word') {
        for(day in wordsObj) {
            Object.assign(objCopy, wordsObj[day]);
        }
        quizColumnType = 'word';
    } else {
        for(column in lettersObj) {
            Object.assign(objCopy, lettersObj[column]);
        }
        quizColumnType = 'alphabet';
    }

    objKeys = Object.keys(objCopy);
    console.log(objCopy)
    questions = objKeys.length;
    manageQuizState();
}

function submitHandler(e) {
    if(e.key !== 'Enter') return;
    let userInput = e.target.value.toLowerCase();
    let answer;
    currentElDataset = currentQuizEl.dataset;
    resetInput();

    if(currentElDataset.type == 'word') {
        const answerArr = wordsObj[currentElDataset.column][currentElDataset.box].answer;
        const trimmedInput = userInput.split(' ').join('').toLowerCase();
        answer = answerArr.includes(trimmedInput);
    } else {
        answer = currentQuizEl.dataset.box.toLocaleLowerCase() == userInput;
    }

    if(answer) {
        changeBoxColor(true);
    } else {
        changeBoxColor(false);
    }

    if(quizColumnType) {
        setTimeout(() => {
            manageQuizState();
        }, 1000);
    } else {
        setTimeout(() => {
            exitQuizPage()
        }, 1000)
    }
}


// display column and boxes


function insertHtml(parent, obj) {
    const sectionEl = document.querySelector('.' + parent + '-wrapper');

    for(column in obj) {
        const wrapperEl = sectionEl.appendChild(document.createElement('div'));
        const columnBtnEl = wrapperEl.appendChild(document.createElement('button'));
        const columnEl = wrapperEl.appendChild(document.createElement('div'));

        wrapperEl.classList.add('column', parent);
        columnBtnEl.classList.add('column__quiz-btn', 'quiz-btn');
        columnEl.classList.add('column__content');

        wrapperEl.dataset.column = column;
        columnBtnEl.dataset.column = column;
        columnBtnEl.dataset.type = parent;

        if(parent == 'alphabet') {
            columnBtnEl.textContent = column.toUpperCase();
        } else {
            const formattedText = `Day ${column.slice(-1)}`;
            columnBtnEl.textContent = formattedText;
        }

        for(box in obj[column]) {
            const wordEl = columnEl.appendChild(document.createElement('div'));
            wordEl.classList.add('column__box', box)
            wordEl.dataset.column = column;
            wordEl.dataset.box = box;
            wordEl.dataset.type = parent;
            if(parent == 'alphabet') {
                wordEl.textContent = obj[column][box];
            } else {
                wordEl.textContent = box;
            }
        }
    }
}

//  display quiz page

function displayQuizPage(jp, en) {
    hideSections();
    quizSection.classList.remove('hide');
    const quizEl = document.querySelector('.quiz');

    if(quizEl) {
        document.querySelector('.quiz__en').textContent = en;
        document.querySelector('.quiz__jp').textContent = jp;
        document.querySelector('.quiz__input-box').focus();
        document.querySelector('.quiz__en').classList.add('hidden');
        if(quizColumnType) document.querySelector('.skip-btn').classList.remove('hide');

        return;
    }

    quizSection.innerHTML = `
    <div class="quiz"> 
        <div class="quiz__box">
            <div class="quiz__buttons">
                <button class="quiz__btn back-btn"><img src="assets/images/back-svgrepo-com.svg" alt=""></button>
                <button class="quiz__btn speaker-btn"><img src="assets/images/speaker-svgrepo-com.svg" alt=""></button>
                <button class="quiz__btn skip-btn ${quizColumnType||'hide'}">Skip</button>
            </div>

            <div class="quiz__content">
                <p class="quiz__jp">${jp}</p>
                <p class="quiz__en hidden">${en}</p>
            </div>
        </div>

        <div class="quiz__input">
            <input type="text" autofocus class="quiz__input-box">
        </div>
    </div>`;
    const submitBoxEl = document.querySelector('.quiz__input-box');
    submitBoxEl.focus();

    submitBoxEl.addEventListener('keypress', submitHandler);
    document.querySelector('.skip-btn').addEventListener('click', nextQuiz);
    document.querySelector('.back-btn').addEventListener('click', exitQuizPage);
    document.querySelector('.speaker-btn').addEventListener('click', e => {
        const text = document.querySelector('.quiz__jp').textContent;

        const utter = new SpeechSynthesisUtterance(text);
        utter.lang  = 'ja'
        window.speechSynthesis.speak(utter);
    })

}


// check answer 


function exitQuizPage() {
    hideSections();
    document.querySelector(`.${sectionState}-section`).classList.remove('hide');
    document.querySelector('.skip-btn').classList.add('hide');
    objKeys = [];
    objCopy = {};
    quizColumnType = null;
    score = 0;
    questions = 0;
}

function manageQuizState() {
    if(objKeys.length <= 0) {
        console.log(`you got ${score} right out of ${questions}`)
        exitQuizPage();
        return;
    }


    const randomInt = Math.floor(Math.random() * objKeys.length);
    const value = objKeys[randomInt]
    objKeys.splice(randomInt, 1);
    currentQuizEl = document.querySelector(`.${value}`);


    console.log(sectionState, objCopy, objKeys)

    if(quizColumnType == 'word') {
        displayQuizPage(value, objCopy[value].en);
        return;
    }
    displayQuizPage(objCopy[value], value);
}

function animateNav() {
    if(nav.classList.contains('nav-animate')) {
        nav.classList.remove('nav-animate');
        ham.classList.remove('ham-animate');
    } else {
        nav.classList.add('nav-animate');
        ham.classList.add('ham-animate');
    }
}

function navHandler(e) {
    sectionState = e.target.dataset.section;

    if(sectionState) {
        hideSections();
    };

    document.querySelector(`.${sectionState}-section`).classList.remove('hide');
}

function hideSections() {
    sections.forEach(section => {
            if(!section.classList.contains('hide')) section.classList.add('hide');
    });
}

function changeBoxColor(bol) {
    document.querySelector('.quiz__en').classList.remove('hidden');
    if(bol) {
        setQuizBoxColorTo('rgb(155, 255, 116)');
        score++;
    } else {
        setQuizBoxColorTo('rgb(255, 116, 116)');
    }
};

function setQuizBoxColorTo(color) {
    const box = document.querySelector('.quiz__box');

    box.style.backgroundColor = color;
    setTimeout(() => {
        box.style.backgroundColor = '';
    }, 1000);
}

function nextQuiz() {
    changeBoxColor(false)
    resetInput();
    setTimeout(manageQuizState, 1000);
}

function resetInput() {
    const submitBoxEl = document.querySelector('.quiz__input-box');
    submitBoxEl.value = '';
    submitBoxEl.blur();
}

function getRandomInt() {
    let int;

    do {
        int = Math.floor(Math.random() * 255);
    } while(int > 200);

    return int;
}


function changeBarColor() {
    barsEl.forEach(bar => {
        console.log(bar)
        bar.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    })
}

document.querySelector('.animate').addEventListener('click', (e) => {
    changeBarColor();
    e.target.classList.add('animate-it');
    setTimeout(() => {
        e.target.classList.remove('animate-it')
    }, 1000)
})