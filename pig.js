class Pig extends Baseclass{
    constructor(x, y) {
      super(x,y,50,50)
      this.image=loadImage("enemy.png")
    this.Visibility=255
    }
  
    display() {
  if (this.body.speed<3){
    super.display()
  }
  else {
    World.remove(world,this.body)
  push()
    this.Visibility=this.Visibility-5
  tint(255,this.Visibility)
  image(this.image,this.body.position.x,this.body.position.y,50,50)
  pop()
}
  
  }
  Score(){
    if(this.Visibility  <0   &&   this.Visibility>-1005){
      score++
    if(score==200||score==400){
      pigsound.play()
    }
    
    }
  }
  };
  