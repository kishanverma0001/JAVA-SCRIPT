function sum(a,b = 3){ // valid
    return a + b;
};

console.log(sum(2)); // 5
console.log(sum(5, 10)); // 15

function sum2(a = 1,b = 2){ //  valid
    return a + b;
};
console.log(sum2()); // NaN

function sum3(a = 5,b){ // not valid
    return a + b;
};
console.log(sum3(10)); // NaN
