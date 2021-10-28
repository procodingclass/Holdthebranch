class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = bodyB.position
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        
        
        if(this.sling.bodyA){
        //var newAngle = cannon.angle - 0.5;
        var velocity = p5.Vector.fromAngle(this.sling.bodyA.angle);
        velocity.mult(20);
        // Matter.Body.setStatic(this.sling.bodyA, false);
        Matter.Body.setVelocity(this.sling.bodyA, { x: velocity.x, y: velocity.y });
        console.log(velocity)
        this.sling.bodyA = null;  
        }
        
    }




    attach(body){
        this.sling.bodyB = body;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(4);
            stroke("red");
            fill("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}