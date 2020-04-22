

var player;
var enemy;
var enemies=[]
var drops = []

function setup() {

  createCanvas(1200,800);
  
 player = new Player(40,450);
 

}

function draw() {
  background(0);  
  for (var i =0;i<enemies.length;i++){
    enemies[i].display();
    
    enemies[i].move();
    }


  

  if(World.frameCount%50===0){

  var enemy = new Virus(600,-10)
  enemies.push(enemy)
}

  player.display();

  for(var i=0;i<drops.length;i++){
    drops[i].display();
    drops[i].fire();
  }
  
  
}

function keyPressed(){
  if(keyCode===UP_ARROW){
  var  drop = new Drop(player.x,450,20,20)
  drops.push(drop);
}
}

  
function detectCollisions(){
  var obj1;
  var obj2;

  // Reset collision state of all objects
  for (var i = 0; i < enemies.length; i++) {
      enemies[i].isCollide = false;
      
  }
  for(var j=0;j<drops.length;j++){
    drops[j].isCollide = false;
  }

  // Start checking for collisions
  for (var i = 0; i < enemies.length; i++)
  {
      enemies[i].coll();
      obj1 = enemies[i];
      

      for (var j = 0; j < drops.length; j++){
    
          drops[j].coll();
          obj2 = drops[j];
          
  }
          // Compare object1 with object2
          if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)){
            obj1.isColliding = true;
            obj2.isColliding = true;
            console.log("xyz")
          }
      }
    }

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  // Check x and y for overlap
  if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
      return false;
  }
  return true;
}





