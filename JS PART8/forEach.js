let arr = [1, 2, 3, 4, 5];
let print = function print(el){
    console.log(el);
}

// arr.forEach(print);

// or
let printArr = arr.forEach(function print(el){
    console.log(el);
});
console.log(printArr); // undefined --> forEach does not return new array
let arr2 = [
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
    marks: 94.4
   },
]

arr2.forEach((student,index)  =>{
    console.log(index,student.marks);
});
arr2.forEach((student,index)  =>{
    console.log("Hello " + student.name);
});