
class Stone {
    constructor(x,y,width,height){
        this.width = width
        this.height = height
    var options= {
        isStatic : false,
        restitution : 0.5
    }
    this.image = loadImage("images/stone.png")
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)

    }
    display(){
      var  pos = this.body.position
        push()
        fill("lightgray")
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)    
    }
}