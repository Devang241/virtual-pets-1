var dog, dogImg, happyDog, database, food, foodStock, readStock;

function preload()
{
	
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,300,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.2;
                                     
}


function draw() {  
 
  background("green");
  textSize(20);
  fill("white");
  text("Press up arrow key to feed the dog",100,30);
  text("food remaing:"+food,200,100);

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);

  }
  

if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog);
   
  }
  
    
  if(food ===0){
    food = 20;
  }

  

  drawSprites();
  //add styles here

}

function readStock(data){
  food=data.val();
}



function writeStock(x){
 if(x<=0){
   x=0
  }
  else{
    x=x-1

    database.ref('/').update({
      food : x
    })
  }


}


