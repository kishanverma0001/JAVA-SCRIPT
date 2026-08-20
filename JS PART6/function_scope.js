let sum = 54; // global scope
function calSum(a, b){
    let sum = a + b;
    console.log("sum = ",sum);
}
calSum(1,5);

// console.log(sum); // error sum is not defined because sum is function scope
calSum(1,8);
console.log(sum); // 54 
