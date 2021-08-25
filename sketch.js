var man
var bullet

function preload()
{
manImg = loadImage("man.png")
bulletImg = loadImage("bullet.png")
Zombie1Img = loadImage("Z1.png")
Zombie2Img = loadImage("Z2.png")
Zombie3Img = loadImage("Z3.png")
Zombie4Img = loadImage("Z4.png")
bg = loadImage("Jscenary.png")
}

function setup() {
	createCanvas(1920,862);
  man = createSprite(185,564,20,20)
  man.addImage(manImg)
  man.scale=1.5

  bullet = createSprite(228,541,20,20)
  bullet.addImage(bulletImg)
  bullet.scale=0.5
  bullet.velocityX=10;

  Zombie1 = createSprite(1061,627,20,20)
  Zombie1.addImage(Zombie1Img)
  Zombie1.scale=0.2
  Zombie2 = createSprite(1319,610,20,20)
  Zombie2.addImage(Zombie2Img)
  Zombie2.scale=0.2
  Zombie3 = createSprite(1527,595,20,20)
  Zombie3.addImage(Zombie3Img)
  Zombie3.scale=0.2
  Zombie4 = createSprite(1759,597,20,20)
  Zombie4.addImage(Zombie4Img)
  Zombie4.scale=0.4
}


function draw() {

  background(bg);

  textSize(40)
  text(mouseX+":"+mouseY,200,200)

  if(keyDown("right")){
    man.x+=9
    }
  
    if(keyDown("left")){
      man.x-=9
    }

    if(keyDown("up")){
      man.y-=9
    }

    if(keyDown("down")){
      man.y+=9
    }

    if (keyWentDown("space")) {
      bullet = createSprite(228,541,20,20)
      bullet.addImage(bulletImg)
      bullet.scale=0.5
      bullet.velocityX=8;
    }


  drawSprites();
 
  

}
