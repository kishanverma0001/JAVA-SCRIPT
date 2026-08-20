function largeNum(arr,num){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > num){
            ans.push(arr[i]);
        }
    }
    return ans;
}
let largeArr = largeNum([1,2,3,4,5,6,7,8,9,10,11,12],5);
console.log(largeArr);