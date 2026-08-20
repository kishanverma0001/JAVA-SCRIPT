const calculator = {
    num: 55,
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }
};
console.log(calculator.add(1,2));
console.log(calculator.sub(5,9));
console.log(calculator.mul(10,3));

// shorthand
console.log("methods by shorthand");
const Calculator = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mul(a, b){
        return a * b;
    }
};
console.log(Calculator.add(1,2));
console.log(Calculator.sub(5,9));
console.log(Calculator.mul(10,3));