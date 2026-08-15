let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
colors.splice(4);
console.log(colors);

console.log(colors.splice(0,1));
console.log(colors);

console.log(colors.splice(0,1,"black","grey"));
console.log(colors);

console.log(colors.splice(1,0,"pink"));
console.log(colors);

console.log(colors.splice(2,1,"green"));
console.log(colors);

// sort in array
console.log("sort in array");
console.log(colors.sort());

let nums = [25,16,4,49,36,9];
console.log(nums.sort()); // [16, 25, 36, 4, 49, 9]