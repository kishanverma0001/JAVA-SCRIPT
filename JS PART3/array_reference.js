let num1 = [1,2,3,4];
let num2 = [1,2,3,4];
console.log(num1 == num2); //false

let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log(arrCopy == arr); // true
console.log(arrCopy === arr) // true
arr.push('g');
console.log(arrCopy);
console.log(arrCopy == arr);

// constant array

console.log("constant array");
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums.splice(0,1,5);
console.log(nums);
nums = [6, 7, 9]; //  Assignment to constant variable error
