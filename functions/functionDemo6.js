function sum() {
    var num1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num1[_i] = arguments[_i];
    }
    var total = 0;
    for (var n in num1) {
        total += num1[n];
    }
    console.log(total);
}
sum(10, 20, 30, 40);
sum(30, 20);
