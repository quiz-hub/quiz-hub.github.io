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




