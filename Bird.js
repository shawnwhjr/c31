class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.tragetry = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
    if(this.body.position.x > 220 && this.body.velocity.x > 10){
      var cause = [this.body.position.x,this.body.position.y];
      this.tragetry.push(cause);
    }
    for(var i = 0; i < this.tragetry.length;i++){
      image(this.smoke,this.tragetry[i][0],this.tragetry[i][1]);
    }
  }
}
