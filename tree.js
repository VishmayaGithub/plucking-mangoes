class Tree {
    constructor(x,y,width,height){
        this.width = width
        this.height = height
    var options= {
        isStatic : true
    }
    this.image = loadImage("picas/Plucking mangoes/tree.png")
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        push()
        fill("brown")
    image(this.image,pos.x,pos.y,this.width,this.height)   
    pop() 
    }
}
