let favourite_movie = "Avatar";
let guess = prompt("Enter your favourite movie name : ");

while((guess != favourite_movie) &&  (guess != "quit")){
        guess = prompt("Wrong guess.Please try again : ");
    }
if(guess === favourite_movie){
    console.log("congratulation your guess is correct")
}
else{
    console.log("you quit");
}
