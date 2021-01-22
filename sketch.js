var paperObject,ground;
var dustbin; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	/*ground = createSprite(400,600,1000,15);
	ground.shapeColor = "yellow";*/

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	ground.shapeColor = "yellow";
	
	paperObject = new Paper(100,485,40);
	
	
	dustbin= new Dustbin(600, 550,200,20);
	
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
 
	
	paperObject.display();
	ground.display();
	dustbin.display();
	
	keyDowning();
}

function keyDowning(){
	if(keyDown("up")){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y: -85});
	}
}



