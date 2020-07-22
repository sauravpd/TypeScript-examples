interface Shape{
    draw():void
}
class Circle implements Shape
{
    draw():void{
        console.log("drawing circle")
    }
}
class Square implements Shape
{
    draw():void{
        console.log("drawing square")
    }
}
var squareObj=new Square()
squareObj.draw()