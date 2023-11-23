let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum){
    maximum = parseInt(prompt("Enter A valid number!"));
}

const targetNum = Math.floor(Math.random() * maxmimum) + 1;

let guess = parseInt(prompt("Enter our firt guess!"));
let attempts = 1;

while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum){
        guess = parseInt(prompt)
    }
}