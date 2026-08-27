let arr = [1, 2, 3, 4, 5];


let arrSquare = arr.map((el) => el * el);
console.log("arrSquare : ", arrSquare);

let sum = arr.reduce((res, el) =>{
    return res + el;
});
console.log("sum = ", sum)

let average = sum / arr.length;
console.log("average :", average);