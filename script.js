function dis(val) {
    document.getElementById("result").value += val
}

function clr() {
    document.getElementById("result").value = ""
}

function solve() {
    let a = document.getElementById("result").value
    let b = eval(a)
    document.getElementById("result").value = b
}

function del() {
    document.getElementById("result").value = document.getElementById("result").value.substring(0, document.getElementById("result").value.length - 1)

}

function isNumber(evt) {
    if (evt.keyCode > 31 && (evt.keyCode < 48 || evt.keyCode > 57)) {
        alert("Only numbers are allowed")
        return false;
    }
    return true;
}
