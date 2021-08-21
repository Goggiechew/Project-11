var boy,leftBoundry,rightBoundry,path,pathing,boying,edges
function preload(){
  //pre-load images
  pathing = loadImage("path.png")
  boying = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  createCanvas(400,400);
  boy = createSprite(180,340,30,30);
  boy.scale = 0.08
boy.addAnimation(boying)
  
  path = createSprite(200,200);
  path.scale = 1.2
  path.velocityY = 4
  path.addImage(pathing)

  leftBoundry = createSprite(0,0,100,180);
  leftBoundry.visable = false

  rightBoundry = createSprite(410,0,100,180);
  rightBoundry.visable = false
}

function draw() {
  background(0);
path.velocityY = 4
boy.x=World.mouseX
edges = createEdgeSprites();
boy.bounceOff(edges[3])
boy.bounceOff(leftBoundry)
boy.bounceOff(rightBoundry)
if (path.y>400){
  path.heigth/2
}
drawSprites();
}
