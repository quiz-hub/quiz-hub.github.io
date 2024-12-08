// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1+f77BaoNcnTlJS7K0SI2jDzLzZ2wnkhgIvJ1w/HiCyu7iwwADYM61i8NxcXm3vmRIJoH7Sp3LeUIiGEBPLxO2LjzDdjqe+8/zAV69+5cjrkaCChytjKSgHMxpqUDiCO4CwlC1U0vBsg5MM3Ygg9I809UidRFRoySuvyUjnua/Jd8uZOj/2otBI8+x06sk8HRWhtQaJMBx7FR8wpfp9okzXKSza2qu4FKQAeMV7ESyHb3n+3Z1wH82t72cWkAJ+ZVw4AXiJa6zhwTjww5DqS68goSO/jvILOru9vXXZ+cVCPwzPOoCZekjRXqxE4q6Doix6j6qAtSV1A2fc70Ieeb38wb7DpYGCZva6DAZHhWD8jnwzCvwj67WBjC2aE85aAm1JkO5kYXmWutMM+oN9AYzRoCiyFfks0gJWg0DSXYMg3HRbJS9zNUPF5LL0q1x/yJna+R5/7iXA808IAr1uo9iv2CHasamlWqLD4kepZ2HkG1Mxwbhd7lP/Es+7Nt/cchTz6YgSQbclzf9yHO9GAjbnP3cqbWuPC/IdaIG9RFTPKplj0nH3FVV0AKpes0v9JBhQX7eUVNg0l1P4Ftt9lXwsYrd5RmwatZJ1u7USBdccKO91h/veXMkEULhZrSFYN+bFBcLemUZcZRKYUsg2IvELi+VjMdPHcUhUN5Adt3JKG8kRIftfLAgQ7l7F+//B7GYsii67MSW8VBDd8zYfjJSiHwnrCJVOGHRxxFioJtFvGjyX+sNNMdlS7fvkeYZ/VmKZ0vynKcUtiUUwFC851Mq+G+tnDeAovqNrZM29REnE2JZgwsH2vIshf/VOHC4ta4T1lZ6rOaUi+VE0Vv8agUmJ3L4OpTuJfsGv6SJtp+NjGPVVy/6TtN93Tt3ADcqXIhaz3ZOIhraZJJvKbpNKdccrZlnZw0/NzEkM6CPG+HczoQhTSd3+GPwBoIjwfi7HlotXNXSM7DurI/s5Z6iJc7yaLUlAoNdORohAUK6sluQD01/jZo4FdFMlp4CYJoHeoo6PL4/JllbnthJoRhdNgZy70WtkmctpKZTEJt78e8CFGOLP5UxyMJsTKPOgC9c7jO4QZi4bWIjq+PRble3wek0CQAlDdmEyRz4+daL5vZy0HO2NhRRVIpAOv2856+qj12hKzOQdArgxLemFt1As2bpaLnLpTRF54dxIzEWBq+noku0+cvFgOMgrBF42Yn84WkwoYdgSYMBQhROKpKj3FqAaBU7hgJ+KyxxYAfpuT5IOpO+7booQsGEWQq3mP9ywcaNL47KpH9qb2Py7HoNDbRsnZ2Ru3SuLu2pDcTmiMjVviTmkDirggYqW7tRKz06zQmAeMpcmaxPqHFH4sbLS+R9XNz4S82KB8JkwduZmj8J5YC8CJz9/zxQUIhydEAoevhItFU8ut01t7+7h1traOfJKa43q+T8NbGdVEVCrprTX3vFx8wp4a+yjyC/y45Q0oliH7ZKAuzy3U45bd/omzWfWXg5RkZRQEqu1t9p9zT3+m1lwsYQyhs9FGRvM/n4xcpz+aU3YlqE7U7+rLEO6vY+5XEcbhloeFjgRcU4z/EDuGchpQccgBc5uQcpPe6kmxOnT5bMyAzMixNTiAK/f1aCIQsA0gZu6MlOCYI6xaebJYgY5Hm2qp5tkxae1kPq7xFZTW8oWIJaDUN0dDkQlEEYpDxyYKME5hnAi6MxKfOyBJTtnaMRiBWhKyJgEEualXRC9DQDinhDpzG6RgCmLbXgUXLChyiEERtxLig9KqsK7pcs8LSfyRqbqhFTq4zr1xOcv6eAGR7nsyX2VCyFMSutuBFzm/PxB0TvfyJ2zC1+OVRajhIWTwhjt+ICkm4sSrlkTyCQXJujeXlfr51HuXO9erlweuNMYwhiju+er2q81t/vxC+cu1pSO54ezR/08YtSVygh8F3ytZCJIk3j8e/9HkaLJXnpSetlCRpRXl13j0YuLfva4GXi/LUVRY1SLzNfrvHc4oCU7S/yHrptvhhGYBBvcygoBPpanDRqzOl5+GQD9J3Rs8J4EofjzZErsLRu/6TaXuaokjc+0mY874w3A0f1RVVcyZlfblKVqV6c7JzL9LSvNmpgmn7hbMceXVg3h0IDcW0OszgXFiMLJHUdbsqb+RP8DvEU=";

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




