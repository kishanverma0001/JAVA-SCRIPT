let students = ["kishan","aman","shradha"];

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students);

console.log(students.length); // 3
console.log(typeof(students)); // object

// mixed array
let info = ["kishan", 23, 95.8];
console.log(info);
console.log(info[0][0]); // kisahn => k

let emptyArr = [];
console.log(emptyArr);

// arrays are mutable
console.log("arrays are mutable");
let fruits = ["mango" ,"apple", "litchi"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits);
fruits[10] = "pineapple";
console.log(fruits); // length => 11
