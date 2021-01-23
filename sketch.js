var fixedRect , movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,1200);
  fixedRect = createSprite(600,300,50,80);
  fixedRect.shapeColor = "yellow";

  movingRect = createSprite(120,140,80,50);
  movingRect.shapeColor = "orange";

  rect1 = createSprite(200,300,50,80);
  rect1.shapeColor = "white";

  rect2 = createSprite(400,300,50,80);
  rect2.shapeColor ="skyblue";
}

function draw() {
  background("black"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  console.log(movingRect.x - fixedRect.x);
  // executes = its getting a value


  // var value = isTouching(); // true/false
  // console.log(value);
  //if(isTouching())=> if(true){}
  // if(false)=> {not exeute}

  // var num = 10;

  // if(12>10)


  if(isTouching(movingRect,fixedRect)){ // checks if score>140? if(true) / otherwise => if(false)// if(false)
    fixedRect.shapeColor = "teal";
}
else{
  fixedRect.shapeColor = "yellow";
}

  if(isTouching(movingRect,rect2)){ // checks if score>140? if(true) / otherwise => if(false)// if(false)
      rect2.shapeColor = "teal";
  }
  else{
    rect2.shapeColor = "skyblue";
  }


  if(isTouching(movingRect,rect1)){ // checks if score>140? if(true) / otherwise => if(false)// if(false)
    rect1.shapeColor = "teal";
  }
  else{
    rect1.shapeColor = "white";
  }
  

  drawSprites();
}

