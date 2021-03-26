let timerHeader = document.querySelector('#timerHeader'),
    resultHeader = document.querySelector('#resultHeader'),
    gameBody = document.querySelector('#gameBody'),
    buttonStart = document.querySelector('#start'),
    timer = document.querySelector('#timer'),
    i = setInterval(setTimer, 100),
    result = document.querySelector('#result'),
    count = 0

function hide(element) {
    element.classList.add('hide')
}
function show(element) {
    element.classList.remove('hide')
}

//setTimer
function setTimer() {
    let inputTimer = document.querySelector('#inputTimer').value
        timer.innerHTML = Number(inputTimer).toFixed(1)
}
//setTimer

//startGame
buttonStart.addEventListener('click', function () {

    show(timerHeader)
    hide(resultHeader)
    clearInterval(i);
    count = 0
    startGame()

    let gameTimer = setInterval(function () {

        let box = document.querySelector('#box'),

            timer = document.querySelector('#timer').textContent
        timer = (Number(timer).toFixed(1)) - 0.1
        timer = timer.toFixed(1)

        document.querySelector('#timer').innerHTML = timer

        if (timer < 0) {
            clearInterval(gameTimer);
            hide(timerHeader)
            show(resultHeader)
            result.textContent = count
            box.remove()
            show(buttonStart)
            i = setInterval(setTimer, 100)
        }
    },100)
})

gameBody.addEventListener('click', function (event) {
    if (event.target.id === 'box') {
        count ++
        event.target.remove()
        startGame()
    }
})

//generateBox
function renderBox() {
    let side = Math.floor(Math.random() * 110)

    if (side < 45) {
        side = 45 + Math.floor(Math.random() * 20)
    } else if (side > 90) {
        side = 90 - Math.floor(Math.random() * 20)
    }
    return side
}

function renderPosition(side) {
    let value= Math.floor(Math.random() * 270)
    if(value > 300 - side) {
        value = 300 - side
    }
    return value
}

function renderColor() {
    let color = '#'
    for (let colorCount = 0; colorCount <= 5; colorCount ++) {
        color = color + Math.floor(Math.random() * 10)
    }
    return color
}

function setBox(side, color) {

    box = document.createElement('div')
    box.style.width = side + 'px'
    box.style.height = side + 'px'
    box.style.backgroundColor = color
    box.setAttribute('id', 'box')
    box.style.marginLeft = renderPosition(side) + 'px'
    box.style.marginTop = renderPosition(side) + 'px'

    gameBody.insertAdjacentElement('afterbegin', box)
}
//generateBox

function startGame() {

    hide(buttonStart)
    let box = renderBox(),
        color = renderColor()
    setBox(box, color)
}

function startGame123() {

    hide(buttonStart)
    let box = renderBox(),
        color = renderColor()
    setBox(box, color)
}
function new() {

    hide(buttonStart)
    let box = renderBox(),
        color = renderColor()
    setBox(box, color)
}

