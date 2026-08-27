let arr = [1, 4, 5, -2, -1, 2, 10, -1,];
// let min = arr.reduce((min , el) =>{
//     return el < min ? el : min;
// },arr[0]);

function getMin(arr){
    let min = arr.reduce((min , el) =>{
    return el < min ? el : min;
    },arr[0]);
    return min;
}
console.log(getMin(arr));
