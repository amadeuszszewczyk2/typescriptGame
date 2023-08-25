import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Zgadnij liczbę od 1 do 100!");

const askQuestion = () => {
  rl.question("Podaj swoją odpowiedź: ", (answer) => {
    attempts++;
    const userGuess = parseInt(answer);

    if (userGuess < randomNumber) {
      console.log("Za mało!");
      askQuestion();
    } else if (userGuess > randomNumber) {
      console.log("Za dużo!");
      askQuestion();
    } else {
      console.log(`Brawo! Zgadłeś liczbę po ${attempts} próbach.`);
      rl.close();
    }
  });
};

askQuestion();
