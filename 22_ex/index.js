
const prompt = require("prompt-sync")();

let a = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
let inp;
let score = 100;

while (inp != a) {
  inp = Number(prompt("Enter a number between 1 and 100: "));
  score--;

  if (inp === a) {
    console.log("🎉 Correct! You guessed the actual number.");
    console.log("Your score is:", score);
    break;
  } else if (inp > a && inp <= 100) {
    console.log("📈 Your guess is greater than the actual number.");
  } else if (inp < a && inp >= 1) {
    console.log("📉 Your guess is less than the actual number.");
  } else {
    console.log("⚠️ Please enter a number between 1 and 100.");
  }
}
