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




