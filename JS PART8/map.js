let arr = [1, 2, 3, 4, 5];
console.log(`arr = ${arr}`);
let arrDouble  = arr.map((el) =>{
    return el * 2;
});
console.log(`arrDouble = ${arrDouble}`);

// return new array

let students = [
    {
    name: "kishan",
    marks: 95
  },
    {
    name: "krish",
    marks: 93
   },
    {
    name: "kunal",
    marks: 90
   },
]

let gpa = students.map((el) =>{
    return el.marks / 10;
});
console.log("gpa = ",gpa);