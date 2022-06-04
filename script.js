var n = document.getElementById("number")
n.innerHTML = 0;

function increment() {
    var curNum = n.innerHTML;
    n.innerHTML = parseInt(curNum) + 1;
}

function decrement() {
    var curNum = n.innerHTML;
    n.innerHTML = parseInt(curNum) - 1;
}