// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1+crDFsO4zJRViHwys3Z6ghlTGtERF+Tc1zI97oc0eJydsky1SSKTFqgm2cDW6GKOE/LmGvGeNK7/fFe19M1rhpzXb+kjy7CSlq2BPAilvRGREcCPAT4l8iI57Kju0LEe6minBQKNDxXrS+G9AkSBhVjfUAHMvEOlPSvJJqbGQyb75gA4ZoR34oXBSHD9o8izuMkX5cpoDVSPu28aGA2hlSjYUGsdivRWoi3ZSRU3/HqFA+uUGIaWAtNs9pNpe2Qb8na7AuitUdhOLkY1KQbhMHqOT9nW6R8yB1FjoweM4QlRq4HV6VQFZh16m80iy55ruDpF1M2UcsRHDD7z0QNMA/+ukWeOzJxqS9me2LiqB5uM6IKNISXvr2LApnn4jcIHjuOBQAHW9y7UBScLDEN7N52EBePacMWEtqRXsixsvA/S8M2E/agip07eh7tUrHyYO1E2+0MLWkBG3784acUd8gOHyWoaJw9FBxxoz9HGB34tPt6nW/mQ63WazuO7j/fk1CpAzlQmNFcXT+bXi7OJlM727n9NQmL07ZXv5XNorN2xQpfyISES5VsrHJj/VZ5LTcXOaySpUeokHpQTPRf3jmXXWpp6UuZIuJXrDO7RLgIPi3l3C68DxAnoNXiem/lMh5+PRuNx5sJWYekn4bl9GnQubclFudkKOsg9sLdQmYRNn13G7ECQmEkdtfuk+ww2KTTGAiE3pHe+2VYH9BxsgkJ1rwRUmJc3LghnmXk+l9fG9946u7KqHDd9zQkj8JKO/HnmdYfQ45sKyffXGwUKQBKtE9TVrmEsmJxCBkr3H90B+SdgLhqXvf4SCQCn6ltJ3zypW1GlQ2QbeujqDFF2w7UiLOQhq0NMlwXdsr2H85RU+F5kJqweTohcEuVF2+aZLewAoE9yVpjwm/PWEHBAL5oUWlCY1/jQCyZK3T22NG3YWiqYhWqgfU7xCJ2t3IoYhVyJIQp9c9OSU9i/cgPjF8YklNqvKA3XrqAgqAorAS3RLRkXs6L8t641idouRwR5RkBYG/1TdvPpiu4ao60DRKFz1x2I37pOw0zNtgXIJGhVFeouUWjWrWX4PWo93QG6Vrzff1bpBhmLZwAgOH0Wh9fEDaCxal40paNWPS+ffKuEGb0oRDfw5IzHjbS1p6oJHWsXMSchojs0c9m+uLPvscBiOn2C5JN3EDbjzqUxCr/c+0vtYC0VUwDxOPYp+koM/oiC1D0GVmDECFczwHpJRz2Jd3aTJi2nI4EDaY/HvgP9TQuZIuZimLtD7sGrISdP0dn0ZjQ6hixKa/BsDy+cGR6cIjh9dcRJfMc373eynDHyqV86C3xhiy23bs5P4df3NV6OaCK9SJMdP9PoNEkPzAEfLuUlZlgAVlMasXdpra+FqVCdK73uCO26lgYU26KbvwKRcdZ22+zzzxmWGq43EUgmeI8vgo+DkzB2RNkAvMYxmMUTps6etBQ7Veqs0+yH1HfePk8Z5bX0zB/H630G7Q4zNc5wZxppp0Rm9HS0naoG/X+h3Gm8+OtSGiPL3EhSqlrTo1x7tzDR8JARAwwdU7IEFLIIP2RuOyzMkawlbNNqSUD6l/nGp8hhUh3we0BbgYn/hiG3WbgIpkEwcuT5j2AlOdJJY64E90MZkVgmvBKZHihU87pIrrE5/0glQHbJGUo/ob8wsEajwJ2X4jSb1ttM4UeiHC4npsr1KpshDjUdwmXUGZQZXPM93gfyVtIMOZNCWVSj8SafDGl9c8vzz7EdGxtH1H+jvg6xO8JvNiRgEIlRWMmD9pMHBNHWZoaP4cHEpFXDc0wnwf7QQdPaUKGKS9M2zay0LxU5sDdWJCBVgfK0eASbSSLkku3eQWJiOvsQC+98w4ug==";

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




