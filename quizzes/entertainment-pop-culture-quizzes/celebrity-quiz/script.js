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




