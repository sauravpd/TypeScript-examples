class A
{
    show():void
    {
        console.log("A Show method")
    }
}
class B extends A
{
    show():void
    {
        console.log("B Show method")
    }
}
var obj=new B();
obj.show()