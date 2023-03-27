// Birinchi masala uchun algoritm//--
var input = [23,100,1000,]

function inputSum(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i+=1) {
        sum += input[i];
    }
    return sum;

}

console.log(`Masala_1 javobi: ` + inputSum(input));

// Ikkinchi masala uchun algoritm//--
var inputNumber = 9;
function numberSum(inputNumber) {
    var total = 0;
    for (var i = 1; i <=inputNumber; i++) {
        total += i; 
    }
    return total;
}

console.log(`Masala_2 javobi: ` + numberSum(inputNumber));
