let cont = document.getElementById("cont")

setInterval(randomColour, 1000)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}