const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeBtn = document.querySelector('#time-list');
const board = document.querySelector('#board');

const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff', '#70d6ff']


let time = 0;
let score = 0;

const timeEl = document.querySelector('#time')

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeBtn.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up');
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreadeTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreadeTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your score : <span class="primary">${score}</span></h1>`

}

function createRandomCircle() {
    const color = getColor()
    const circle = document.createElement('div')
    const size = getRandomNum(10, 60)

    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNum(0, width - size)
    const y = getRandomNum(0, height - size)
    circle.classList.add('circle')
    circle.style.backgroundColor = color;
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}


function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}