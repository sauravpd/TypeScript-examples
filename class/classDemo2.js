var Student1 = /** @class */ (function () {
    function Student1(rollNo, studentName) {
        this.rollNo = rollNo;
        this.studentName = studentName;
    }
    Student1.prototype.display = function () {
        console.log("Student Roll No : " + this.rollNo);
        console.log("Student Name : " + this.studentName);
    };
    return Student1;
}());
var studentObj1 = new Student1(1111, "John");
studentObj1.display();
