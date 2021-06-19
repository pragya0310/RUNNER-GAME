var bg;
var bg2;
var gr,grGroup;
var db;
var o1,o;
var gameState=0;
//var bg3
function preload(){
bg=loadImage("RUNNER GAME (1).png")
bg2=loadImage("BackG(2).png")
db=loadImage("Objects/DeadBush.png")
//bg3=loadImage("BackG(3).png")
}

function setup(){
createCanvas(displayWidth,1000)
o1=new Group()
obstacles()
console.log(o1)
console.log("yo")
a1=createSprite(30,height-150,30,30)



grGroup=new Group()
ground();
a1.y=0
//a1.x=2356
}


function draw(){
  background(0)
  image(bg,0,0,displayWidth*2,height)
  //image(bg2,-800,0,1000,height)
 // image(bg3,-100,0,1000,height)
if(gameState==0){
a1.velocityX=0
  if(keyDown("left")){a1.velocityX=-5}
  if(keyDown("right")){a1.velocityX=5}
if(keyDown("space")){a1.velocityY=-10}
a1.velocityY+=0.5;

if(a1.isTouching(o1))
{gameState=1}

}


else if (gameState==1){
  a1.setVelocity(0,0 )
  textSize(30)
  fill("red")
  text("GAME OVER",camera.position.x,height/2)
}
console.log(gameState)
a1.collide(grGroup)
  if(a1.x>=955&&a1.x<=2895)
camera.position.x=a1.x


fill("white")
textSize(20)
text(a1.x+","+a1.y,a1.x,a1.y-50)

drawSprites();
}