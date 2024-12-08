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




