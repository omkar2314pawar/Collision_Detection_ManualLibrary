
 var fixedRect,movingRect;
 var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor="green";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="yellow";
  gameObject2 = createSprite(200,100,50,50);
   gameObject2.shapeColor="black";
   gameObject3 = createSprite(300,100,50,50);
   gameObject1.shapeColor="pink";
   gameObject4 = createSprite(400,100,50,50);
   gameObject4.shapeColor="cyan";


}

function draw() {
  background(255,255,255); 
  movingRect.x= mouseX;
  movingRect.y=mouseY;
console.log(movingRect.x-gameObject1.x)
  if (isTouching(movingRect,gameObject1)){

    movingRect.shapeColor="blue"
    gameObject1.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green"
    gameObject1.shapeColor="green";

  }


    drawSprites();
}

function isTouching(object1,object2){
  if (object1.x-object2.x < object2.width/2 + object1.width/2 
    && object2.x-object1.x < object2.width/2 + object1.width/2 && 
    object1.y-object2.y < object2.width/2 +object1.width/2 
    && object2.y-object1.y < object2.width/2 + object1.width/2  ){

  return true;
   
  }
  else{

    return false

  }
}