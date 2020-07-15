var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log("Student Roll No : " + this.rollNo);
        console.log("Student Name : " + this.studentName);
    };
    return Student;
}());
var studentObj1 = new Student();
studentObj1.rollNo = 1111;
studentObj1.studentName = "Steve";
studentObj1.display();
