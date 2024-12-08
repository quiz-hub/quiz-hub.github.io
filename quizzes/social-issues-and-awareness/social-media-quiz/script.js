// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19MG05dt824BudYD30IbXVNVl20NWPg75z8p1MB8JGHBr/p0SQ0ak/nLKn9rCElZueqwoIO4jHfP+DIVVAGAA4rvy5Eu9tKiYVO+IJ7B1Ve4H2yP1rRJIIPY5rEJyEh4ld2dr+C5tePFaBv2mx3QE2PnRCjAL0iU3vwUyQPh4afLddiuiKoA2FkPgf2qP6Ix3DxzHY/zLCytQXPzR92FdETt6qPnduRNkrwPWIHeFSoD6LuINFH3EjpyJBkhN4NvASEJOZsFEqWS3xffUDoH+01/wHm7l3xjZE6JPEjlsNcqN1PW3ZmrvKdo4EkcpGUJdZr/twQjUWtZvDzwuea3G4x6SbM/+SnmfQRNVdmbWOrtyzyX8fITIP+KDMMus8ADIIyzVZcj/WiUuhq5ZbRK21oC+iLtCc7/rV4TKrH4OjjRl7oqMmVKJQGMOau1wE2WDw7Ekq8IhrZphTV7EsK4Nsha9Dnx9mMxO0HuU9EYLSHmxBXkzGfZC59aTgNVy4+GrN6VdgKkLi9pl29YxyYIjLjlF4JLifqcHwffGMrtF5SDv92UpkqdqWyHdAyVqRctITLBtRx7p23UiukjLXX5VyhCKsJ3OGnOmTrgiDbxuXqO+I+7qnmdEOCbCNcv9Z/BCUWH/WMd33l8p/c7xNE5gB2U0GrD7fSxzU6XfcDuvaFlUM/9YRgVraPAWcZTApXBDpAR3CN7icKxPVqBKQAFgDqh4buymTStV0R2gZteY3VtTuEINTQPYCVnwUVokhuowf+uRMBWpPBjdCKoBcpJWlrfMmwaWJHFa8vo64VV3syI1nMu65bnkjOJ0+muKxapdZDPJqJ50lmPij5uY04gC/KlqpI+cT3Jv3zl/i6k600dCa5Sy3Paf0l9EgvqNrr8HNkVd7I3kuJiviMaMaqHEE+lrHoEuzXtgWcr4JvBbZHadB1iy79rCisWHFAH7YNcicSZKirmTizS98gi7KVqkTeM+5b/kl3cMhNjERGeIrkgzR4EpIM9zcXAtGiS2PTGOGoZfKHZSLIyHaN6wDp/TdGoEMF8nZmWwXzBff9qQAoxLZqfOL1eWRaU3Q59x4EfQv2cuXM1j06Pc1Flyv0eKH4vS2MLFYD5flV0+w8fX0HzgIAuBk2/cfXKj9vTqUOp3c6/tJDp49HKS4QvLOQvr2wnt4f/Qv/8nH8luWEb13ItNv5QylTMmcCPYgwAOf4AtGhGr0PHd8Pl+8F8s0u/iy2emNXJAJagQaus8juP2e2FtyC2kSjcc9vYYy49j5uh925rOyv8tMJ+NKleIZnKgU+x/QAIi+W3RSEc4LELNHov4TMiWnXwq6VW1AZ5JnnIoKa+uqfqPjFNz2e7RSB9MR88gQGOQMcgLATi4h8jvgdch/LSW3xqj8tfk/TRSDEjvC/6DETFX0hseS7ykwu1r85fnVqBflu0d7vbNITB/LmqOd2O3k74+Ttle77zON0Fi1/0jNNqwyvICt4BWaQLkFfpt5IMJf4bm72LMQmtkJM57fN8pbtOp89H3J02ZHzIbL1VxUEGK7XxLoPpZyYka3SB6Sm9Qv8t8Yx8ILuSGi0/ZfgXk9DlTHCDUfCZqGvsL+CgWAqKTLCrHrJld2IzxvivZxN5IeO5YK9kU5uBbot6nkjJwAHStf2VMGB/DQVx70yjzxd+uDNOndM5XcxFYLWMq2KBN+Uaqp11MNZBSg+yGeBTMThsDeSKEzD2mDoxuWzhriXtGrZHh5omRuic3TWHTdF0ZPB2TsUfLz71EzorxP7aapkxfadtkAhAq5vCVZeW+s8rqXUJXwwrL2+FC4/NExMhKBubs3gE9WICkfJ8LquB31yoYvkmSH351D1wIk1yhgFevqAoIg4jRzlTU5Iq+zhc13of0gSv48UVSB8AhL4pB3AAKmc7MaowetM0spBIdly+5kUtORCaqv/x22fhcg4aRVRYs/5sLbO0KhO9RSMmZ8Xyej0";

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




