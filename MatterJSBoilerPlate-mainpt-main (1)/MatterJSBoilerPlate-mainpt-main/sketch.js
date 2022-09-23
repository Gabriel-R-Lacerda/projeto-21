
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo
var bloco3
var bloco2
var bloco1
blocosprop
var soloprop
function preload()
{
   	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
    blocosprop = {
		isStatic: false,
		restitution: 0.6,
		frictionAir: 0.01,
		friction: 0.07,
	}
	soloprop = {
		isStatic: true
	}
	//Crie os Corpos Aqui.
     solo = Bodies.rectangle(windowWidth/2, windowHeight - 5 , windowWidth, 10, soloprop)
       World.add (world, solo)
	Engine.run(engine);

	bloco1 = Bodies.rectangle(400, windowHeight - 20, 20, 60, soloprop)
    World.add(world, bloco1)
	bloco2 = Bodies.circle(222, 444, 9, blocosprop)
    World.add(world, bloco2)
	bloco3 = Bodies.rectangle(460, windowHeight - 20, 20, 60, soloprop)
    World.add(world, bloco3)
	
ellipseMode(RADIUS)
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect(solo.position.x, solo.position.y,windowWidth, 5 )
  ellipse(bloco2.position.x, bloco2.position.y, 9 )
  rect(bloco1.position.x, bloco1.position.y,20, 60 )
  rect(bloco3.position.x, bloco3.position.y,20, 60 )
}

function keyPressed(){
	if(keyCode == 32){
       Body.applyForce(bloco2, {x:0, y:0},{x:0.002, y:-0.015})
	}
}

