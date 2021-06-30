var you,you_running,zo1_running,zo1,coin,restartImg,musde,musbo,form;
var back,clo,obstaclesGroup,cloudsGroup,coinsGroup,coinImg,gameOverImg,musju;
var PLAY = 1;
var END = 0;
var gameState =3;
var score = 0;
var invisibleGround,restart,gameOver,fbac,cast,cas,mon,mons,dino,bari,sto;

function preload(){  
you_running=loadAnimation("images/r1-removebg-preview.png","images/r2-removebg-preview.png","images/r3-removebg-preview.png","images/r4-removebg-preview.png","images/r5-removebg-preview.png","images/r6-removebg-preview.png");
  gameOverImg=loadImage("images/gameover-removebg-preview.png");
  restartImg=loadImage("images/restart.png");
  zo1_running=loadAnimation("images/zo1-removebg-preview.png","images/zo11-removebg-preview.png");
  coinImg=loadImage("images/coin.png");
  clo=loadImage("images/cloud.png");
 back=loadImage("images/for.png");
 musde=loadSound("sound/mixkit-arcade-space-shooter-dead-notification-272.wav");
  musbo=loadSound("sound/mixkit-arcade-video-game-bonus-2044.wav");
  musju=loadSound("sound/mixkit-sci-fi-positive-notification-266.wav");
  fbac = loadImage("images/kingdom.png");
  cas = loadImage("images/castle1-removebg-preview.png");
  mons = loadAnimation("images/Monster-01.png","images/Monster-02.png");
  sto = loadImage("images/stone.png");
  bari = loadImage("images/barrier.png");
  dino = loadAnimation("images/mon1.png","images/mon2.png","images/mon3.png","images/mon4.png","images/mon5.png","images/mon6.png");
}

function setup() {
 createCanvas(displayWidth,displayHeight);
  game = new Game();
  form = new Form();
  game.start();
 var message = "This is a message";
 console.log(message);
 gameOver = createSprite(displayWidth/2,displayHeight/2- 10);
  gameOver.addImage(gameOverImg);
  restart = createSprite(displayWidth/2,displayHeight/2);
  restart.addImage(restartImg);
   gameOver.scale = 0.05;
  restart.scale = 0.5;
 cast  = createSprite(50,displayHeight-350,50,20);
 cast.scale = 1
 cast.addImage(cas);
 cast.visible = false;

  you = createSprite(50,displayHeight-190,20,50);
  you.x=camera.position.x;  
  you.addAnimation("yourunning", you_running);  
  you.setCollider('rectangle',0,0,160,250);
  you.scale = 0.4;
  you.debug=false;
  you.visible = false;
  
  coinsGroup = new Group();
  obstaclesGroup = new Group();
  cloudsGroup = new Group();
  gameOver.scale = 1;
  restart.scale = 1;

  invisibleGround = createSprite(displayWidth/50,displayHeight-5,displayWidth+10000,125);  
  invisibleGround.shapeColor = "#AECBA1";
  invisibleGround.visible = false;
 
   gameOver.visible = false;
  restart.visible = false;
}

function draw() {  
  you.x=camera.position.x; 
  
 if(gameState===0){
   game.start();  
 }
 
  if (gameState===1){
  //form.hide();
  clear();
  game.play();
  game.spawnClouds();
  //game.spawnCoins();
  game.spawnObstacles();
 you.visible = true;
 cast.visible = true;
 invisibleGround.visible = true;
  }
  if(gameState === END){
  game.end();
    
} 
drawSprites();
}