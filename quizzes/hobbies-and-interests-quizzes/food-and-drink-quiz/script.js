// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19kUYo+mYq3k3skJoQnQaF417g1rFNi9Rj9vLro1zwEJEG1Jy6wEYb3G4QwUaM3EFbVLobV5KcsAmeKEkkHxDI5ArkxsRyIswBFYN2EPrcjeon83xzp58nL5uibAAMYzNYj/x8VrK/kTXWgc0p8oENnMS0LW7loPYuJRbX2eKWHw03heEzReBM+mCkdX1euHhmf+oKr4OxRmbNWDSk2+QQx56n1Tc7WpFqCKt9+4CXFRR4E6wuyUOHjfxmM/8CQL348F/ScOObjAUrmWGiZLXl27PvSMuzPRFo/PR1TVQmTlAd3lZZY3GpfDT2uNm76fK7xS/JuCCeLBRb6yKySvM2a5wd4ZaE2ANWtxRUn0+wViIxD8PE7+aVYTmE5YDdkR9wIcYv7l1xkdBO+nW5C8HF5SRtUz9sPkOP5eSeF4Ex8PeVxNgqlhP5oWnP2GEMZvKhf/zjh/GecBU9+c0KYulJQogMamrMG+u5BK0epwktUq5WouECeLMZNFl1qHp/ZZ8nGL4j8YDhER5S1pHEPwh2+QPNFVNQ1I9c+7z0FpT51O7UEjl/tbhWnLezaNl4Y57UguemdrKBMxsHGlupjd8M3zGBIFeITvIp4FuLZD6KDOH9+3zjNyCgM5dwPyABIgUIA78UqiYwNYP3OqinOHoH4ovVsFL4YCfoutIaxGvBCHRdFQJENteN8Ps26LJFtYcRnUTwWYc30xDwgaMmxYhlZkz+0gNfcco1NxoaYfqe/Uwe+JrA4ELGeVS934rF6J7nKSmKqYmqtnMp+YDpVbLkTSzCJsz9HtcNXNRr4wVK3Eqa54G75BnzCmv/7Q214slR2T5m0l5BIv6WcdBLD6cdqkebHuhX6uXI0DU0GNaxxQc10/n4RYoMR/ZQvYqXn9gUePxRYZQhYtwgOwnsSB6Ut/UIoi9PMyvDwG84igaMMfq06VXl/M2v9H1P/3GbIc0PRqsHmG9KI4OTHUJZUJW7x8Yu8VhiTo+Y5asxyvgB2s0yZ/BbBl1BJ9ZPWGWTtbZQsNwS6fZFX1Yr/D4PzICm6M47Z5+UwYsq29QBhlYDjsQekaGOKg8yjxiKYx5f75O+9KtA9raoE2mS3vwvrlnTo1p4dc2qP61x8mSb+sGD6p5Y+SPOLJic2ND3RQVGMc6oek0bdu7oY3jSEMfG58S3CcBsiX1PIlsaj+htFP8H7pHIbxZ74fUIOtl8+xcvMmgFVAJ0qksv9AICW+1Su/nkuu3im2PI/vW4hApCxAsdD8jE9ZgrGn8DqtIrT+N/ImjtI/HTd2t8LCDb5kbeLg/r7hBdsKzn+lSt9Hf59BzbDrNnZq+6kbD02PBbTRBdH2Bv3oiEzDEb0O2uhVZaElkjEK6qLhcL9WJgzePFzgQJjeJuNC7XWWJI5GZv0YbQMmOSdP3Y9nMLcOB+ZZFB2pmW905o6y0DBkFeCLfBS/4GR5pKmDoCROT+Pa3jT5DTx/bobgo6d+lQOj4iHEEw5Y3uzPPoJfBw2W636ttejROX7KfTL9/CPgpPacveHlWt9U7XsT69rUhhGDdKYYLyhmQXxXekTQb5mQIk1QliHqBTFuoWHA2qCvzLr1QiAFJdMjMRVKbrDjg/DTIrhY9P0xc4QypB7gi3kubGTypi2iDo4b53yFPhBBHpd5CglpQsvn6Md9xM8g88XyOh7CAz5Hiv5LOyGmBDhMbiwlwS6iaN6bPB0pBSFDLJCB8c5PJKEqG+/6wmSfU/lyQ==";

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




