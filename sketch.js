
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var bar1, bar2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,550,800,10);
	bar1 = new Ground(550,480,10,150);
	bar2 = new Ground(750,480,10,150);

	let ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle = (400,400,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
	rectMode(CENTER);
  	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  ground.show();
  bar1.show();
  bar2.show();
  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);
  drawSprites();
 
}



