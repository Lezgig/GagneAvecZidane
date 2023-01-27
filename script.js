let cont = document.getElementById("cont")
let banana = document.getElementById("myImg2")

setInterval(randomColour, 100)

setInterval(doNextPoint, 100)

function randomColour(){

    randColor = Math.floor(Math.random() * 9999);


    cont.style.backgroundColor = "#" + randColor;
}

function doNextPoint(){

    var maxX = $(window).width() - banana.width();    
    var newX = rand(0, maxX);    
    var maxY = ($(window).height()/2) - banana.height();
    var newY = rand(0, maxY);
    var speed  = rand (1000, 3000);

    banana.animate({
        'top': newY + 'px',
        'left': newX + 'px' 
    }, speed, function(){
        doNextPoint();    
    });
}


function rand (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}