// Array methods
let cars = ["audi" ,"bmw", "xuv" ,"maruti"];
console.log(cars);
//push to add an element to end
cars.push("ferrari");
console.log(cars);

// unshift add to start
cars.unshift("Thar");
console.log(cars);

// pop to dellete from end
cars.pop();
console.log(cars);

// shift to delete from start
cars.shift();
console.log(cars);

// indexOf 
console.log("indexOf mehod");
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow")); //1
console.log(primary.indexOf("green")); //-1
console.log(primary.indexOf("Yellow")); // -1 not found

// includes
console.log("includes method");
console.log(primary.includes("red")); // true
console.log(primary.includes("green")); // false

// concat
console.log("Concatenation method");
let secondary = ["orange","green","violet"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));

// reverse
console.log("Reverse method");
console.log(primary.reverse());
console.log(secondary.reverse());

// slice method
console.log("Slice Methods");
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-3));