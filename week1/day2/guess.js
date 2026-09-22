const startGame = () => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  let guess = null;
  let attempts = 0;

  console.log("Game started! Guess a number between 1 and 100");

  while (guess !== secretNumber && attempts < 7) {
    const input = prompt("Enter your guess (1 - 100)");

    if (input === null) {
      console.log("Game quit. Thanks for playing!");
      return;
    }

    guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    attempts++;

    if (guess > secretNumber) {
      alert("Too high! Try again.");
    } else if (guess < secretNumber) {
      alert("Too low! Try again.");
    } else {
      alert(`Correct! You found the number in ${attempts} tries.`);
      console.log(`Victory! The number was ${secretNumber}.`);
    }
  }

  if (guess !== secretNumber && attempts === 7) {
    alert(`Game over! The number was ${secretNumber}.`);
    console.log(`Game over! The number was ${secretNumber}.`);
  }
};

startGame()
