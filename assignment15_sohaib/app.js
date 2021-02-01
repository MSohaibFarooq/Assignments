var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var displayhr = document.getElementById('hour')
var displaymin = document.getElementById('min')
var displaysec = document.getElementById('sec')
var displaymilisec = document.getElementById('mili')
var timerplay;

function time() {
    milisec++
    displaymilisec.innerHTML = milisec
    if (milisec == 100) {
        sec++
        displaysec.innerHTML = sec
        milisec = 0;
    } else if (sec == 60) {
        min++
        displaymin.innerHTML = min
        sec = 0
    } else if (min == 60) {
        hour++
        displayhr.innerHTML = hour
        min = 0
    }
}

function start() {
    timerplay = setInterval(time, 10);
}

function stop() {
    clearInterval(timerplay)
}

function reset() {
    milisec = 00
    sec = 00
    min = 00
    hour = 00
    displaymilisec.innerHTML = milisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
    displayhr.innerHTML = hour
}