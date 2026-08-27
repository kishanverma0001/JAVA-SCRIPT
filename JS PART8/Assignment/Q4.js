function doubleAndReturnArgs(arr,...args){
   let double = args.map((el) => el * 2);
   return [...arr, ...double];
}
let x = doubleAndReturnArgs([1,2,3,4,5],1,2,3,4,5);
console.log(x);