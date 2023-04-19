var maximum = parseInt(prompt("Enter The Maximum Number .... "));
while (!maximum) {
  maximum = parseInt(prompt("Enter A valid Number .... "));
}
var targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

var guess = prompt("Enter Your First Guess??   (Type 'q' To Quit)");
var attempts = 1;
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a New Guess");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too Low ! Enter a New Guess");
    attempts++;
  } else {
    guess = prompt("Invalid guess, Please enter a number or 'q' to quit");
  }
}
if (guess === "q") {
  console.log(`you quit ,, the number was ${targetNum}`);
} else {
  console.log("Congrats you win");
  console.log(`you Got It took you ${attempts} guesses`);
}
