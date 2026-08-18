const student = {
    name: "kishan",
    age: 22,
    marks: 95.8
};
console.log(student);
// get values
console.log(student["name"]);
console.log(student["age"]);
console.log(student.marks);
const post = {
    username: "@kishangndwal",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};
console.log(post);
console.log(post.tags);
console.log(post.tags[0]);
let prop = "reposts";
console.log(post[prop]); // 5
console.log(post.prop); // undefined

// key is converted to string
console.log("Js automatically convert key to string even if key is a number");
const obj = {
    1: 'a',
    2: 'b',
    true: 'c',
    null: 'd',
    undefined: 'e'
};
console.log(obj[1]); // a
console.log(obj[null]); // d
console.log(obj[true]);  // c
// console.log(obj.1); // syntax error
console.log(obj.undefined) // e

console.log("To Add/Update any value");
const student1 = {
    name: "kishan",
    ag: 23,
    marks: 95.8,
    city: "Bhilwara"
};
student1.city = "Mumbai";
console.log(student1.city);
console.log(student1);

student1.gender = "female";
console.log(student1);
console.log(student1.gender);

student1.marks = "A";
console.log(student1);

// to delete any key delete obje.keyName;
delete student1.marks;
console.log(student1);