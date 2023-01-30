

function multiplication(input){
    var sum = 0;
    for(var i = 1; i <= 10; i++){
        var number = i * input;
        sum = sum + number
        console.log(input, 'X',i,"=", number)
    }
    return sum;
}

var multiplactionTable = multiplication(10)

var multiplactionTableAddition = multiplactionTable;
console.log(multiplactionTableAddition)
