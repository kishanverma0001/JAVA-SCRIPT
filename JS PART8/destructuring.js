let names = ["tony", "bruce", "steve", "peter", "abc", "xyz", "pyq"];
// let winner = names[0];
// let runnerup = names[1];
let [winner , runnerup, ...others] = names;
console.log(winner,runnerup,others);

console.log("Destructuring in objects");
let student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd"
};

// let username = student.username;
// let password = student.password;
// let {username, password} = student;
let {username: user, password: secret, city: palace = "Mumbai"} = student;
console.log(user, secret,palace);