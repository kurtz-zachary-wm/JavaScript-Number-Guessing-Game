var tries = 0;
var target = Math.floor(Math.random() * 99 + 1);
var guess = prompt("Guess");
while (guess != target) {
        if (guess < target) guess = prompt("Guess higher");
        else guess = prompt("Guess lower");
    tries ++ ;
}
alert ("You win! Guesses: " + tries);