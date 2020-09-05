class Box{
    constructor(x, y, width, height){    
      var options = {
        isStatic : true
      }
    this.body = Bodies.rectangle(x,y,width,height,options); 
      this.width = width;
      this.height = height;
    }
    display(){
        var boxpos = this.body.position;
        push();
        translate(boxpos.x,boxpos.y);
        strokeWeight(4);
        stroke(230);
        fill(200);
        rect(0,0,this.width,this.height);
        pop();
    }
}
  