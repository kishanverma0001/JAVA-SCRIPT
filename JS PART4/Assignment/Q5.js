let arr = [-3,-2,-4,-5,-1];
let largest = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i];
}
}
console.log(largest);