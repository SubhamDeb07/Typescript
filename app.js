var numElement1 = document.getElementById('num1');
var numElement2 = document.getElementById('num2');
var buttonElememt = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
buttonElememt.addEventListener('click', function () {
    var num1 = numElement1.value;
    var num2 = numElement2.value;
    var result = add(+num1, +num2);
    console.log(result);
    console.log(add(num1, num2));
});
