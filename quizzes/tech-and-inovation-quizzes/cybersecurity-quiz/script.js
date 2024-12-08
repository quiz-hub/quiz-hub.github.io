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




