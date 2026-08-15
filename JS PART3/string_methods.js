let msg = "  hello  ";
// trim method
console.log(msg.trim());
console.log(msg);

// toUpperCase and toLowerCase
let str = "Random string";
console.log(str.toUpperCase());
console.log(str.toLowerCase());  

// string with arguments
// indexof()
let str1 = "I Love Coding";
console.log(str1.indexOf("Love")); // 2
console.log(str1.indexOf("o")); //3
console.log(str1.indexOf("j")); // -1 not found

// method chaining
let str2 = "     hello     ";
console.log(str2.toUpperCase().trim());