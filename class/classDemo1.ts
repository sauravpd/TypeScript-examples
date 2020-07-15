class Student {
    rollNo: number
    studentName: string
    display(): void {
        console.log("Student Roll No : " + this.rollNo)
        console.log("Student Name : " + this.studentName)
    }
}

var studentObj1=new Student();
studentObj1.rollNo=1111
studentObj1.studentName="Steve"
studentObj1.display()
