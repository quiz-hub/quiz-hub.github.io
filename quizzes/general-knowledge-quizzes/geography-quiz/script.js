// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1+ul0aKWgBbgI3M3AJRd32b2IGEafhRd9b19UFCp2TIuE4mtk2UipPl+TQuGKPGhjA4yRNdnLiwJvScb4HecSL/kJbiVOwo2M6GbRKRji1To9pslI1MoYqaMaxIiko6eGLQ6TXwTNXGkwxi0P4pcUBDde4Go7hDT85gjbgC59rpdHkqiw3d43MVSeSM8KeDtlXZoIZYLasC1sh+DcEC0nOxM4JRT/tsH96ZGvEGcM4s6JYPyNivuRMi4nNRboysZiFrUJwZzn3I6LwBcvuk7TDDUMPv7Uv128doh6BOS5yAaAUF06ockkbowvY7gEBAidTqTEzQBJh8iWe8cfsywzyIiTRk+xZ3x0WcjO8h6W29NE2w96Olki0Z319vSTPh1v2ls04Vdg9DlXcRwZhxG7arBWTWR+kYDcKqFTrnyle0M6xmXNKiDbA9KmNKLS3azN0SBU5KQE+IeYMepF+xuk6MAj0WmQYlDeIc2pWtP7KDJuzgztbfkq77d8mdAwQXnHMXKuoW4btjHPazts+tOUJcnasaq3M3p6G31tYM9TUkiyN5SopEQlxjuwGF3Ehife/bRMFkmoxr6+XwaGmUvHMgSIE7Yk7lZBNKmOoqlYox6NtRSysVcGVaZDafLZsOnqyj8MAKqOpSCtIrZD+k5Ca1sCBdcnfeFrx/75hpe3egwyQPF4zwPWZ3XKHSE6qlNbsoswLFRoarZOhunM0GfQ2AT90WAbrXU9kxQvpgLQ3O2Y/cGaF+elD7Llv9OF2ffnIjir+AjsPX2QXbuLCFDc390uz2nC6com/UqKFRAnTRtJPjeewg7VDdXxMXCEbfYe9XViTyC1il//7DzqK4btFd/NnQFIypPSHIZl+J1eMG3xSC3vw+0aV0I0DuHIrTYNbW9G//MEOiSUWPoA+t/3mhaPj8xnh7Uc+CtTspBdAm6XvI6Cr7L7fHNQd1p6YeSqq74nLP5iwexGJ+m20wHx+sQ5zV/v/0oPCBRoon16aAUS9hN4G7vIGJEQVCCxPIxYxF0juNqYRh+uSXivcgLkkjZs4TusYh3lMWtq5IalPROGIkNslqu9zlJid8Cdwyp83wN0a12KYlSp/8g6TXqchbnDo7G6OJc5VzWS6vdZr48gOOk8U2Bnskh1toH+FfRjfsjR/lXGwkLnCAf1Yef0tj1FfnyBk6f0KVLBelPP2X/9HbGgP7Zyyn5MNh87FwlCAHgBxQ7YdVH8d1pE7r1qYcvI86NTwreLAHi5uxyPvRDDDXWhRZMFRO53T2BC4k5edRBxXapvTHHdw11vDBph9bqxyA3mgZaxyDbtWOq3wrTZCRuDufIEU7pl6xlhzgmnHuNJ8BxEL3kR8+BMDBzlVeCtNEOi3JlUBAjsRecheIpHs9n/w381CEcPnhtDCu4cJN3+jKmh865l/pbsEeD54IxBYPJs+9AW6wzqK8ZKWUwC16AaLDFyy6gFaEGqc1qHRm5VYWF2f5MsqLzrUyctBBbflp57L7nXn1ST6B21WYO9CRdkHNP5LpQ9FSxDin5ga0vqG7X7fejXE7IOXCo+z7DgeYs9GLFJOCw4syGn6D7cqRvanhqPg5yrM8g+T95vlbz65+WZFlxJynkWZA17DQW2ZgXdpupIcGpwS3VspPWt8hiIY7B/RSnYV7ei4q+Qbi7CZ+MAShdvxxDLzUM7lHVmPunkgHBAydEZq6POJBdzMGwvoS+inLjltbKNAhQT2/jbwKg5nl1hZBNgjziwwo5XxKRigrDqwtLmrAJ7koX48Bvm7C2uaopaOafKYIp0baOClnWXPDR+3qfLqsc8evDrS12jHXij6VQqzR7cZ9g9ZEXKfEv9dWYqHJJdkd1QvGo6i1UfqQzsPzqVa+rYGpaTXZbSAQPkM=";

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

// Save score only if username is provided
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
