// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19WV8qfNz+wYrYl52LzIhy4dgqkfvNaqgMS24STwZ5fB8OhXqW1YBmKwom75o9sag1P9T2iEfEwCSdVfKiQ3AGVldvSug4YRu3czde4QBHtNGoppu33QNJW2cYluYVMKU7cXbJwWZhxYIUUi05VK+hiQNQN67JB6xRdZyUh6kjBEdqVjonNU9dHqdQTRGR9wkPjT2QP3tpAUV9sY3O3KhITXu4wLNE0kA1JyYNlmxxz0BS0wIwtkGoI8UEF+AFUPWhf3KGDI5g2uA4ZrIj+c5nrD1eQmoP9IaaFErJxHwHe88EReaE29np5DLlpVJbfFHvTwqGhGC4UYE5iTkvHxE3+APIr8TDt59Wg1rg0cpyJWuqzwV26abtCZhScjjK+EzyFAP6Rj9ORX9SUVRBaFSTMxDX2u7Hn3IB81Wefcrqxmfq4qMM4Wnm/Rs7neBJKjdPkWBEoBd4GyedhnAbvjKiuED4/Z1W8oJlchV94waFj296aYD1Gi0Q325SFYhzY2p2sLQ7dR9f12lzjVenj/BCVdnvsNYh3Z3kmiMOf25wW/jYXIx5AeH4l7CasM6kVHqyNOF0Jbcaoz8e4djCJoofC6sI9tqAIXnK6gAWjLqyJ6nDRLSOFAhE6d+JqeuHLGYE0UjWiuXTifpOXR4gMbhc7nwdm+TaSoOgzSos1uHPJW5z/oBLHbL8NEgzwbzMOpGJCV/2FzElIB5YdLWWitR6d7L/1zPAAfkVxu6t4ejeH70ctH7SGen97xL+Gp+VOY66OP4OhgIpWanGDw+c1CAWVsnerd8MuHOO3jqt5I/STm6NY79QFgVqTyQpldcoPrB78muOGDqRLLxtwBIkIq6CZVIQT/K2EwVG91U1iD5IATPD0aSvQxysZrD5W7lOtcocs3rdhO+sCx9uDriFLyV3IzkUJZLrHeR4nJS9wTxZ0xkgHY3rp/xG1CrEWnfLtUkAf4uDKPQhiUG5jbtU+tpU42LAVyPsNwpQFMRvID3Zy127uQpVojWgI6E5/W///Vnuw/DZ43edB14NxfeM/Qvxql0BYYSd+VWYmefQqaK8tmCy9wwY7L4NJJSeZc48wadLbvG5Hz63O8PItRAWqhAYs7Om3cvh2Zif8dnXYLToNxcWtaKlVxFdOD2PAWKT9VohF6q9Y2yZssVgu2DYeAnJOzwN4G22Ohz/CRtil0EZ1ZPomxJ0Va9pDcFsu+wD08dGyRNfa/aq7gbn+RBOSqqlKdGprsG/Y6ZPruVLVN4jLy6Ssy68C6xKOuiVdFAxp+hg3kgMOGJsgPI+5QaMsQyjfpLzBml4rx1z+Ww/BZOnXSgwnCnShx8O9pJci4xJZnAtEWOyneEqFuc5cAgIOiPDtpe8DMGFpcmMB8Y9EJ9FlKI7wCqZowtGMyzEMfrdm6f06amoLHElwLZ+xPHNNZ3BUVPXF6vDapfUt3EcT47TtKrDG6q3bGzXZVAVjIR3htGZA5AShmNCc/loa7BeE7n1FMfUoeTFjnDtQWvRvoXVNK1d0CZEf4Ip2paNZNxVDjsv6SLiSY6yHDZz/sFatVJdQapMaWDPHRrHi7ZX4e8fPhN2WkYnjIIYqcqIqA8Vx4aYHp3by8HK6uCDcyiZmz1P/xP7DsYJ/lFU1TsUvUafh4f25axgoZHWWYNlBRPRN88sMkjPWZqxeBmAm/cHad4qFsEapUeBf+bEtjft8KDUZvnem2+vLExd6";

