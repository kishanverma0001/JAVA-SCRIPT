function longestStr(list){
    let longest = "";
    for(let i=0;i<list.length;i++){
      if(list[i].length > longest.length){
        longest = list[i];
      }
    }
    console.log(longest);
}

longestStr(["Australia","Germany","United States of America"]);
