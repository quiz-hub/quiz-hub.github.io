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

// Save score only if username is provided
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
