let arr = [1,2,3,4,5,6,2,3];
let num = prompt("Enter a number : ");
num = parseInt(num);
let result =[];
for(let i=0;i<arr.length;i++){
   if(arr[i] != num){
    result.push(arr[i]);
   }
}
console.log(result);