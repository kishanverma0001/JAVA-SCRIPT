//Arithmetic Operators
console.log("Arithmetic Operators");
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// unary Operators(++ ,--)
console.log("Unay Operatior");
console.log(a++); // 10 
console.log(a); // 11
console.log(++a); // 12

// Assignment operators(= ,+= ,-= ,*= ,/= etc.)
console.log("Assignment Operator");
a = b;
console.log(a); // 5
let c = 20;
// c = c + 5;
c += 5;
console.log(c);

// comparison operator
console.log("Comparison Operator");
let age = 18;
console.log(age > 18); //false
 
console.log("123" == 123); //true
console.log(1 == '1'); //true
console.log(0 == ' ');//true
console.log(null == undefined); // true

let num1 = 123;
let num2 = "123";
console.log(typeof(num1)); //number
console.log(typeof(num2)); //string
console.log(num1 == num2); // true

// === comapare value and type also
console.log("123" === 123); //false
console.log(1 === '1'); //false
console.log(0 === ' ');//false

console.log(num1 === num2); // false
console.log(null === undefined); // false

// comparison of non numbers
console.log('a' > 'b'); // 'a'-> 61,'b' -> 62 false
console.log('A' < 'B')  // 'A'-> 41,'B' -> 42 true
console.log('*' < '&'); // false

// Logical operators
console.log("Logical Operators");
let marks = 75;
if(marks >= 33 && marks <= 80 || !false){
    console.log("pass");
    console.log("Grade A")
}