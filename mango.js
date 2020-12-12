class Mango {
    constructor(x,y,radius){
        radius = 50
    var options= {
        isStatic : true,
        friction : 1

    }
    this.image = loadImage("images/mango.png")
    this.body = Bodies.circle(x,y,50,options)
    World.add(world,this.body)

    }
    display(){
       var pos = this.body.position
        push()
        fill("white")
        image(this.image,pos.x,pos.y,50,50)    
       
    }
}
