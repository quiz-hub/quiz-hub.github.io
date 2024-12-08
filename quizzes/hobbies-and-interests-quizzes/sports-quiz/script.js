// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1/Aoux9Vm8fiefprGWE1Heo7xpH4l6Nc1DFZTn7UiZUoa7G/ao50f0nvIrGPwapgHli/QTZARtjHIbK6FECib2E4N66ibKalNgyy7t6rJHh6pzBfCajKxFqFXfmOgE9YfEAq3rhpZVh7isOWNkrbqdKFzRcQJHMJ3Ifu9XbhPkTsxUFUzA35p/EYPtcIwkZlp/btLt3YTnvCgqiWCBwSIzPN0WiijPm3L1sL685LwV7c4XfEV+h4494U/Z6inmnTVhUY1/6hApyRZFELXlAU6e39clp/H8KJSyIIHQ/tNSXqlPtMbxG8titqo9cq2Otls8C0xTinRh51oVAlDLMa8EIXz/aqH/rino5E2vhDneb26sc7FcewBHsRwLqmF663S4IcizJWFsflOG2d/udBv+0D3KlPnxnoJ6dr4u3Ho+xctVRl7z8Al3Uw+N4yyal8Tm6h227fdY+NOo4rUxgxl0X6JvC+LdH0G0TY6fkV947uIRIZFs6MNJnXDlfrjPomWuHxczpt8WZA3TNe9bhH+SsSzPxKc6XMH1ulNsbXIRVmquH2AoNiut7RJc2csbX2TPNwfHu4IKaBNgD+YYC0xSIrtKqzJQexSkt2TpgITajBqGzwIRGBMoOpyN5Z5wIJfj+dubie7jovAVaAdKcryEH19Of3+AisySTc1FTzgsGJDovQxI9vHg/9p68isBJZ3ohUmoWE1McOHo4Zva5C3Yl43wQolzqOggvfpl0xQk3V4MsbNZm4u6iTbhrZ0rJXyhLxVvcLww/+lwRzsMdwJO8awKqRfitY6XGcHY4ClQSHnJdad34JQgwHCNAGwWAQtIALizGM0mKTXFUy2NpJP88dTr9n1Y9uy+ofwsuJRMkTIb8SlyK1FKs78broqhWc/Ol0/wsLAcOFOa+ZMlqzUJFC2bZL8zR/CQ58sdvSLhs+PALuPdqZ1ilcedtY/YPIQpYk4JVf9/Opbh64iUruzlRZLvFMMHE/Wt3oSZeK09GvUq9jnfwyQreYXvrJbkAlf1TQa8GH+iyYpjD8yfQEZRcp6JTxtmD26CenX/Y7yhCElpaiKyIk7u6iFLoOBp9ghsDH9PRrnn4YEp9p5yKu1yQjMCVbVy3mEsI5ieYOFigEZFl4/cCmkfpWGdRODJcjZUbJ2mzP0OD7VwvtzbYqgi/aOiydcyhtyduJrRvs2MrdK2fnFDFtW+71Pb3Ta0DwC1iSd/4ay0WuB1dcH4mVt3BATVP5l4CoDjNJLpU/cJJdvpIIvTg3WZAi0EzLRmgBAkUDFkRRoizKQ0039l4gyi0ztNIhB/Gno7QZScCKIxQV4bzDUBPqfBhljIfk/XOZNI7CBy59ESJcFIJ3AYnk4nYiN/fBTkABAcS5ag6+fnh20oV1SzgiN4eVucrXv63PkYdzvVbaI50TkDJ43b0/Wk7vFO+4Ap1II/5xvM/aQo1kHIkcMowIwylEPYA0uxuju4A1gCGU88h/tj2W9EIxZX0Awsq+XJuVnG/vBAxe9j1gK/t5QCMBJcaESE4IcE/GZrbloGFi6IP9X5bMRYUnMyxV8RuH58984PYDptoeLrzNxA/Kp5djMfNRFaGYZUOhFMPwG4CetwZE/fMfjf4LGA9iAvbeJaYO+zdQcQ2WQHknHtHcIIWLj+6lw2Yc6bIYAIrU7e7zkmYZyqOvoIsVc4Qmd23+XYpq4BOVmvc2J7M7CTBArjeTcb3lQNviw1rlA4UikwmFDRTAdiRVro2bq1TmLToUWW4dAsZH0TSzOXfd+462FmzIvwO8sillmrEm2kw2qIUqcHufg9eMmrlDTGKZRge3wE38phsJz65lYYwFnFvhUi2dkkTrCDRcvEzM1dRfZkW/GCwueWhxiE//VYrIiZxhZ8UvPxwUYqG9rjLNrtG2htAn3bF";

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




