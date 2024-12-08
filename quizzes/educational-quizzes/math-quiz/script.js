// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19UIZq3kSqmxlKd1TLEI1QifefR/CUvchkIM0RP0FRyIVJeCb7gmwXMEVEuh4goEdHh1QAGlEmn3Nh9WRq8T7/q5o1Kf8f9ZdBhFit/Ign/RTTX0wLBOfDKyBNyN45KK33kFsG6SqnuuGgXeLFgnWcxTeLSTBpfXFrAAeUIoUzXkp387lFHZtH8OtRG67XHsArp0/g/sHaFDa8B2JJdQ5M81MiI8fab7b2+XHbzmpLGp8d4zlSGyEneRxJ6fhdL8LJ5vZISQ65paa1DXGgm+0f6TyJc5zkBfW41XiWD0neBCbyQXkXlFt4cxRtnuUsLB/Grzpv1xRObG5ljJ90JDN2XU/Ql1Hh8nOfovHiGIlc1Ecg7WRO7nBDNqjQXM6rs8UfsKPuUD7EJB7mRqGIIcLx74Mns3QKWpdAmL7MU6Anz3QUaXh4EvOm1AEF/oI/AfSdApEypp+tMM5xEMfHaGe6PdL2uVksxzkHCLghB5QUOoNuE6tRxFd7Hlq0jsSDf1mIWF2ELJTuLR2NkH4SceS0EJGhv95UhUfY5kcLtjf33vcnZVyH2LV8Adjf3T9tTw4yUGm5rBnZvYHbAJzbUXy+ju8LrMFh3gVYtejybq29a9LD3GJ+al3c1KGdmg99sdZeLhI3CugGBOsdXYJGDnnvxNUVjm8uLzEy6Sl5fb9srLm/2FkoiFBQKD65kcGWi3KfH5Ibq7ARjVU3dshoXEHCP6aqyn6t1sw/KJJvecwU/w/ZSclEeZ0/0z9SA+cMerrkd0L3Tv4xGcQ7iKm3hilIE6kN8v4pzAvoD1zUZi5ImLVk3A4IKtljhkmEv6YZMnycM6e6piAShoKJ+YfeV4A8N2Pf20fpAAVKnw1i+Qoav9DjGtjQXOJBUw9AtgP32s0lgcgjNtN85vtxb/wezKMCPD/Qz+tIkpVTcIAgAiB9i3Dy7IDsfAXeIThmQeD8Kj9lA0Y9fWwsxGK+HECMYIXHg6UNF+yeNO2DPQ2GpwG+T9CVVZVsB1fPuI11vkzrDU2iekbHJMn2SlmnlFSdWzVLY5tqz6KoPMIpV0c9966UDSqRf+qjdoMUddP7ZaEKZVs4kzUOgCH2JDEnqGwkPe2phMZWCQq4IfIF3os3waJdx8qizEOods14Qqn30EXoZnRETXJBpCfkDZeZdPRuugZe2pvQpGHPtBLn3Jyl3lZ3YeFglSo5mixX/VC1PGjogkUKxTTzMCx/bBgmpr40VKDnU7oe/fXNh88zuhEIK0qnbJ2Cl82l7ibbxNlYonCLR6zOOgYc3WSqrpBRE9pjMje2jRVsnA1GIqQSP+NIMkCWB2LMrZm2CSgMooFvJnu7+QYPTCuD0zvU4NMM5rR5Dzbs6P1A6DIRSNC22DMNdDlHayoi5A6V+LANfLGKnAb80USi3G3Wu6bkuiUdcEhiBMsoSx/+V7EwaCoubretDV/7GKJj4/U3JHxLVQGGuyztIXHdd8HKHfN0R+XDRdIzNhu2iGU6h3VAoJ68=";

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




