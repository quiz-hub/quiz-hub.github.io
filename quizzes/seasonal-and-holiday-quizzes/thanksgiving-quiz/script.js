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




