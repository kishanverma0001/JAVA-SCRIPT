function randomNum(start,end){
    let num = Math.floor(Math.random() * (end - start + 1) ) + start;
    console.log(num);
}
randomNum(21,55);