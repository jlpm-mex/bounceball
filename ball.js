var ball = {
    pelota : document.getElementById("ball1"),
    vel : 25,
    velX : 35,
    r : 0,
    g : 255,
    b : 255,
}

var ball2 = {
    pelota : document.getElementById("ball2"),
    vel : 35,
    velX : 25,
    r : 255,
    g : 165,
    b : 0,
}

var ball3 = {
    pelota : document.getElementById("ball3"),
    vel : 75,
    velX : 75,
    r : 0,
    g : 255,
    b : 255,
}

var ball4  = {
    pelota : document.getElementById("ball4"),
    vel : 50,
    velX : 15,
    r : 255,
    g : 165,
    b : 0,
}

function movement(ball){
    var yMax  = 500;
    var yMin = 25;
    var xMax = 450;
    var xMin = 25;
    var posX = parseInt(ball.pelota.style.left.replace('px',''));
    var posY = parseInt(ball.pelota.style.top.replace('px',''));


    if(posY < yMin || posY > yMax){
        ball.vel *= -1;
        ball.r = Math.floor(Math.random()*255);
        ball.g = Math.floor(Math.random()*255);
        ball.b = Math.floor(Math.random()*255);

    }

    if(posX < xMin || posX >= xMax){
        ball.velX *= -1;
        ball.r = Math.floor(Math.random()*255);
        ball.g = Math.floor(Math.random()*255);
        ball.b = Math.floor(Math.random()*255);
    }

    ball.pelota.style.top = posY + ball.vel;
    ball.pelota.style.left = posX + ball.velX;
    
    
    ball.pelota.style.backgroundColor = `rgb(${ball.r},${ball.g},${ball.b})`;
    
}

setInterval(movement,100, ball);
setInterval(movement,100,ball2);
setInterval(movement,100,ball3);
setInterval(movement,100,ball4);