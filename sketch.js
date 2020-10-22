var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxBottom,boxRight,boxLeft;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	keyPressed();

	boxBottom=createSprite(width/2,650,200,20);
	boxBottom.shapeColor="red";
	boxLeft=createSprite(300,600,20,150);
	boxLeft.shapeColor="red";
	boxRight=createSprite(500,600,20,150);
	boxRight.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxBottom = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	 World.add(world, boxBottom);
	 
	 boxLeft = Bodies.rectangle(300, 600, 20, 150 , {isStatic:true} );
	 World.add(world, boxLeft);
	 
	 boxRight = Bodies.rectangle(500, 600, 20, 150 , {isStatic:true} );
 	World.add(world, boxRight);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	Matter.Body.setStatic(packageBody,false);
  }
}



