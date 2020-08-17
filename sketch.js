
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
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(300,450,100,20,options);
	World.add(world,ground);
	//Create the Bodies Here.
	paper = new Paper(100,100,40);
	
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  rect(this.ground.position.x,this.ground.position.y,1400,20);
  paper.display();
  drawSprites();
  keyPressed();
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Body.setStatic(paper,false);
	 }
   }



