var bg;
var character,characterIMG;
var invisibleGround,invisibleGround2,invisibleGround3;
var snow,snowImg;




function setup() {
  createCanvas(800,400);
  

  bg=loadImage("snowImg.jpg");
  characterIMG=loadImage("Player.png");
  snowImg = loadImage("snow4.webp");

  
  invisibleGround=createSprite(400,400,800,10);
  invisibleGround.visible=false;

  invisibleGround2=createSprite(790,400,10,800);
  invisibleGround2.visible=false;

  invisibleGround3=createSprite(10,400,10,800);
  invisibleGround3.visible=false;

  character = createSprite(400,350,50,50);
  character.addImage("character",characterIMG);
  character.scale=0.5;

  
}

function draw() {
  background(bg); 
  
  //MOVEMENT

  //RIGHT SIDE MOVEMENT
  if(keyDown(RIGHT_ARROW)){
    character.x=character.x+10;
    textSize(25);
    fill("red");
    text("Moving Right",345,150);
  };

  //LEFT SSIDE MOVEMENT
  if(keyDown(LEFT_ARROW)){
    character.x=character.x-10;
    textSize(25);
    fill("red");
    text("Moving Left",345,150);
  
  };

  //JUMP MOVEMENT
if(character.y>333){
  if(keyWentDown(UP_ARROW)){
    character.y=character.y-40;
    textSize(25);
    fill("red");
    text("Moving Up",345,150);
    character.velocityY=character.velocityY+1;
  }

  
}


  //to stop the character from falling OFF THE WORLD
  character.collide(invisibleGround);
  character.collide(invisibleGround2);
  character.collide(invisibleGround3);
  
  textSize(25);
  fill("red");
  text("USE ARROW KEYS TO MOVE",240,100);

  textSize(50);
  fill("black");
  text("↑",400,200);

  textSize(50);
  fill("black");
  text("← →",355,220);
  snowFall();
    
  drawSprites();
}

function snowFall (){

  var x = random(0, width);
  
  snow = createSprite(x, 0, 10, 10);
  snow.addImage(snowImg);
  snow.scale = random(0.10, )
  snow.velocityY = +2;

}