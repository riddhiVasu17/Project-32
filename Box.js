class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);

      this.image = loadImage("4.png");

      this.Visibility = 255;
    }
    
    display() {
  
      console.log(this.Visibility);
      if (this.body.speed < 3) {
       
        super.display();
         
      }
      else {
        World.remove(world, this.body);
  
        push();
        this.Visibility = this.Visibility - 5;
        
        tint(255, this.Visibility);
  
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  
        pop();
      }
  
    }

    score() {

      if (this.Visibility < 100 && this.Visibility > -500) {
        score = score + 1;
      }
    
      if (this.Visibility >-1001 && this.Visibility < -500) {
        this.Visibility = -501;
      }
    }
  }