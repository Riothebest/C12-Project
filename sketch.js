var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeleaf, orangeleafImg;
var redleaf, redleafImg;
var score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  redleafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

score = 0;
}

function draw() {
  background(0);
 
  spawner();
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

    if(keyDown("right"))  
    {
      rabbit.x += 3;
      
    }

    if(keyDown("left"))
    {
      rabbit.x -= 3;
    }
  
  
  drawSprites();
  textSize(20);
  text("Score: "+score,300,50);

  /*if(rabbit.collide(apple))
  {
      score += 1
  }*/
}
function spawner()
{
  if(frameCount%60 == 0)
  {
    var a = Math.round(random(1,3))
    switch(a)
    {
      case 1: orangeleaf = createSprite(Math.round(random(10,400)),-10,10,10);
              orangeleaf.addImage(orangeleafImg);
              orangeleaf.scale = 0.06;
              orangeleaf.velocityY = 2;
              orangeleaf.lifetime = 210;
              break;

      case 2: redleaf = createSprite(Math.round(random(10,400)),-10,10,10);
              redleaf.addImage(redleafImg);
              redleaf.scale = 0.055;
              redleaf.velocityY = 2;
              redleaf.lifetime = 210;
              break;

      case 3: apple = createSprite(Math.round(random(10,400)),-10,10,10);
              apple.addImage(appleImg);
              apple.scale = 0.05;
              apple.velocityY = 2;
              apple.lifetime = 210;
              break;

      default: break;
    }
  }
}