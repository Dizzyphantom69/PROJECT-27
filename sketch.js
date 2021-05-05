
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var rope1,rope2,rope3,rope4,rope5
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,50,1000,20);

	//Create the Bodies Here.
	bobObject1= new Bob(550,200,25);
	rope1=new Rope(bobObject1.body,{x:550,y:50})

	bobObject2= new Bob(600,200,25);
	rope2=new Rope(bobObject2.body,{x:600,y:50})

	bobObject3= new Bob(650,200,25);
	rope3=new Rope(bobObject3.body,{x:650,y:50})

	bobObject4= new Bob(700,200,25);
	rope4=new Rope(bobObject4.body,{x:700,y:50})

	bobObject5= new Bob(750,200,25);
	rope5=new Rope(bobObject5.body,{x:750,y:50})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
 	ground.display();
	rope1.display();
 	bobObject1.display();

	 rope2.display();
 	bobObject2.display();

	 rope3.display();
 	bobObject3.display();

	 rope4.display();
 	bobObject4.display();

	 rope5.display();
 	bobObject5.display();

 
 
 
  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50})

	}


}



