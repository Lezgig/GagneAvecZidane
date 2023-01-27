let cont = document.getElementById("cont")

setInterval(randomColour, 100)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}