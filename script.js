let cont = document.getElementById("cont")
let banana = document.getElementById("myImg2")

setInterval(randomColour, 100)

setInterval(bananaMove, 100)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}
function bananaMove(){

        randplace1 = Math.floor(Math.random() * 99);
        randplace2 = Math.floor(Math.random() * 99);
        randplace3 = Math.floor(Math.random() * 99);
        randplace4 = Math.floor(Math.random() * 99);

        banana.style.top = (randplace1+"%")
        banana.style.left = (randplace2+"%")
        banana.style.bottom = (randplace3+"%")
        banana.style.right = (randplace4+"%")
}



function rand (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}