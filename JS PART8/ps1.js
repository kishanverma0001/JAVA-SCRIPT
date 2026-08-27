let arr = [1, 2, 30, 5, 24];
let isMultipleOf10 = arr.every((el) =>{
    return el % 10 == 0;
});
console.log(isMultipleOf10);