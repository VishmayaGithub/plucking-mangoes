const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0

function preload()
{
  timg = loadImage("images/tree.png")
  boyimg = loadImage("images/boy.png")
  
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grounddd =new Ground(20,500,1200,20)
  

stone = new Stone(100,400,70,70)

sling = new Slingshot(stone.body,{x:210,y:350})
mango1 = new Mango(700,300,10,10)
mango2 = new Mango(700,200,10,10)
mango3 = new Mango(750,300,10,10)
mango4 = new Mango(850,100,10,10)
mango5 = new Mango(800,150,10,10)
mango6 = new Mango(950,270,10,10)
mango7 = new Mango(700,300,10,10)
mango8 = new Mango(780,300,10,10)
mango9 = new Mango(730,200,10,10)
mango10 = new Mango(840,230,10,10)

  Engine.run(engine);
  tree = createSprite(800,300,350,400)
  tree.addImage(timg)
  tree.scale = 0.4
  boy = createSprite(260,430,20,20)
  boy.addImage(boyimg)
boy.scale = 0.1

 
}


function draw() {

  background("lightGreen");
  drawSprites();
  imageMode(CENTER);
 // tree.display()
  grounddd.display()
  stone.display()
  sling.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango7.display()
  mango6.display()
  mango8.display()
  mango9.display()
  mango10.display()

 detectCollision(stone,mango1)
 detectCollision(stone,mango2)
 detectCollision(stone,mango3)
 detectCollision(stone,mango4)
 detectCollision(stone,mango5)
 detectCollision(stone,mango6)
 detectCollision(stone,mango7)
 detectCollision(stone,mango10)
 detectCollision(stone,mango9)
 detectCollision(stone,mango8)

 textSize(30)
 text("Score : "+score,100,55)
 
}
function mouseDragged(){
  if(sling.bodyA = stone.body){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased(){
  sling.fly()

}
function detectCollision(a,b){
	var distance = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(distance <= 150){
    Body.setStatic(b.body,false);
    score = score+50
    
	}
}
function keyPressed(){
  if(keyCode ===32){
    sling.attach(stone.body)
    Matter.Body.setPosition(stone.body,{x:100,y:400})
  }
}
