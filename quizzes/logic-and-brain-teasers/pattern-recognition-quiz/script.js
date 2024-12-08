// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1+SsnQ5t4PsNer8pbUckAdHvxrHC+bhDoSs2Z6NZsUD2lr0tKFXlafqQKCUGC6dEWNE83V2Wib5HBu4vtP3yIbS6zKYevMbM3xuE379s9q9AOZkijK9mnlExqGHA0S9vuZIiZHAFNHH4qWLR/cbckrj2We2JUewYJo1iGrMtfHrD8w8FyB25UuXpT5W1so+gaxP+kqKVsr1sCmYntOdMWYihw6faTviN0RhRC9bLYlsvb6aNB21ckPmjX+WhIT5kzwbWCaZ6hXwkKZctqts3oKZSTlU6PTCgxJOuuHugeP9+rw2s+Sw7GSSE9HiH/O0xIcQNWYao/qrz7hurnrCvjnz8O9kRhww9ZoLh+FA7aiuAMlbQJyUCHFdZyjZUizC5jnGcxVwtz90BnRFCLy2N0+JCKjY8EVaK/BONu4BOCZIvPjUc7KAsO4aWA8PoZGUXV7MoziaKBzq4xRMMhxe9YnK7FU6a1BulN0/4GQVlDTWYnKjtnqWGKeRTzqVqtYAnpiaaJWhFL5AV23RAEgnhNzK5R6qjXbXAq1eB2IIzyD0jLWysT+HDXd5sGuWGvQu11YjVTfE/mzS5lC0tTGMc2LNFQe68PbqPAOeZXWzLiTQlMVZINNNYZX4UMRNGEs5onggEs+hbFY04tBy95SLCq67KjbJghOSXgunBSE+uvlw1IWswsVOoZE1/kqW1CLQ9fz/V/z8bwezzifC1/wa9o+EaGin0cQiJNzQGFzMNlflak8FDmtle4Z1xjWs1AOF9SO4WvsqvjJJTA9BScFmfNc6TyFtwKMX0vV1+43DSNhmZC7tevhBhyrh0uT7TS4j2RptApsjqrOfvebkOKn8K6v02cS3MWrjuD/ErXU6QIGYjoFzmzLDZMPRHh7S3MVX2srCcxLPdC657zByWbVJdPexbqgNJjwEc4PPu5tqi8d+Y0/rtJS2U2ItsRv6exYAIy/vMjltalJ2lBtdOAKKHsh5cbTMFKWx/LygeXtTkDLZYXB3u7SLZjCEmrFJBGF9/h6vdR77uF0eIHdz7EkqnHtoiA8R/gNTcZfMdXvVCMvOXvafmpTmcKF/3ccODJ4DR1ZqNip2IAeT1VIvYzLv16DHe+7DovvNOdi3etMKA1X/0+QW8AfZLSS/knrm1UvqpiL6Jrb0qz3aKc6z/8lCaPwSuEUXi58BPNYpiffqYUVh9J9csO6Qnkwh84ieiCYnCTdfBAV8QB1XNT8Xh+NVO7anBKm1rLHxS57qLg/l2n/H6W5ifb+PlpQjLfGgQCwoVnDQVJbBiggwoXluAxLg7fVcXZKE0KXRZCWBrf4MMn5rxKZRCpdEOL/OZy/xO/XMpGxBJXdO2B0Mh/vzsdIpBKmhkomMGj7bxNNijPEg1nKrI6jEF3yHvOuJ4oDn81e+LLmIOL7Vy7L9aVb4n7qnfZay5ukA2Q+q+b2HPDrm5sY465aBeNlP4+qzuOAPfTtCdruqzNmk47FZWvUPzcuv1rvl5rPZm93kVRKhVNaA/ivZynqWpFZD3dJtEp+kRdNLck5CIS7SYQ8lNw==";

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




