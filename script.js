let cont = document.getElementById("cont")
let banana1 = document.getElementById("myImg2")
let banana2 = document.getElementById("myImg3")
let banana3 = document.getElementById("myImg4")
let banana4 = document.getElementById("myImg5")
let banana5 = document.getElementById("myImg6")


setInterval(randomColour, 100)

setInterval(banana1Move, 100)

setInterval(banana2Move, 100)

setInterval(banana3Move, 100)

setInterval(banana4Move, 100)

setInterval(banana5Move, 100)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}
function banana1Move(){

        randplace1 = Math.floor(Math.random() * 99);
        randplace2 = Math.floor(Math.random() * 99);
        randplace3 = Math.floor(Math.random() * 99);
        randplace4 = Math.floor(Math.random() * 99);

        banana1.style.top = (randplace1+"%")
        banana1.style.left = (randplace2+"%")
        banana1.style.bottom = (randplace3+"%")
        banana1.style.right = (randplace4+"%")
}

function banana2Move(){

    randplace1 = Math.floor(Math.random() * 99);
    randplace2 = Math.floor(Math.random() * 99);
    randplace3 = Math.floor(Math.random() * 99);
    randplace4 = Math.floor(Math.random() * 99);

    banana2.style.top = (randplace1+"%")
    banana2.style.left = (randplace2+"%")
    banana2.style.bottom = (randplace3+"%")
    banana2.style.right = (randplace4+"%")
}

function banana3Move(){

    randplace1 = Math.floor(Math.random() * 99);
    randplace2 = Math.floor(Math.random() * 99);
    randplace3 = Math.floor(Math.random() * 99);
    randplace4 = Math.floor(Math.random() * 99);

    banana3.style.top = (randplace1+"%")
    banana3.style.left = (randplace2+"%")
    banana3.style.bottom = (randplace3+"%")
    banana3.style.right = (randplace4+"%")
}

function banana4Move(){

    randplace1 = Math.floor(Math.random() * 99);
    randplace2 = Math.floor(Math.random() * 99);
    randplace3 = Math.floor(Math.random() * 99);
    randplace4 = Math.floor(Math.random() * 99);

    banana4.style.top = (randplace1+"%")
    banana4.style.left = (randplace2+"%")
    banana4.style.bottom = (randplace3+"%")
    banana4.style.right = (randplace4+"%")
}

function banana5Move(){

    randplace1 = Math.floor(Math.random() * 99);
    randplace2 = Math.floor(Math.random() * 99);
    randplace3 = Math.floor(Math.random() * 99);
    randplace4 = Math.floor(Math.random() * 99);

    banana5.style.top = (randplace1+"%")
    banana5.style.left = (randplace2+"%")
    banana5.style.bottom = (randplace3+"%")
    banana5.style.right = (randplace4+"%")
}



function rand (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}