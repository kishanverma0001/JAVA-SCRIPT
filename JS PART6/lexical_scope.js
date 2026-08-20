function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
        console.log(y);
        let a = 10;
    }
    // console.log(a); // lexical scope
    innerFunc();
}

outerFunc();