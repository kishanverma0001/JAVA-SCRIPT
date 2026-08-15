let str = "I Love Coding";
console.log(str.slice(0)); // 0 to end
console.log(str.slice(2)); // 2 to end
console.log(str.slice(2,6)); // 2 to 5
console.log(str.slice(7)); // 7 to end
console.log(str.slice(-6)); // str.length - num

// replace
console.log("replace method");
console.log(str.replace("Love","do"));
console.log(str.replace("o","x"));

//repeat method
let str1 = "Mango";
console.log("repeat method");
console.log(str1.repeat(3));