let playAgain = true;

for (;;) {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let win = false;

    alert("Guess Number Between 1 and 100");

    for (let i = 1; i <= 10; i++) {

        let guess = Number(prompt("Attempt " + i + "/10\nEnter Number"));

        if (isNaN(guess)) {
            alert("Enter Valid Number ");
            i--;
        }
        else if (guess < 1 || guess > 100) {
            alert("Enter Number Between 1 and 100");
            i--;
        }
        else {

            attempts++;

            if (guess > randomNumber) {
                alert("Too High");
            }
            else if (guess < randomNumber) {
                alert("Too Low");
            }
            else {
                alert("Congratulations! You Win  ");
                alert("Attempts = " + attempts);
                win = true;
                break;
            }
        }
    }

    if (win == false) {
        alert("Game Over");
        alert("Correct Number = " + randomNumber);
    }

    let choice = prompt("Play Again? (yes/no)");

    if (choice == null || choice.toLowerCase() != "yes") {
        alert("Thank You For Playing ");
        break;
    }
}