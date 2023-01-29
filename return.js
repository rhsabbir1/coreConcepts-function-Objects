function addition (num1 , num2){
    var sum = num1 + num2;
    return sum;
}

var a = 60;
var b = 40;
var total = addition(a , b);
console.log("Total :", total);


function bringSingharas(money){
    var singharePrice = 10;
    var quantity = money / singharePrice;
    return quantity;
}

var myTaka = 150;
var buySinghera = bringSingharas(myTaka);
console.log(buySinghera)