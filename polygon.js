class polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,radius,options,6);
        this.radius = radius;
        this.image = loadImage("hexagon/1200px-Hexagon-black.svg.png")
        World.add(world,this.body);
    }
    display(){
      this.x = mouseX;
      this.y = mouseY;
        var polygonpos = this.body.position;
        push();
        translate(polygonpos.x,polygonpos.y);
        image(this.image, 0,0,this.radius);
        pop();
    }
}