




var messages = ["REWARDS", "SAVINGS"
    , "SUPPORT", "ANALYTICS", "CARDS", "FOREX", "LOAN", "INVESTMENTS"];
var rank = 0;

document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e) {
    _h1 = this.getElementsByTagName("h1")[0];
    _h1.style.webkitAnimation = 'none'; // set element animation to none
    setTimeout(() => { // you surely want a delay before the next message appears
        _h1.innerHTML = messages[rank];
        var speed = 3.5 * messages[rank].length / 20;
        _h1.style.webkitAnimation = 'typing ' + speed + 's steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
        (rank === messages.length - 1) ? rank = 0 : rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}

console.log(document.getElementById("email").value);

let date = new Date();
let year = date.getFullYear();
// console.log(date.getFullYear());
document.getElementById("year").innerHTML = year;


const classes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "ten"];
var c = -1;

var myInterval = setInterval(function () {
    c++;
    var elements = document.getElementsByClassName(`${classes[c]}`);
    c = c % 10;
    for (let i = 0; i < elements.length; i++) {

        var x = elements[i];
        x.classList.add("highLight", "textHighLight");

    }

    setTimeout(() => {
        for (let i = 0; i < elements.length; i++) {

            var y = elements[i];
            y.classList.remove("highLight", "textHighLight");

        }
    }, 2000);

}, 2000);



var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var text = document.querySelector(".shortText");
if (width <= 802) {
    text.innerHTML = "We are a Neo Bank, cook and simply awesome!";
}