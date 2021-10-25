const Bodies=Matter.Bodies
const World=Matter.World;
const Engine=Matter.Engine;
var backgroundImg
var drops=[];
var maxDrops=100
var engine,world,body;

function setup() {
  engine=Engine.create();
  world=engine.world
  createCanvas(windowWidth,windowHeight);
  if(frameCount%150===0){
    for(var i=0; i<maxDrops; i++){
      drops.push(new createDrop(random(0,400),random(0,400)))
    }
  }
}
function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function draw() {
  background(backgroundImg);  
  for(var i=0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY();
  }
}
