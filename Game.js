class Game {
    constructor(){};
      
    async start(){
      if(gameState === 3){
        form = new Form();
        form.display();
      }
    }
  
    play(){
        form.hide();  
      background(back);   
      //console.log("inside play")
      invisibleGround.velocityX = -(6 + 3*score/100);
      
      //if((touches.length > 0 || keyDown("SPACE")) && you.y  >= displayHeight-120) {
       // console.log("inside if")
       // you.velocityY = -15;
      //   touches = [];
      // cas.visible = false;
    //  }  
      you.velocityY = you.velocityY + 0.8
      if(coinsGroup.isTouching(you)){
        score=score+1;
        coinsGroup[0].destroy();
      }
      if (invisibleGround.x < 0){
        invisibleGround.x = invisibleGround.width/2;
      }
      you.collide(invisibleGround);  
      
      //if(obstaclesGroup.isTouching(you)){
         // gameState = END;
     // }    
      //textSize(20);
 // fill("#FFF700");
  //text("Score: "+ score,30,50);
 
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");   
      restart.visible=true;
    you.visible=false;
    coinsGroup.setVelocityXEach(0);
     you.velocityX=0;
    coinsGroup.setLifetimeEach(-1);
    invisibleGround.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);        
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);  
    coinsGroup.destroyEach(); 
    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    if(touches.length>0 || mousePressedOver(restart)) {   
      reset();
      touches = []
      }
    
}
 spawnObstacles(){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(1500,displayHeight-75,20,30);
    obstacle.setCollider('circle',0,0,45)
      
    obstacle.velocityX = -(6 + 2*score/10);
    
    var rand = Math.round(random(1,5));
    //console.log("random"+rand);
    switch(rand) {
      case 1: obstacle.addAnimation("zo1",zo1_running)
     // console.log("case 1")
      obstacle.scale = 0.2;
              break;
      case 2: obstacle.addAnimation("mons",mons);
      obstacle.scale = 0.07;
              break;
      case 3: obstacle.addAnimation("dino",dino);
      obstacle.scale = 2;
              break;
     case 4 : obstacle.addImage(sto);
      obstacle.scale = 0.2;
              break;
      case 5: obstacle.addImage("bari",bari);
     obstacle.scale = 0.3;
              break;        
    
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
   // obstacle.scale = 0.20;
    obstacle.lifetime = 300;
    obstacle.depth = you.depth;
    you.depth =you.depth+1;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

 spawnClouds(){
  //console.log("spawnClouds");
  if (frameCount % 60 === 0) {
    var cloud = createSprite(displayWidth+20,displayHeight-300,40,10);
    cloud.y = Math.round(random(100,220));
    cloud.addImage(clo);
    // console.log("inside spawn cloud")
    cloud.scale = 0.050;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 800;
    
    //adjust the depth
    cloud.depth =you.depth;
    you.depth = you.depth+1;   
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}

 reset(){
  gameState = PLAY;
 gameOver.visible = false;
 restart.visible = false;
 you.visible = true;
 obstaclesGroup.destroyEach();
 cloudsGroup.destroyEach();

 score = 0;
   }

   spawnCoins(){
    if (frameCount % 60 === 0) {
        var coin = createSprite(displayWidth+500,displayHeight-100,40,10);
    coin.y = Math.round(random(100,820));
    coin.addImage(coinImg);
    coin.scale = 0.5;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    coin.lifetime = 800;
    
    //adjust the depth
    coin.depth = you.depth;
    you.depth = you.depth + 1;
    
    //add each cloud to the group
    coinsGroup.add(coin);
  
  }}}