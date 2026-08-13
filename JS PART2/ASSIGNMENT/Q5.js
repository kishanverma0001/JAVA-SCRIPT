// Qs5.Write a program to find the largest of 3 numbers
let num1 = prompt("Enter 1st number : ");
let num2 = prompt("Enter 2nd number : ");
let num3 = prompt("Enter 3rd number : ");

if( num1 > num2 && num1 > num3){
    console.log(`${num1} is largest.`);
}else if(num2 > num3){
    console.log(`${num2} is largest.`);
}else{
    console.log(`${num3} is largest.`);
}