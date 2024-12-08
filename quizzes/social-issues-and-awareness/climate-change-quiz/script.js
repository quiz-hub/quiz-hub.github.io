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




