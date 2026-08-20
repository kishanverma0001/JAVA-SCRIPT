let array = ["hii ", "this is ", "kishan"," an IT engineer"];
function arrConcat(array){

    let concat = "";
    for(let i=0;i<array.length;i++){
        concat += array[i];
    }

    return concat;
}
// let concat= arrConcat(["kishan","aman","kavita"]);
console.log(arrConcat(array));