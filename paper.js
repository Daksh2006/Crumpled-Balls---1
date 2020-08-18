class Paper{
    constructor(x, y, radius) {
        var options = {
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos;
        pos = this.body.position;
        ellipse(pos.x,pos.y,this.radius,this.radius);
      }
    }
  