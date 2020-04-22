class Drop{
    constructor(x,y,width,height){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.isCollide = false
this.color = 255;
    }

display(){
    //this.x = player.x;
    fill(this.color);
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height)

}

fire(){
    this.y = this.y-5;
}

coll(){
    if(this.isCollide===true){
        this.color = "red"
    }
    else{
        this.color = 255
    }
 
}
}