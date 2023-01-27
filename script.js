let cont = document.getElementById("cont")
let banana = document.getElementById("myImg2")

setInterval(randomColour, 100)

setInterval(bananaMove, 100)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}
    function bananaMove(){

        randplace = Math.floor(Math.random() * 99);

        banana.style.top(randplace+"%")
        banana.style.left(randplace+"%")
    }



function rand (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}