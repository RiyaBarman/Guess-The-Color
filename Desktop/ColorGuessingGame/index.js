var squares = document.querySelectorAll(".square");
var navbar = document.querySelector(".navbar");
var nav = document.querySelector(".nav span");
var reload = document.querySelector("#reload");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var msg = document.getElementById("message");

var numblocks = 6;
var colors = generateRandomColor(numblocks);

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
var targetcolor = pickRandomColor();
nav.textContent = targetcolor;
console.log(targetcolor);

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        // console.log("click");
        var currColor = squares[i].style.backgroundColor;
        console.log(currColor, targetcolor);
        if (currColor === targetcolor) {
            guessedRight();

        } else {
            squares[i].style.backgroundColor = "#313131";
        }
    });
}

easyBtn.addEventListener('click', function () {
    numblocks = 3;
    colors = generateRandomColor(numblocks);
    targetcolor = pickRandomColor();
    nav.textContent = targetcolor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.backgroundColor = "#313131"
        }
    }
});

hardBtn.addEventListener('click', function () {
    numblocks = 6;
    colors = generateRandomColor(numblocks);
    targetcolor = pickRandomColor();
    nav.textContent = targetcolor;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];
    }
});


reload.addEventListener('click', () => {
    reload.textContent = "New Colors";
    msg.textContent = ""
    colors = generateRandomColor(numblocks);

    targetcolor = pickRandomColor();
    nav.textContent = targetcolor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    navbar.style.background = "#E7DBCF"
});


function guessedRight() {

    for (let i = 0; i < numblocks; i++) {
        squares[i].style.backgroundColor = targetcolor;
    }
    navbar.style.backgroundColor = targetcolor;
    reload.textContent = "Play Again?";
    msg.textContent = "Correct!"
}


function pickRandomColor() {
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}


function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}


