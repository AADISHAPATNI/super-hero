const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constrint = Matter.Constraint

var engine,world;
var superHero;
var backgroundImg;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  ground  = new Ground(1500,height,3000,40);

  superHero = new SuperHero(500,1500,50,50)

  slingshot = new SlingShot(superHero.body,{x:200, y:50});

  // create sprites here

}

function draw() {
  background(0);
  ground.display();
  superHero .display();
  slingshot.display();

}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

