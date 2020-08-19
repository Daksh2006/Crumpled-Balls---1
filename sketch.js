
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var line1,line2,line3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 550);

	engine = Engine.create();
	world = engine.world;
	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(300,550,1550,20,options);
	World.add(world,ground);
	line1 = Bodies.rectangle(980,450,20,200,options);
	World.add(world,line1);
	line2 = Bodies.rectangle(800,450,20,200,options);
	World.add(world,line2);
	//Create the Bodies Here.
	paper = new Paper(100,100,40);
	
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  rect(this.ground.position.x,this.ground.position.y,1550,20);
  rect(this.line1.position.x,this.line1.position.y,20,200);
  rect(this.line2.position.x,this.line2.position.y,20,200);
  paper.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:380,y:-300});
	 }
   }



