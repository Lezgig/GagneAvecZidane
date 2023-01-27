let cont = document.getElementById("cont")
let banana = document.getElementById("myImg2")

setInterval(randomColour, 100)

setInterval(bananaMove, 100)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}
    function bananaMove(){
        banana.animate([
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-300px)' }
          ], {
            // timing options
            duration: 1000,
            iterations: Infinity
          });
    }



function rand (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}