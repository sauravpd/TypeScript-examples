class Student1 {
    rollNo: number
    studentName: string
    constructor(rollNo:number,studentName:string)
    {
        this.rollNo=rollNo
        this.studentName=studentName
    }
    display(): void {
        console.log("Student Roll No : " + this.rollNo)
        console.log("Student Name : " + this.studentName)
    }
}

var studentObj1=new Student1(1111,"John");

studentObj1.display()
