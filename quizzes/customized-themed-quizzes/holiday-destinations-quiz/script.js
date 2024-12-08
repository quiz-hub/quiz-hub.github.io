// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19KYJocLb07OcsAQlFYmga6hpE2zCDjCHL74M/DVP+PlzeXXxrpqowsIAaSAwtpqkgFEHgRpBZVXW1sEG2yORsK1IrH3PqitoobrfPZ/xCJeBT0q1u6kxTjq6PTJOQ+PqCeuZZoLCctMURzPe86aOIlHLOTgUDlkRslJr1+c44jkzbyYc8Zh1IQxCh+5opFuER/gnYraZOnsQZ5VOAj4X52HqiERtJH+i/+qAugQBiX1NgRP0O+Ul/YvGW+GZKBWfIDo2Nh0eatl7q0sP9w09CZPhFv3WNt+Twh+YshAc0ibp3jYz+LPfRS2P8Y9S+OH3ULPuHXXaLhZhOknWNzPGG9WXljeEdOXdjR8h26nS4hJ+2amd4chvLPYVceJ8/t9Qb+TedhydX9AHs1Zs1jhHDqjB/8DoKoDjAakVNdZdGCfMsh/7+MUkd3/YZCeih8Dfv75a08jwsQZ4rizR72yf4kAFbnC0+0w4HbXSvGwaskFaz7hC6FbCLhEzM3Vdai0Fq6X8Yyms4O4ANdXW1cE7XLf7zA9FjRcu4zxKid9WHb81CXVnX8OgpqESQZvS5F4m/CFYGSAlOFf2JhTTW8oIk+vPE8fevxeGgrVxf4fsz7NIZwrasBzQWmkXb9iZCC/r2OlEqguep0IhTrmXFyohrX5msXfY+aY44ypKD9nK8HthQuBnWChVJfJqHnp9Nc2+ey4pjkwEbL9Ox+QVwWh1pjc+TgTHgEX5uxPDVfOqihtGnltvss+NcWM+xEP7Z9UbMsO1xzZ1vtCtXjaMC1IYjKsA3WMz+H+mRQ5gvT95OzumkfNwBEGP3P0whPQFbjouEaq1Tu7ADV6j5YSoJUaWjd9yjzYOIM4Fh4uyBNXby3JMvwvOltJFAImtsaVbN5mi3/jrVCYaMvZkWRPSyS+rTPwa+n4NdRCxB57Qwxgaiz2fVps7ahtTSwLfhV02FsUTjwvEhAm1OJsLI/KGz6zFHlXwu9UgSvnSSSbdCT3w1CwcnWdA/vOoR5fAwGhc5LNNnVhxnBd87JIV843LkiVj2ovn70cVE1OImy5ddsx7NGe0yPa1RUpeeGmAKf7VYqlzA6BvLqQBwfNC6evShfGx1MIGknG1gXcgUb7EdiGFEsOLx46omWXf85NJjukXhSNQT0+dzsV4uHWbax2wPG4ltFzvFKW5q3v6lK33l0ClK9+RzvDWg6aTaofVv73Woez+wrwddar2f44RdqQO54uYTVLc6daZOrWuRGOIcZdaSH9o6xB9z7oIHz2qQr/795CV07kaH5CfTe+MYMgjoQRjhhl/Nf41hqP91KDB3LrJBve81p3gJAa2UxUumBsqy2CPTtKUDCPIyRMFsbtBuoCkuY0XF4W/IvnkFXP+VkgkOyKd49JBXFsB++wl0XWW5Jklkoe41H6vfi/nENu2pheg0vsjeO6EVyp6mVwZDukJA6r6C9+tyoNqL5E4GHXIUigddmTV6XW4MD1zd6HEoJ+hO41XrG6vji++v3BAqdKGn4JkFsLmQraHSeKxBULkkw53Hknbp4EdUZDc0Pxt6JQm8P2CBzNnjcd+QJDVLKC9ZZMvLJ2B7fjXIAJazt3rTuK2PKV/rCWnl+gg3OpcZUm8sty4GchDfLK+WGmOQyjef4AnvVpGdjngrm12VpouoDQwngnmWRT465yW8CzBboR4EHoc2Arr8sxo8=";

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




