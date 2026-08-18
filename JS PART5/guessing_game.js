const maxNum = prompt("Enter the max number : ");
const num = Math.floor(Math.random()*maxNum)+1;

console.log(num);
let guessNum;
guessNum =  prompt("Guess a number : ");

    while(true){
        if(guessNum == "quit"){
            console.log("user quit");
            break;
        }if(guessNum == num){
            console.log("congrates! you guess correct number ",num);
            break;
        }else if(guessNum < num){
            guessNum = prompt("hint : your guess was too small.lease try again : ");
        }else{
            guessNum = prompt("hint : your guess was too large.lease try again : ");
        }
}


