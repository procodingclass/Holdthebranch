const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var mconstraint;
var engine, world;
var box1, box2, box3,ground;
var ball;
var bg, bgimg;
var monkey


function preload(){
  bgimg = loadImage('assets/space.jpg')
}
function setup() {
  createCanvas(400, 600);
  engine = Engine.create();
  world = engine.world;
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);


point1 = new Ball(20, 100, 20, 20);
point2 = new Ball(200, 400, 20, 20);
point3 = new Ball(100, 500, 20, 20);
point4 = new Ball(100, 200, 20, 20);
point5 = new Ball(100, 250, 20, 20);
  
//console.log(ball);

  //ground = new Box(300, 380, 600, 20);
  
  //Body.setStatic(ground.body, true);

 
  
  monkey = new Box(100, 200, 30, 30);
  // Body.setStatic(monkey.body, true);
 rope = new Rope(monkey.body, point4.body);
  
 

}

function draw() {
  background(180);
  Engine.update(engine);
   //ground.display();
  monkey.display();

  
  
  point1.display();
  point2.display();
  point3.display();
  point4.display();
  point5.display();
  rope.display();

  if(!mouseIsPressed){

    readyToLaunch(monkey)
    readyToLaunch(monkey)
    readyToLaunch(monkey)
    readyToLaunch(monkey)
    readyToLaunch(monkey)
  
    
  }

  detectollision(monkey, point2)
  detectollision(monkey, point1)
  detectollision(monkey, point3)
  detectollision(monkey, point4)
  detectollision(monkey, point5)
   

}

// function mouseDragged(){
//   Matter.Body.setPosition(monkey.body,{x:mouseX,y:mouseY})
// }

// function mouseReleased(){
//    rope.fly();
// }

function detectollision(monkey,body2){
  var distance=dist(monkey.body.position.x, monkey.body.position.y, body2.body.position.x, body2.body.position.y)
  //console.log(distance)
  if(distance<=80){
    //console.log(distance);
    //Matter.Body.setStatic(lmango.body,false);
    rope.attach(body2.body);
  } 

}

function readyToLaunch(monkey){
  var pointA = monkey.body.position;
  var pointB = rope.pointB;
  let d = dist(pointA.x, pointA.y, pointB.x, pointB.y);
  if (d > 50 && pointA.x > 150) {
    rope.fly();
    //gameState = "launched";
  }
}




