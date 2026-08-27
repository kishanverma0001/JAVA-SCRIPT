let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((res, el) =>{
    return res + el;
});

console.log("sum of array : ",sum);

let max = arr.reduce((largest , el) =>{
    return el > largest ? el : largest;
},arr[0]);

console.log("largest element in array = ",max);

