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




