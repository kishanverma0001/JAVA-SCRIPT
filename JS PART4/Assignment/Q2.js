let n = prompt("Enter a number : ");
n = parseInt(n);

let count = 0;

while(n>0){
    n = Math.floor(n / 10);
    count++;
}
console.log(`Number of digits = ${count}`);
