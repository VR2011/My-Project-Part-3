var earth, rocket, net;
var recta;
var x = 0;
var score = 0;
var sat1, sat2, sat3, sat4;
var sat1i, sat2i, sat3i, sat4i;
var spaceFont;
var satellites = [];
var satellites_img = [];
function preload() {
    earth = loadImage('images/earth.png');
    rocket = loadImage('images/rocket.png');
    net = loadImage('images/net.png');
    sat1i = loadImage('images/satellite.png');
    sat2i = loadImage('images/satellite2.png');
    sat3i = loadImage('images/satellite3.png');
    sat4i = loadImage('images/satellite4.png');
    spaceFont = loadFont('Chopsic-K6Dp.ttf');
}

function setup() {
    var canvas = createCanvas(800, 800);
    imageMode(CENTER);
    rectMode(CENTER);
    recta = createSprite(100, 400, 50, 50);
    recta.addImage(rocket);
    recta.debug = true;

    recto = createSprite(recta.x - 40, recta.y + 80, 50, 50);
    recto.addImage(net);
    recto.setCollider('rectangle', 0, 10, 100, 100);
    recto.debug = true;

    satellites.push(sat1, sat2, sat3, sat4);
    satellites_img.push(sat1i, sat2i, sat3i, sat4i);
    for(i=0; i<satellites.length; i++){
        satellites[i] = createSprite(200*i, 200);
        satellites[i].addImage(satellites_img[i]);
    }
    console.log(satellites);
    //sat3.setCollider('rectangle', -5, 30, 275, 155);
    //sat4.setCollider('rectangle', 0, 0, 225, 250);
}

function draw() {
    background(0);
    x+=0.02;
    push();
    translate(400, 1300);
    rotate(x);
    image(earth, 0, 0, 1600, 1600);
    pop();

    textSize(25);
    fill(255);
    textFont(spaceFont);
    
    text("Score: " + score, 550, 50);

    if(keyIsDown(40)){
        recta.y += 5;
        recto.y += 5;
    }
    if(keyIsDown(38)){
        recta.y -= 5;
        recto.y -= 5;
    }
    if(keyIsDown(37)){
        recta.x -= 5;
        recto.x -= 5;
    }
    if(keyIsDown(39)){
        recta.x += 5;
        recto.x += 5;
    }

    for(i=0; i<satellites.length; i++){
        recto.collide(satellites[i], captured);
    }

    drawSprites();
}

/*function isTouching(object1, object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;  
    } else {
        return false;
    }
}*/

function captured(spriteA, spriteB) {
    spriteB.remove();
    spriteA.x+=5;
    score+=500;
}
