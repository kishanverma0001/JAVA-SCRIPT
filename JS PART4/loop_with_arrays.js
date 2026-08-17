let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
console.log("Nested loop with nested arrays");

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j = ${j} ${heroes[i][j]}`);
    }
}

let students = [["kishab", 7.44], ["kunal", 6], ["ankit", 7.14]];
for(let i=0;i<students.length;i++){
    console.log(`List #${i+1}`)
    for(let j=0;j<students[i].length;j++){
        console.log(`j = ${j} studets[i][j]`);
    }
}