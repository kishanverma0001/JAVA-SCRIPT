{
    let a = 25; // block scope
}
// console.log(a); // error a is not defined a is in a block scope

for(let i=1;i<=5;i++){
    console.log(i); // block scope
}
// console.log(a);