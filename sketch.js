var mario;

var gameState="instruction";

var inviground;

var boxes = [];

var bricks1;

function preload(){
  backgroundimg = loadImage("Mario boi/backgroundnew.png");
  marioanimation = loadAnimation("Mario boi/mario1.png","Mario boi/mariorunning.png","Mario boi/mariorunning2.png");
  standimg = loadImage("Mario boi/mariostanding.png");
  brick1 = loadImage("Mario boi/brick2.png");
  brick2 = loadImage("Mario boi/luckyblock.png");
  brick3 = loadImage("Mario boi/hardestbrick.png");
  luckyblock = loadImage("Mario boi/luckyblock.png");
  luckyblock2 = loadImage("Mario boi/usedluckyblock.png");
  mariodead = loadImage("Mario boi/deadmario.png");
  goomba = loadImage("Mario boi/enemy.png");
  coins = loadImage("Mario boi/coin.png");
  fireflower = ("Mario boi/fireball.png");
  finish = loadImage("Mario boi/flag23.png");
}

function setup(){
  createCanvas(600,400); 
  backgroundsprite = createSprite(300,200,7000,300);
  backgroundsprite.addImage("background", backgroundimg);
  backgroundsprite.debug = true;
  backgroundsprite.scale = 1;
  mario = createSprite(30, 350, 50, 50); 
  mario.debug = true;
  mario.setCollider("circle", 0, 0, 40);
  mario.addAnimation("run",marioanimation);
  start = createSprite(400, 350, 50, 50);
  inviground = createSprite(600, 351, 1200,10);
  inviground.visible = false;
  inviground.debug = true;
  coins.scale = 2;
  luckybricksgroup = new Group();
  bricksgroup = new Group();
  /*
  for (i = 300; i<600; i=i+100){
    for (var j = 0; j<3; j++){
       boxes [j] = createSprite(i,150,50,50);
       boxes[j].visible = false;
       var num = Math.round(random(1,2));
   
       switch(num){
      case 1 : boxes[j].addImage("img1", brick1);
      break;
      case 2 : boxes[j].addImage("img2", brick2);
      break;
      default:
      break;
    }
  }
  
  }*/
}


function draw(){
  if(gameState=="instruction"){
    background("lightblue");
     mario.visible = false;
     start.visible = true;
     inviground.visible = false;
     backgroundsprite.visible = false;
     //for (var k = 0; k<3; k++){
       //boxes[k].visible = false;
       //console.log(k);
    // }

    textSize(30);
    fill ("Red");
    text("Super Mario Bros.", 550, 30);

    textSize(20);
    text("1. Press Space to jump", 200, 150);
    text("2. Press A,D for left, right", 200, 190);
    text("3. Collect coins to increase score", 200, 230);
    text("4. Defeat all the monsters", 200, 270);
    text("5. Reach the castle to win", 200, 310);

  

    if(mousePressedOver(start)){
      gameState = "Play";

    }
  }

  if(gameState == "Play"){
    background("black");
    start.visible = false;
    mario.visible = true;
    backgroundsprite.visible = true;
    backgroundsprite.velocityX = -3;

    if(backgroundsprite.x<0){
      backgroundsprite.x = backgroundsprite.width/2;
    }
    mario.collide(inviground);
    //inviground.visible = true;

   // console.log(mario.y);

    if(keyWentDown("A")){
      mario.velocityX = -6;
    }
    if(keyWentUp("A")){
      mario.velocityX = 0;
    }

    if(keyWentDown("D")){ 
      mario.velocityX = 6;
    }

    if(keyWentUp("D")){
      mario.velocityX = 0;
    }
    if(mario.velocityX == 0){
      mario.changeAnimation("run", standimg); 
    }

    if(keyDown("space")){
      mario.velocityY = -10;
    }

    mario.velocityY = mario.velocityY + 2.1;

 // spawnbricks();
 // spawnluckybricks(); 
  if(frameCount % 100 == 0){
    bricks1 = createSprite(600, 150, 50, 50);
    bricks1.velocityX = -3;
    bricks1.addImage("brick", brick1);
    bricksgroup.add(bricks1);  
   
  } 
  //if(mario.isTouching(bricks1)){
    //bricks1.addImage("coin", coins); 
  //}  
  

  if(frameCount % 158 == 0){
    var bricks4 = createSprite(600, 150, 50, 50); 
    bricks4.velocityX = -3;
    bricks4.addImage("blocks", luckyblock);
    luckybricksgroup.add(bricks4);  
  }
  /*if(mario.isTouching(luckybricksgroup)){
    luckybricksgroup.addImage("what",luckyblock2); 
  }*/
  }
  
  
  drawSprites();  
}
/*
function spawnbricks(){
  
}

 
function spawnluckybricks(){
 
}
*/