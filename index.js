var game1 = Math.floor(Math.random() * 6 + 1);
var sun = "dice" + game1 + ".png";
var a = document.getElementById("a");
a.setAttribute("src", sun);


var game2 = Math.floor(Math.random() * 6 + 1);
var win1 = "dice" + game2 + ".png";
var b = document.getElementById("b");
b.setAttribute("src", win1);

if (game1 > game2) {


    document.querySelector("h1").innerHTML = "player 1 win";
} else if (game2 > game1) {
    document.querySelector("h1").innerHTML = "player 2 win";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}