// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1+rqZ/NMyKvUmFQm4zj8Jq6/EL9llQ0HaC6TwAqWSUFP3cgD2bCVE/9H1/SCTRhibmYyxvk+GhUsTdrt7MPyeW+zCCRsXpUhheUwouHjszyySOqOsHq+ZJI9SmYDgthhekWa7E/PXAJxT1CbeLpVpr+xmJ60JY5L2Ne4a778K+WlVfdNY00fD6m6tcDUTkhEqaBgBHZwPfAGmU2P3A47QiURM5UvbumLVjUA5xwBOsAMG6K3fq7VoD+m4YqbQnAXvsNq4W0RmYSwRc0Kmjws8chhCa1lxhEUzLloweT6VinviQh4KOaywtJ2HQaWiLZ7iDlRTYTCvNTjyYt3vhmIxyMu+aK69d7Lr3zbH8/5ZfTjOSiIbhonEenB52vuR9SOjmG75hjQ07awXrFLsTG0ToooaieCwzzLzb+xdKMUafezjkKujy94YoiNL+gCeZBQ+Y1Hp9G0amSVn1NMEsaAmrmtbnDb/4Fczn9mIpMTFLN+a3SNz31N/kn4rawlGfhYaQcHDzXfb6QRNBk+C8h/yM16urCZqpcUIfggVgA6Co3qyMiwk9jNkrWvVHowSwoWsfCvgTB7PxFBCnxlMAtpzCmrPV32gHfJMaVAbzWpQDeY2drpKMXFqj9rd0REO5eWMGEoVaBrdQK4xLNxNtCNtHGCp6OgLEGtwl2WpYqNV/AeZ3o9F2Zt0QOlFV+X57hVXnxs0Zrl3szPDnB4/aHKHVPBxYXF0No5DXsQ9CrErSsduSJ3EEGbagzJTH/ummn7Vv6HzMKldBr8XMIkcY7xo9bLabJdbYCskj8P4eABAgOqvIiUsL9LK/aO5t+TcpSTG6/7PMqSJNNmy3Ar7JllZmx2Fff8TdASok/JuK4zZwoX9YRJNB5S94zAUP7B+X4OZxJxdPfNHD/jxtF5YOZi+FWnXVXPBnNfjphtUzcnZ6XJrfUADoh7U6IzsDrmuuB+I1wFPIo0MF67thNoFk9ALqlGH0YvfTyjOkqLq5EWxhyTZ1sa7GIo3y1eShLMbHJ6tEqxMXmx6o6HtHcRZ3Ukds43vjFfBlESN0OeYuKyUdeBCwgNNvMfigIuNsrS6zmEAs/n8UmfTuk7tkrRNXAGOv6DmP2me2Asxwp8CV8JnuMM4+zGlCcTl4B79mzYSsPUFXW0Nj6SYBuAnr3S3YwFuID6B4g5+DuQgkFEeMO5yDgKLrJLRNQUIY63475LD5jfBISPyragVDVEr8UICuvvxysnHFJIwFKLVgmxJqbAaQwyzNguM9RN53aCoFIoFFuUNtyxbyJ68aYZpaallISZt1xbTLPoohrzUD2eQ6uIYrwAg6GOWLQFyQgvDiwDLXipYGCtfUGHxbsmEGP08iSueXQ9z1ISb3pMcdYRxF+IGaRlJn3vzqXvbKCSrQgUzHMig9qSc5rDBd6VUMRXG7WrLog6hvwC0V3OnW3xmp/jLCOPRtBWYgc4jyjCvzQzkSGucSauz0pjPa+3VsO5dmltqhMS3dRh4pRe/zEdSqtpdHKoFozUu0KLEF7ijmlw6FdNm5efAaWSoFPSlRMFOvHk4+k/o6d4Vsx2URRnmh7T155DRUdtW82DnSGBOYJE/7r8gj9gz73dAxS+M46cPSMI4ouPmjjvH3REf0snGkUS1Klq127dXx8aYMHghVM8ypTrx76X+rfFvVAVU2qCmm1hFfTl4G+9m4e2ht64aDOxdvNqBU1z2I0dY+A8yJiOYeqkEEkY5kIKX0ec7jnX746W7uWJuN+wZeNOPiN7DbyMHf2GoMrJVjL7hOOzpxLM0npJVfGE+U71b8GgLq9nvzm6X2nSVNHeR7NNfvEnhiuVLlQeA+1ivln7PiNuNwGQTruTglBWcslAc3+5l/ZIrOjtwSW302OxOZ+EQukA3EmIXKyjmyLCav6tPfMYNHp0oFM4EYdSq1i2+rkQtaOSfSPik8jBh9AkcEozxWjoTgt2HH0aMqlr0DyTz19";

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




