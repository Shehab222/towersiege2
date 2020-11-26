class Box{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.0,
            friction :1.0,
            density: 1.0
           
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
//less impactful
        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        // the impact is very powerfull so destroy the object
        else{
          World.remove(world, this.body);
          push();
          this.visibility - this.visibility - 5;
          pop();
        }
        
      }
}
  