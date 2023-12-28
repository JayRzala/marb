
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var marble;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  marble = new Marble(200,200,20);
  ground = new Ground(300,height,width,20)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  marble.show()
  ground.show()
}

