var floorOld,floorOldImg,treeOld,treeOldImg;
var dirt,dirtImg;
var driedPlant,driedImg;



function preload(){
  floorOldImg  = loadImage("Floor old.png");
  treeOldImg = loadImage("tree old.png");
  dirtImg = loadImage("dirt.png");
  driedImg = loadImage("dried plant.png");
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  
  floorOld =createSprite(displayWidth/2-10,displayHeight/2-10,displayWidth,displayHeight);
  floorOld.addImage(floorOldImg)
  floorOld.scale=0.9;
  
  treeOld = createSprite(50,50,50,50)
  treeOld.addImage(treeOldImg);
  treeOld.scale=0.5;
  
  dirt= createSprite(60,100,50,50);
  dirt.addImage(dirtImg);
  dirt.scale=0.5;
  
}

function draw() {

  
  
  
  drawSprites();
}