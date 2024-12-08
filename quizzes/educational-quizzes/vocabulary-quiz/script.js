// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1/OhxQrsY4+6AkX7Rg0B+n7hVZZe8nTqqVbHxfLtCBxwcGT/2ujYUBvpGFwtXwjV4cDiw6GcAWLLa4DzqVXcDELyBCNZd3jA6t/0fMbT1JG4mIqGfra99HCo6d+gYbdvg7Yc0G+w1Zn/gAuGCUPJ/SNjv0eLIvP1mRhvmirye1vBMf3IUAT0UV8Z44v89+RyzRRCagUJloll5uD+Vmd5SLm7lEs2LbXC+vABpylZ0g1uxCndxV4/ODLm/BNMfzOqvV9cTWOttgVgzNeAlWH1cHypi8Pj5mbIefPv7r160AqLwDwgDtVVqRDpp1JaUIbMEQuXW3LqBXAT1PBaq+/RwykSHdPxC+oGzI6npJAhYxMAt7i36u4JD15QEISATUy8LKrMSAJSzozg0n6wMVa6nzbSJqiH3/6jTfeuhXQcE/vsnRg8ypahQ6V/jdTvThQjhhlCVsaNYxw4RCNPr7pLuLlspryDTc8rONNrK4DPy9RjFxX9jrXsL1NWjpfjv3DL9ZS7tmMS1ZYX0Evmxun127ghhky4mknASLrvy4zJBSy3J7bdHu8+NvSQfMmw9AeGa5CBzYrM2URSdtl8+5jJnVjwlXTrUrh4qiNT7lEuyZfadizSO4F3lx/VFU8u4ugrwxfwmPJs0dwTRn7gh2sItK+aD2zJM/xYbPk0v3LFR+PKXF1CsXLh6XHf2xXDHak5+hUAxn9VcmY/3XqSBHzfFacuG0XBeAFKcT94XFXwuJeLHEPupQlov5u//dMvmeaurcdwlx5izVorRqGqWxZEqy+ah3J3xpZO/nYr+XxENelySnx6JhhjAILV7lmD+xHwNHSFb6/RIP/Ya6ChNvcNmFtsAVcuxMcoIQwm0FENJnsg7wD5b00ejeCkuAeFXohHypd/93fBOEJXsaCWlWcZgPRpxHg0WUo4KrNiNN7aVFmb+HoFxU0VaVTBDEjd7s1PQWx1KFaLYwbYuNH7ncvOFIBaIkHuv3v3VYaQIaRVVVs75vDU+mKEsS+kXoBUowKPtxmYw3l2kBmIK9yPiplJrvOiDAJrHP5h/zDx4m+wPDwV+fO0kLb1zVHSP2py2zUFFNZihMK9QlFD1uP45tldiyMy2F+socj6/jjFWXial0RfdKaDu/deghyyqClkiKE2bCSI07Oj6CI9rfLdr3B6o/4Ho6bMir+D+Dx/IL4u5Coc2xYk+JWNlvUjQcBRy53pMgm6LhCQ+3bu73rO/HKIMwfZwb4vjJ8oAh5/lu+XwkNPvFlAtw3CN19yL0tQpVmnkEPzdq+xtArSWqfKu9S3fuLbp8UdBLdW2jMHbgKoC20qP2NhajN78B/vIzbsUjEdL12h114xZf2WVdsYf5ME78h+nYX9MdD/6hIrF6d8ufUcijl0JyLi5aCkQ9ykR9uKW21gjk3f7wyyHSwsnQotT5c4X7ffFU4YUi961KPZ//PYHvKB/j7vNtnbP5ImXC5MSEyHFz/xDgFktdCo6mGkOAGukoLUGBp1e1tzTAVCc+mK31+UhgrVUrYyectdPXELGf0AIn/EIZBuoKhYS2KwC0nVRXExyeQjUXv4rG54nGopbEDp60j1iLC";

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




