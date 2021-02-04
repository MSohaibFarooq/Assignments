function dis(val) {
    document.getElementById("result").value += val
}

function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clr() {
    document.getElementById("result").value = ""
}

var backspace = function () {

    var erase = document.getElementById('result').value;
    document.getElementById('result').value = erase.substring(0, erase.length - 1);

}