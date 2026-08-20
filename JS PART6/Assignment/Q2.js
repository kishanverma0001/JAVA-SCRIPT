function uniqueChar(str){
    let ans = "";
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<i;j++){
            if(str[i] === str[j]){
                count++;
            }
        }

        if(count === 0){
            ans+=str[i];
        }
    }
    console.log(ans);
}
uniqueChar("abcdabcdefgggh");