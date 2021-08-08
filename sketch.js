//Create variables here

var dog,dog1;

function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(800, 700);
  
  dog = createSprite(500,500,50,50);
  dog.addImage(dog1);
  dog.scale = 0.5;
}


function draw() {  

  drawSprites();
  //add styles here
  dog.display();
}



