class Form {

    constructor() {
      this.button = createButton('Play');
     
    }
    hide(){
      this.button.hide();     
    }
  
    display(){
      background(fbac);    
      this.button.position(displayWidth/2 + 30, displayHeight/1.8);      
      this.button.mousePressed(()=>{
        this.button.hide();
       gameState = 1;
      });
    }
  }
  