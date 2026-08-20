function getSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum;
}
let s1 = getSum(100);
console.log(s1);