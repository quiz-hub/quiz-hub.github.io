// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1+4G7SBYQbo9cA270s9PD820qCBqJ892c27YLfSvI76HlO0t75eafqPm8W1ufnTSGWqx44GD3J87tWL2Xzat1s58ddWnKhvwU+ty2VZqLwqIiZTLY3pM0i0FA6spnPAyBarI6kUojbK1wUpC49t3ksrxpeOpxXmSYmdP7nc7vaqHUF6Z7ex7d9cA1YNQElt0HKimkrA97OC0jyLdZIrYtastgZpKJZEZE02/61uaQTdY+lmMVimskXUIEmG0XtdQ0wlJGANzhiUqzJF1GsDvowKxEznW9oKK34U7wC8x4FLX0/MXLtzf1jjee4SnRzDsAjXU832sHItsZt3w9vNVY5i/pFr5bDSnpwbk3YNU4ecNZJAPe+JWuj6OmdtqwEDk0rD7w6oo0lsOpetvpvpf11AoDtAPEtyFHTPTJI52tJssZhOmOGDrbzr4/B0IgZRb3EHydIyUNU8eousXGwBepc0MOddDuKPDXkOHvCofopeaVp/6Mcj4w2ZbgXik+HUEkm7Oe+JeQIccP6pqmSBZOuCN8ELFXZRRIbBLGWX0jiz7n0hdTjBEBztQlfeRGt7mwkz4y5ZM27Cco31GYtiFiBsRbA2465xdcLdZOWnEn9cYcfpU9+3KFzIZNSG4Y9lRNAOBgwi2G36++p+3WCfayBiBYmAf0Ut5dKyxTdZpWCyjLLeifuBYgthLfXNCgMkxVEn5RKZtlBzo0oVrWmxY87fowrD+WDZtgBmRzGSvzSrn9p6pwTly/6Jwv4tYk9ITM19DgL827mh+auh0ZqrcOxtXs5Vp2Ksgk50qmNJFT69c4Rk03VMPmn9Q2u29WE825AjagIKHcEgbgsxJm+hKvnU+33h1Q6FlCgV3TfA4qA+y5FUOGq4eqjpw73venm4JSDwtkO/olUpXfw5BDdZpa7IIyK/hdVWru4m2ydGEfAofM6Pnbb3D58xKxAAPgf+DbwzIBN36Uma0SfJrQrUaKGjZzKyXQuurC98wQnkIA5WyFsFhLyrLg3PbG1dPWRJwVUF8pyv4X436NhFicPIv1NjnWF+6EJ4hNhjTW8fvnIvygAHrpVCTRUX31W5rTQ9HMCeMTdHrqhH3GEVD3uAkescPgf9hPAurlhxon/3SLTCwJsQHfp5/AaJ6rUd+PM8opQuWyA2itFG6KxTPnA2TWr01A+54ayrU1/NtmPUSM9Ks4yzNIRGmn/xxj7smnSHrkb+BpoS4+QUD7+ESUBd9XMred/Zb2d6Wp/qqTPwnmFzIvSypYAoJwNMpk8iUP0/91Ibs65jf3uNSH5wbtFvc7vvIbbevB+KxhRJ5uI1F9TJxzjp4OtmUD5OP9ZEuTPFgCvyatj74eMyUFHPd6sqEBdPdnOHxBE3lAnyJLFEG0wQB7jJTWBFctdC6ZGLKS3YkGOm7xSRbwPhRl3lXfPurDY+OLjhSgmaBkDoMezkXzuaz3A00Bu7KI4FjRk94/xnRIp+FK7VTCO6VapDBKfVDMJuKi6ASo5RuibUegb8Oy1StyXminlA/BKT8lnsEik7iAypZ8b0pU0QYzf45u/Sp7NtI2Tvt86el4DVjgohmu8nJg37NZuH3Lx7doHYFtMmIaKrA3PQCL4wjEaF59Cfr8HalOuKTP4J+EUFmuck1/OoxyOPs/Yn0EXva+40I6b5OufjaJB/ZUtlhq68uWcWf6rC0gJKMqHjACa/am5LUxaEGl9jkCvwgg0eSyVH5L2NXdoT3tu4jlelGK2LDs6eDokmBh/FPOYsh49/4VNLEPBn+jpv8FS34GyM";

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




