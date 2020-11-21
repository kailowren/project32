class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
 
  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++;
    }
  }
  
  display(){
    if(this.body.speed < 3){ 
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightgreen");
      rect(pos.x, pos.y, this.width, this.height);
    } else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
    }
  
  }
};