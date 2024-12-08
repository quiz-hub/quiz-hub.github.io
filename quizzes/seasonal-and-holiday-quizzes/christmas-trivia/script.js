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




