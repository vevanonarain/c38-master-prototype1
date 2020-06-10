class Game{
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
   }
   update(state){
       database.ref('/').update({
           gameState:state
       })
   }
  async start(){
       if(gameState === 0){
           runner= new Runner();
           var runnerCountRef = await database.ref('runnerCount').once("value");
           if(runnerCountRef.exists()){
              runnerCount = runnerCountRef.val();
              runner.getCount();
           }
           form= new Form();
           form.display();
       }
    runner1 = createSprite(200,100);
    runner1.addImage("runner1", runner1I);
    runner2 = createSprite(200,300);
    runner2.addImage("runner2", runner2I);
    runner3 = createSprite(200,500);
    runner3.addImage("runner3", runner3I);
    runner4 = createSprite(200,700);
    runner4.addImage("runner4", runner4I);
    runners = [runner1, runner2, runner3, runner4];
   }
   play(){
    form.hide();
    textSize(30);
    background();
    text("Game Started", 120,100);
    Runner.getRunnerInfo();
    if(allRunners!==undefined){
      background("#c68767");
      image(track, 0, - displayWidth*4, displayHeight, displayWidth*5);
      
      var index = 0;
      
      var x;
      var y = 175;
      for(var runer in allRunners){
         index = index + 1;

         y = y +200;

         x = displayWidth - allRunners[runer].distance;
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === runner.index){
          runners[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = runners[index-1].y;
        }
       
         if(index===runner.index){
             fill("green");
         }else{
           fill("blue");
         }
         text(runners(runer).name + ":" + runners(runer).distance,200,20);
      }
    } 
    if(keyIsDown(UP_ARROW)&&runner.index!==null){
         runner.distance=runner.distance+30;
         runner.update();   
    }
    if(player.distance>3860){
      gameState = 2;
    }
    drawSprites();
  }
  end(){
    console.log("GAME ENDED");
    game.update(2);
  }
}

 