// Decrypt function to retrieve the questions
function decryptQuestions(encryptedData) {
  const secretKey = "secretKey123"; // Same key used for encryption
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

// Load and show the questions
let questions = decryptQuestions(encryptedQuestions);

// Initialize required variables
let currentQuestionIndex = 0; // Start from the first question
let score = 0; // Initialize score
let timeLeft = 0; // Time counter
let timer; // Timer variable
let username = ""; // User's name
let selectedAnswerIndex = Array(questions.length).fill(null); // Array to store selected answers for each question

// Show the current question
function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = ""; // Clear previous answers

  question.answers.forEach((answer, index) => {
    const answerDiv = document.createElement("div");
    answerDiv.textContent = answer;
    answerDiv.onclick = () => selectAnswer(index);
    answersContainer.appendChild(answerDiv);
  });

  document.getElementById("question-num").textContent = `${currentQuestionIndex + 1}/10`;

  // If there's a selected answer, reapply the selection when going back to the question
  if (selectedAnswerIndex[currentQuestionIndex] !== null) {
    const answers = document.querySelectorAll('#answers div');
    answers[selectedAnswerIndex[currentQuestionIndex]].classList.add('selected');
  }

  // Disable Back button on the first question
  document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;

  // Disable Next button if no answer selected
  document.getElementById("next-btn").disabled = selectedAnswerIndex[currentQuestionIndex] === null;
}

// Handle answer selection
function selectAnswer(index) {
  const answers = document.querySelectorAll('#answers div');
  answers.forEach(answer => answer.classList.remove('selected')); // Remove previous selection
  answers[index].classList.add('selected'); // Mark new selection
  selectedAnswerIndex[currentQuestionIndex] = index; // Store the selected answer index for this question
  document.getElementById("next-btn").disabled = false; // Enable Next button
}

// Calculate the score
function calculateScore() {
  let currentScore = 0;
  questions.forEach((question, index) => {
    if (selectedAnswerIndex[index] !== null && selectedAnswerIndex[index] === question.correctAnswer) {
      currentScore++; // Increase score if the selected answer is correct
    }
  });
  return currentScore;
}

// Check answer and update score
function checkAnswer() {
  score = calculateScore(); // Recalculate score every time an answer is checked
  document.getElementById("next-btn").disabled = false;
}

// Show the final result
function showResult() {
  clearInterval(timer); // Stop the timer when the quiz is finished
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  // document.getElementById("user-info").style.display = "block";

  document.getElementById("final-score").textContent = score;
  document.getElementById("final-time").textContent = timeLeft;
}

// Timer - count upwards from 0
function startTimer() {
  timer = setInterval(() => {
    timeLeft++;
    document.getElementById("time").textContent = timeLeft;

    if (currentQuestionIndex >= questions.length) {
      showResult();
    }
  }, 1000);
}

// // Save score only if username is provided
// function saveScore() {
//   if (username.trim() === "") {
//     alert("Please enter your name before saving the score.");
//     return;
//   }

//   const scoreData = {
//     username: username,
//     score: score,
//     time: timeLeft,
//   };

//   const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(scoreData), "secretKey123").toString();

//   const blob = new Blob([encryptedData], { type: 'application/json' });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "highscore.json";
//   link.click();
// }

// Event Listeners
document.getElementById("next-btn").addEventListener("click", () => {
  checkAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
  document.getElementById("next-btn").disabled = true;
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentQuestionIndex--;
  showQuestion();
  document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
  document.getElementById("next-btn").disabled = false;
});

// document.getElementById("save-score-btn").addEventListener("click", saveScore);

document.getElementById("username").addEventListener("input", (event) => {
  username = event.target.value;
});

// Initialize quiz
showQuestion();
startTimer();




