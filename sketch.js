const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world

var ground

function setup() {
  createCanvas(1200,600);

  engine = Engine.create(); 
  world = engine.world;

 ground = new Ground(600,580,1200,20);
  
}



function draw() {
  background("yellow");  
  Engine.update(engine);
  
 ground.display();
}