// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1/Hmg4gu/g9gRULmuAlTJkSxTcJu4OxZAnHZgLMLP4kI18kY02FaPvs9sh4HVMznv6txMV9DZ3z6U+/dUysmkrpGARIvdjz7MO2+Y1xPVaWryVTBn7JrukjbnswA3S6S8TFik0N8Jr5drQ2kn0DiE82OmmOlYlEkL3OuME8zWNfkfx+khnhvr6jgqwSKcBpLkmAA3uriZHMfWBboR2TL+C+1Ia+33YpJ0wDmJs0qgWTqabQfAmZ1Su/rJC09xwDu+L0CPhHkOnQfTMJ8eDqcUj+7mZdzj59IKImvdru9SMkFbxKQ27KY53yKgldIcKX7A15i/z05wBnpafw75Wois4Q4Kmn3tfZ+njo34fe4+qglhLaUppN9d7bwxYtc2X5kj1xSkdXR6SFxQzSN1ggdy4VkqByU/PqCA2N4do5rB5IlXoTq2SEpWPEGDQ1AVp0GMCmZF9zFjfklZSRtU1Sr6DMvV2vs/tZX09diQA+TAs6PIpuAPEqxRSu8uOfXbf1uQF6/bzMKDZJ+hkfO6mw1gzRg59/hzEW025NfGF4T/0utfUw2q9Owky/qUvB0MiKox739p2k4c52ikkQxcSZ6J7PrOcskgar0mcY5pXJ4sZlaCmaHt8OcNCd33VMdXvk6YHNL4UEzvLeV9Tpypt68dFZlngfdxEpoK79QXAqkwLjohfoqKbnKhZ5nNd0eZ/qlbn1lK/reRY1uAQn8esUnfnygEjr0wn0BMwDuT5JADjWfcuyROkawOSV3gfIK0WY175rvoBUJ7U6meMQZmKuw057s2STDfnqxKgA9mNQ1qqrarF1xmc8GDyMLUwRE86FvontrYUnEPPj4naPZ1vdNa3JewzbMmqiNqvtmn83f/RNb7slgc+PJNXQ9fh3WTR0c6QYb6isNtxFWGhUpmkZtdP+CPZvZHoWZ1CYA9UCz75yJN+EDPfGi4Br59kWtc6adnCxqnkj0+40bi4fxPiUKIPePdku7cqdp1cX4+Wprc8NykTBUF7bsV+XL7qYMC6MFUGJ1+u5qOM0YdJJRs9yga2a6TChJZLPGInNA1irFk3bdFir5VrmX9xbNjksWycmUyVHjssQ0VR/k+ciJSig1M6RosvXPZdtPWxS75lRPqm7jHYoYOwpkZmg7qoH/3rRR07gP5GGlSZ+RSXN6w7khQdSmWIvF++H6sLLbGi7B4/2TmNXLZ43AmLnxIk7eerUYxaN8jGeI8MHtMhug/z+JmhAI4ykOeZ8/83u8NK3GkYwlcW+fcpqRdCU3cE6bU/AVkgDdsXWE8MkpC7VNl46rNvw99izWn/q8d0Evfh8UscsuoReCIMEdcwnaRawgEW+XLiPticTyl7kqa3+VBJv47b8N5CpyL1HE8fkz+Goky9gBjcNypMwuZ1vbcxPK7/lRzD8At6W6SFRmG+Zn7mKWEEz1av99/Lk1cUZus4XKDYbJ2DLP3c/eCizEZhqy3VlpBo9ySGloFbl+cVg8lWR+LcBUrz7Js8HMAT/v/eLsAhy123PKWiuc1zsVdjMKdbKnDcPSY9IkZV2LShvAK0yu96nSb60yNFyO1dKA3TpZ+3V0cev5vB0+f2BkEYxfi8JYsw92yILtICsh5KobDtNPADZO55fR6bppR+RN1uwbEyb3gaUv8i7aZJSwGZUNtNrHwGtN/L0uOyG2vw+M5wD16Qj2BVJ7k4F56zteHE8do/1xg/bhlzOgyjwij/J7iFwDH59DmdL24ah/4C7n2Sha0B/Gq20YIOzQ+eFXDFx4BisXlEbtYzpn8SGd1P3lE8BP+EYHRv6jNE6zwTG/XPAlM3n+dCFYGpHQJxfWg6gUR3ukP1QRVIgrUzEyXOIiYcejDKPSMtBsJ0OmaFXabEffMkdFjRVu7OhS6GiCvt9Rt0Gi6DpSk496Q2ZchTF2PMENe0sSn4ol8fz+Ccy14nbXO3UuHSZrWzLbuhhMKfw76nFmjcTqbDIj4pN6qKqe4SVwyBVPdMXrqglXQpIBKkR+11QoeibMcQCu4w8Iy+PsSFZwf63vVypGkQYLYXjj+OochkzoIQbABiRewLWggQjl5gz0Tal2CDewHhch0s/FEdGj+WY1BSEYpLD";

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




