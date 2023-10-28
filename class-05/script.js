
'use strict';


let score = 0;

function newQuestion(question, rightAnswer, goodJobMessage, wrongMessage) {
  let userAnswer = prompt(question).toLowerCase();
  console.log(`${question} User's answer: ${userAnswer}`);
  
  if (userAnswer === rightAnswer) {
    score++;
    console.log(goodJobMessage);
    alert(goodJobMessage);
  } else {
    console.log(wrongMessage);
    alert(wrongMessage);
  }
}

function newQuiz() {
  let userName = prompt("What is your name?");
  console.log(`Name entered: ${userName}`);


  if (userName) {
    alert(`Hi ${userName}! We're going to play a game where I ask you seven questions. Press OK to begin`);
    

    newQuestion(
      `${userName}, does Steph live in Atlanta? (Type 'yes' or 'no')`,
      "yes",
      "Correct! Steph lives in Atlanta.",
      "Incorrect. Steph does live in Atlanta."
    );


    newQuestion(
      "Does Steph have children? (Type 'yes' or 'no')",
      "no",
      "Great job! Steph doesn't have children.",
      "Incorrect. Steph doesn't have children."
    );


    newQuestion(
      "Does Steph have a pet? (Type 'yes' or 'no')",
      "yes",
      "Correct! Steph has a dog named Tot.",
      "Incorrect. Steph has a dog named Tot."
    );


    newQuestion(
      "Is Steph an attorney? (Type 'yes' or 'no')",
      "yes",
      "Congratulations! Steph is an attorney.",
      "Incorrect. Steph is an attorney."
    );


    newQuestion(
      "Does Steph like pizza? (Type 'yes' or 'no')",
      "yes",
      "Correct! Steph likes pizza.",
      "Incorrect. Steph likes pizza."
    );


    alert(`Your final score is: ${score} out of 5. Well done!`);
  } else {
    alert("Please enter your name to continue.");
  }
}


newQuiz();


for (let i = 1; i <= 4; i++) {
  let guess = prompt('How many years has Steph been an attorney? Guess a number 0 - 20.');
  let correctAnswer = 10;
  guess = parseInt(guess);

  if (guess === correctAnswer) {
    score++;
    console.log('You are correct!');
    alert(`Correct! Your current score is: ${score}`);
    break;
  } else if (guess < correctAnswer) {
    console.log('Too low');
    alert(`Too low. You have ${4-i} tries left. Try again.`);
  } else {
    console.log('Too high');
    alert(`Too high. You have ${4-i} tries left. Try again.`);
    
    if (i === 4) {
    console.log(`You have used all your attempts. The correct answer is ${correctAnswer}.
    Your current score is: ${score}.`);
    alert(`You have used all your attempts. The correct answer is ${correctAnswer}
    Your current score is: ${score}.`);
    }
  }
}



let correctAnswer = ["cheese", "pepperoni", "mushrooms", "olives", "italian sausage", "pineapples"];
let attempts = 6;

while (attempts > 0) {
  let pizza = prompt(`What pizza topping does Steph like? You have ${attempts} attempts remaining.`).toLowerCase();

  if (correctAnswer.includes(pizza)) {
    score++;
    console.log('You are correct!');
    alert(`You are correct! Your final score is: ${score} out of 7. Well done!`);
    break;
  } else {
    attempts--;
    if (attempts > 0) {
      console.log('Nope.');
      alert(`Nope. You have ${attempts} tries left. Try again.`);
    } else {
      console.log('You have used all your attempts.');
      alert(`You have used all your attempts. Your final score is: ${score} out of 7. Well done!`);
    }
  }
}













