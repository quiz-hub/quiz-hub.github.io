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




