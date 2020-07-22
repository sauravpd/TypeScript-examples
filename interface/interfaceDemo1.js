var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("drawing circle");
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log("drawing square");
    };
    return Square;
}());
var squareObj = new Square();
squareObj.draw();
