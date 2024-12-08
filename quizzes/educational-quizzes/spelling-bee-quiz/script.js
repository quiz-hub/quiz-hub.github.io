// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19qAJelNUsu9c10Ql2ZrkgKhcS//V5LAGEyx6PXA6vQqnpRba5fRBYstt9Qx8vI/a6Ynwor5vziz0xfngURvr0OXZ23c6fSL0uf36NyleRau3Q4karlJTgb7gLa1K18t3eAqlupXAHhR0GpIkTuhwTfu4OK328cLrTjRceRL2qHLVqRDRrVRvflGRf88Q5IkfcAv9bZKmfz6KTLrsD5AAOYYjPuTg/uhMdGbhadsjBTbnKi+6hYw2/XIQftpIe1BVTdcSLYdd6EetPzbSl/UTwaVHN/ASWEDaercdXuCYkQAFkm4U2vjAgYeiVumVqeeWZCgJfmZcZOS5vxxG22m3s+Pqxy13MUpx66VueNRG36t7sP9BBWbpYayPK3h8wfhe9X1mFs63a7a3OlQMdibSZLLv698xYti4S5mo6QHLGRakKHRId6fikFRaqBrBLtBlyum/LEJypA9taLKtcY4b+xXHOPlQWfOf7F4tCPmerfCF2jmsxfv5OAHrsX7pVG+F2NH5DPZ4pe9d65PSJrWjXoN8dBK6CV2QfjUlXX2/BPKfmElqeII9QrCgMLE7r6tZrpE9M2D/dKrB5TATfqVacrPjrOzATnvCtdmDKq7NMPONigY/UOxbwa3UCgMDryGNIej8NgH0R6neJzi+RcPD+zZSaDLOCh4y3EoyjSGD2Kr/7+NAfPth+iYNdFsFjFeioqHb3Wxp2jam4BdC8BUBZllp5X5/BBNUU4OHFRGReaZzqvr/Hm2vlLip2tY8FzsPsMXaL2JnMRke9mtB2osvbgey5ls8Yo7Wz2ZVCWl3BjCQOONhP3zz7xnYxlqarpIncP3Zk+YxD0fnhVKV7iIkSoQcf9cQxsPc26b1vqCENoucjnsUDNYw3xNoLvHMP5IlFc6YqV14FaRvA/uBS9HRILkNFCMhQ1HKanEMuz1LCWj5M/Nz9Bu2sdX1sDuCQefUNIU5H2k+di8FE8p5P+Xj7UaJ5Mk95VnnSB2ww3ZxdxihqVfRAYwFtBhU1qJnNzJyj+7Szib7Ijtbavm9oL0PU1drG+vxf9H8FLJ0dix6qPelSQ+ezUF1+TlUDyVDqcm8g1FgWxNJphpNnRbNXuZWJXP6vzHOnQ7hGx9WlhLiBCH5BcrVQJC0vIvQ6s44Wu77xZSbHqAcWghwlPKBE0HC8QRLgyGV/3Ti2e6h5+N2s/kUi40SMGHHpeWGfQczx+y0+iz89aSo9IQCvV63KcT8ci1LVIqglnVoH+2BS6bOA8inS3flmF6JARGHGnAHl9StaxW9imR8IARoG/41RXHvSwT31E4sr4i2fJfaM8ug+54PE0kkDhVqeFFC+9k7Eaae3h9fSQugd15tBSK9A/13FSlDo3YipOxeY1ckEHrnuOTfsRmuknAmljSIRJ8FRIx0I1QeCYXRClM+diulawfptcUlFPKdOfFCo5lxly0VCsTUSq/5MHpniwsWimidnbxc4bbhhnq9fN1V1vabBdA256YOc0I+xSw2cgVrXBsnfRd50CwRMPsDBn9ODNPzFbCgEhP4M6QjTCSOoLOFq3lHIsQPyICTR3WU6laELjaYdEasXMdvRiBYtGsXSU8ZG0BhvNj6XEtRGiC27RlrrcSlmM/2zo5wAHaZprRD5v+ddANA6RqYts2trhV31yoQb10LPgo/OAg2mTJkSyeBq3/wy70VZIpo9j4A5GdTb4VfInhWeKQQ/z6PCP3248uhY4sCZEUznmhpeVXpvslIDSVBESrycCC6UWTC2XyJNEKmssoOORqKlELPzbout4gSs61Eo0RGGrOJ2YI4WbQ0myWhcUzRNjjfCodH1LFne+Y0T4FxJ6Z0P1E/b2Jx5Us8OLILpT89ojV8T1sHYLoxN5SYAeLFaZTSS82F0ZtTbVYnsSW0Wlx16lG/DGfxywkTRhvCbput7iqK2/xuj6TE2zBk+1d4gxqpVPJEAe2R/IFeUv0VXTP6Hy1Yer2RIxIUSB48qSoLyMXmL6xG6v8qtdBCSduxEQaihd83tsSl2ZDPw1IgSBVZK55y85kn7JoxQ8oEJs+m6o3khOZYA8c+lzzZ6F9sINoYxn+7YCyICgozZ42ncRHBJqiozmaghFMtizALvmG917fYnkXc1c8g78H3klFIaW9TBxVrE=";

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




