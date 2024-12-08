// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19agnI2kpWziv5okclsN9gotg5WGRrAZXZmKrO2kKxNfhK/bbMrlLevXwmIXuNzagFdMyEnqqBKHMSa/a8PrO9xt/iuqru2p7EtUbIuf5Z1WrYfwzpFTWBbvzLcsfyh5poGRAY5DtRvZfPdVFZBlaEQ2I5LPaXLPB7CexeIfKjQXYdfpa6G6LizwQ+z4cTI+Mul4LetvWVF0ihUppsRUrGWivtLPNHsOcR0Aw7m9vG8kzGJF0uZZ5k9d+YzRocPkNE+ivlECne4Dr3lcxqXJ42KaF2fYdXcayHmArmgseAqm2scC0iUv1OA6s+dyWbuhZVoe6sRRJN44+ZJBNgEOMiBZZJp7FiT/rZ0OFdVf2LtpR4vVYCRlsq5UDC9FVUvWOpedKHCDjuSN0AJN7+i8Fr0e2wIr3t6mwo80vEhikcvPkQDXpNsjwg0YtqlGNXeqFZ1xM0i+qyZ1aU5EmqCQJvtK2YuLLjvBo+sfsTx0KZiAJHlkLtlJ0KvlUWRYJqOjlV0SkR4mL5GP/sALBKye0lW6OyPbmLhfyClfJN+3NNTgNHKq/RByQpWDjUym4JrYyLm0sKQt+AXhTY5tkwpT2hiEc8mYC3MERFRbopQQFk/P7Sejr6pYKG9om/P2dk6PtQAjr6KFfpTgBWEfAFExWNoR8QHQJenu1gQOBMVaryy1vcPKqHwE9Vpk0KdI+grIbrUdG97NU/WvE4b3SUKUzgjEuhigzBERNLOeX1K/nanaMybf1ynWkXeffptVanC8u6/jcsMmPi/T5D9QG4wPm0BtObS6fMI8fOLcvS1Nun7YFTQEoWfzl10eBEtpHOEZPp5AVbwGcpG6SMLrAayw6PlQFOJhG2cq5yI/uuAOo0vm/CK1sBqweaQQzt66L9hFat72W4IjIdus4IA5G1AYsxgFh+Jljus5bT1URc7/ffkYd4QLg4/J3QCjXMUp3jM0m/+Nfqq5ZuX4bpkat/OOFldyX8AECWRz7yo1/+yC+QGPg6Q/21wTCjywnB3OHCtgDDY7/meNlikCCjrJMR2O5XHNO5QKPlIcOI+FuL7wWnG4gMgqdVyH8iphBc28ssFFkpcig1iL7EBe4P7Lrds5Kc9aasCyZI9evm7Ye821yIijKnrwQB4idwsyFFpPMAohcsHTk6EjtM2q5xy7e1j56umaWlToXf2NLDEumQmCWBFlIiVuQumrBTWylscuvS3DCZDAINjVR1ISm1tvO0mmo19X0zxYU8QJA2ZTeUZjojafqX5qtGXRUTwrwJKrULdkASXSKfM3HgFYRIs6TAgrkk1rm5uiOsQzBLBj7wpdvdqqajvNqppABrHADVGAkemsoj9SqQBQBcT9Dzw3cdEeRLSi3DobiL+GTHYNfYpqAkupPDbD0EK7YjGUqdrRHHxk7QVwSQwOnuiUmnD5GGxZ1CEkm7xZkc8kVGYl7D7+yUSvWeN/Bn23gb45snvVZaFYwYg/+a3JE9aDUU6t2BRPWdgb6mAmTYEL080F1yg8K4Y0TVecjtHhpGrUyi9ePQCojgDuKA4BRqF4+fl0Mhf0/Fjyf3kY9iwl3C/j8mr/6v6Cks0OtvBPjLbrdPazxmA8uVGmLpPcnx5QVJSaj7G4fhHypG5f57Ag+uRGQUgnk6OyEpJ8cwmRAemBx9DVdIzdqT0YQKEIvQ+JaiuqirCQ7CtpWf+fwDYAXOT626WkdtMbi3vPz8X76nuk0mx91/zAImqAVEIjl7Eta4KCXtcrgoNhEZh9mdu6Pjbzoe62yovH1mBZ79VFLWx";

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




