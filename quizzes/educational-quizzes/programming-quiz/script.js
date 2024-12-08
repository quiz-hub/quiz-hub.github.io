// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "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";

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




