// Arrow function, multiple parameter, function body?

/*
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);
*/

/*
const doubleIt = function myFun(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);
*/


// ES6 - arrow function
const doubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result1 = doubleIt(50);
console.log(result1);

const result2 = add(9, 10);
console.log(result2);

const result3 = give5();
console.log(result3);

const result = doMath(7, 5);
console.log(result);
