function sum(...args){ // arguments
    return args.reduce((sum,el) => sum + el);
}
console.log("sum = ",sum(1,2,3,4,5));

function num(){
    console.log(arguments);
    console.log(arguments.length);
}
num(1,2,3,4,5);

function min(msg,...args){
    console.log(msg);
    return args.reduce((min, el) => min > el ? el : min, args[0]);
};
console.log(min("hello",1,3,-4,5,-9));