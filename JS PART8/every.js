// it returns boolean value if all elements satisfy the condition

let arr = [1, 2, 3, 4, 5];

let isEven = arr.every((el) =>{
    return el % 2 == 0;
});
console.log(isEven);

let arr2 = [2, 4, 20];

let isEven2 = arr2.every((el) =>{
    return el % 2 == 0;
});
console.log(isEven2);