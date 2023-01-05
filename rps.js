let values = ["r", "p", "s"];
let wins = 0;
let losses = 0;
let ties = 0;

function getRandomValue(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

let aiChoice = getRandomValue(values);


for (let i = 0; i < 10; i++) {


    let userChoice = prompt("Please choose r p or s");

    if (userChoice === aiChoice) {
        ties++;
    }
    if (userChoice === "r" && aiChoice === "s") {
        wins++;
    }
    if (userChoice === "r" && aiChoice === "p") {
        losses++;
    }
    if (userChoice === "s" && aiChoice === "r") {
        losses++;
    }
    if (userChoice === "s" && aiChoice === "p") {
        wins++;
    }
    if (userChoice === "p" && aiChoice === " r") {
        wins++;
    }
    if (userChoice === "p" && aiChoice === "s") {
        losses++;
    }
}

console.log("Wins: " + wins );
console.log("Losses: " + losses);
console.log("Ties: " + ties );