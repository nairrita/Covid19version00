class Virus{
    constructor(x,y){
        this.x = random(10,1000)
        this.y = y
        this.height = 50
        this.width = 50
        this.angle = 0;
        this.isCollide = false
        this.color = 255

    }

 display(){
    
    angleMode(DEGREES)
    push();
     translate(this.x,this.y)
     rotate(this.angle)
     fill(this.color)
     rectMode(CENTER)
     rect(0,0,this.width,this.height);

this.angle = this.angle +5;

pop();

 }

 coll(){
if(this.isCollide===true){
    this.color = "red"
}
else{
    this.color = 255
}
 }

 move(){
     this.y = this.y+5
 }

}