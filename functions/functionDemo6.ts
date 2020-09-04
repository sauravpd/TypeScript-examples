function sum(...num1:number[]) {
    var total=0;
    for(var n in num1)
    {
        total+=num1[n]
    }
    console.log(total)
}

sum(10,20,30,40)
sum(30,20)