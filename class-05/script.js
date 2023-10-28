'use strict';

let score = 0;

function askQuestion(question, correctAnswer, goodJobMessage, wrongMessage) {
  let userAnswer = prompt(question);

  if (userAnswer && userAnswer.toLowerCase() === correctAnswer) {
    score++;
    alert(goodJobMessage);
  } else {
    alert(wrongMessage);
  }
}

function quizQuestions() {
  let userName = prompt("What is your name?");

  if (userName) {
    alert(`Hi ${userName}! We're going to play a game where I ask you seven questions. Press OK to begin`);

    askQuestion(
      `${userName}, does Steph live in Atlanta? (Type 'yes' or 'no')`,
      "yes",
      "Correct! Steph lives in Atlanta.",
      "Incorrect. Steph does not live in Atlanta."
    );

    askQuestion(
      "Does Steph have children? (Type 'yes' or 'no')",
      "no",
      "Great job! Steph doesn't have children.",
      "Incorrect. Steph doesn't have children."
    );

    askQuestion(
      "Does Steph have a pet? (Type 'yes' or 'no')",
      "yes",
      "Correct! Steph has a dog named Tot.",
      "Incorrect. Steph has a dog named Tot."
    );

    askQuestion(
      "Is Steph an attorney? (Type 'yes' or 'no')",
      "yes",
      "Congratulations! Steph is an attorney.",
      "Incorrect. Steph is an attorney."
    );

    askQuestion(
      "Does Steph like pizza? (Type 'yes' or 'no')",
      "yes",
      "Correct! Steph likes pizza.",
      "Incorrect. Steph likes pizza."
    );

    alert(`Your current score is: ${score} out of 5. Only two more questions to go!`);
  } else {
    alert("Please enter your name to continue.");
  }
}

function guessYearsAsAttorney() {
  for (let i = 1; i <= 4; i++) {
    let guess = parseInt(prompt('How many years has Steph been an attorney? Guess a number 0 - 20.'));
    const correctAnswer = 10;

    if (guess === correctAnswer) {
      score++;
      alert(`Correct! Your current score is: ${score}`);
      break;
    } else if (guess < correctAnswer) {
      alert(`Too low. You have ${4 - i} tries left. Try again.`);
    } else {
      alert(`Too high. You have ${4 - i} tries left. Try again.`);
    }

    if (i === 4) {
      alert(`You have used all your attempts. The correct answer is ${correctAnswer}. Your current score is: ${score}.`);
    }
  }
}

function guessPizzaTopping() {
  const correctAnswer = ["cheese", "pepperoni", "mushrooms", "olives", "italian sausage", "pineapples"];
  let attempts = 6;
  let correctToppings = [];

  while (attempts > 0) {
    let pizza = prompt(`What pizza topping does Steph like? You have ${attempts} attempts remaining.`).toLowerCase();

    if (correctAnswer.includes(pizza)) {
      score++;
      correctToppings.push(pizza);
      alert(`You are correct! Your final score is: ${score} out of 7. Well done!`);
      break;
    } else {
      attempts--;
      if (attempts > 0) {
        alert(`Nope. You have ${attempts} tries left. Try again.`);
      } else {
        alert(`You have used all your attempts. The correct toppings are: ${correctAnswer.join(", ")}. Your final score is: ${score} out of 7. Well done!`);
      }
    }
  }
}


quizQuestions();
guessYearsAsAttorney();
guessPizzaTopping();
