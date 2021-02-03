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
        milisec = 00;
    } else if (sec == 60) {
        min++
        displaymin.innerHTML = min
        sec = 00
    } else if (min == 60) {
        hour++
        displayhr.innerHTML = hour
        min = 00
    }
}

function start() {
    timerplay = setInterval(time, 10);
    var btn = document.getElementById('startbtn').disabled = true
}

function stop() {
    clearInterval(timerplay)
    btn = document.getElementById('startbtn').disabled = false
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


// TIMER CODING------------------------------------------------------------

var cthours = 0;
var ctmnts = 0;
var ctsecs = 0;
var startchr = 0;
var timerplay2;

function countdownTimer() {
    if (startchr == 0 && document.getElementById('thours') && document.getElementById('tmins') && document.getElementById('tsecs')) {
        cthours = parseInt(document.getElementById('thours').value) * 1;
        ctmnts = parseInt(document.getElementById('tmins').value) + 0;
        ctsecs = parseInt(document.getElementById('tsecs').value) * 1;
        document.getElementById('thours').value = cthours;
        document.getElementById('tmins').value = ctmnts;
        document.getElementById('tsecs').value = ctsecs;
        startchr = 1;
    }
    if (cthours == 0 && ctmnts == 0 && ctsecs == 0) {
        startchr = 0;
        return false;
    }
    else {
        ctsecs--;
        if (ctsecs < 0) {
            if (ctmnts > 0) {
                ctsecs = 59;
                ctmnts--;
            } else if (cthours > 0) {
                ctmnts = 59;
                cthours--;
            } else {
                ctsecs = 0;
                ctmnts = 0;
                cthours = 0;
            }
        }
    }
    document.getElementById('thours').innerHTML = cthours;
    document.getElementById('tmin').innerHTML = ctmnts;
    document.getElementById('tsec').innerHTML = ctsecs;
    setTimeout('countdownTimer()', 1000);
}

function tstart() {
    timerplay2 = countdownTimer();
    var btn2 = document.getElementById('tstartbtn').disabled = true
}

function tnew() {
    btn2 = document.getElementById('tstartbtn').disabled = false
}
