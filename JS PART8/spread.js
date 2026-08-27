let arr = [1, 2, 3, 4, 5];
console.log(...arr);
// console.log(Math.min(arr)); // NaN
console.log(Math.min(...arr));

let str = "apnacollege";
console.log(...str);

console.log("spread with array literals");
let newArr = [...arr];
console.log(newArr);

let char = [..."hello"];
console.log(char);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let num = [...odd, ...even];
console.log(num);

console.log("spread with object literals");

let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id: 123, country: "India"};
console.log("dataCopy",dataCopy);
console.log("data",data);

// arr into object

let arr2 = [1, 2, 3, 4, 5];
let obj1 = {...arr2}; // key(index): value
console.log("array into obj :",obj1);

let str2 = "apnaacollege";
let obj2 = {...str2};
console.log("str into obj :",obj2);

