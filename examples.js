/* 
function functionName(Paramaters){
    function body
    return
}

var returnValue = functionName(Paramaters value) 
*/

function avarage(assingMent1 , assingMent2,  assingMent3){
    var totalMarks = assingMent1 + assingMent2 + assingMent3;
    var avarageMark  = totalMarks / 3;
    return avarageMark;
}

var assingment1Marks = 60;
var assingment2Marks = 60;
var assingment3Marks = 60;

var avarage = avarage(assingment1Marks, assingment2Marks,  assingment3Marks);
console.log(avarage)


function getTotal(numbe1, number2){
    var total = numbe1 + number2;
    return total;
}

var result1 = getTotal(15 , 20)
var result2 = getTotal(25 , 30)

var fainulResult = getTotal  (result1 , result2);
console.log(fainulResult)


function squre(length){
    var squre = length * 4;
    return squre;
}

var length = 4;
var squre = squre(length)
console.log(squre)