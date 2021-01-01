class Log{
    constructor(x,y,height,angle){
   var     options={
            restitution:0.8,density:1.0,friction:1.8
        }
 this.body=Bodies.rectangle(x,y,20,height,options)
 this.width=20
 this.height=height
 World.add(world,this.body)
Matter.Body.setAngle(this.body,angle)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
    rectMode(CENTER)
    fill("green");
    rect(0,0,this.width,this.height)
    pop()
    }
}