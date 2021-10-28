
class Ball {
    constructor(x, y, r) {
      var options = { 
        density: 1, 
        frictionAir: 0.005, 
        isStatic: true
      };
  
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      World.add(world, this.body);
    }
  
  
    display() {
      ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
    }
  
    
  }