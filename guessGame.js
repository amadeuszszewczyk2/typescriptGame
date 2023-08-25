"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
console.log("Zgadnij liczbę od 1 do 100!");
var askQuestion = function () {
    rl.question("Podaj swoją odpowiedź: ", function (answer) {
        attempts++;
        var userGuess = parseInt(answer);
        if (userGuess < randomNumber) {
            console.log("Za mało!");
            askQuestion();
        }
        else if (userGuess > randomNumber) {
            console.log("Za dużo!");
            askQuestion();
        }
        else {
            console.log("Brawo! Zgad\u0142e\u015B liczb\u0119 po ".concat(attempts, " pr\u00F3bach."));
            rl.close();
        }
    });
};
askQuestion();
