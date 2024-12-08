// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1/J/Fwcmy6B6a00JtBi11UYkcM8gyy+mOqmWb5hCF7BkhGrBaEQTu8gA9qtjf2NAOpb+iIliIiANadmdXBETBFzghWQXUe1XdgA4d7j09WkcEbhIIN2iCLG5K9eb2W2GCPf+HNkz2bS46NNzOOrh0Drf09ABxgUyqHYx6/TmyImaD4O+wBo2nEu3e4iJAGR0ExuFybahodl42JcTgXUOAdXKMSd19vw52GA3ZEfY10DIzgOlnUFKab/ax6RocL8TsQ2fo1F34RxyS51B1hR95ur+pWvg3sZ3Zrmg1LODsvQMyiDCYClS3NZWUB7HoLMTd3ksOzyFaxEHQdgEBmDvnXtMUU1wyAHaXarwWfLk5xLiaB1AHalaUDkAe9tauz9zbaElnHY2FV3gvboScpltmubMYb/SjJ2GBu2uJ8Jqmc0MsN0r/oOeLz3hPwiGWkZwLbH0z/vgP8Ly2VUpV/4JIYsgvFBjcP2vtkq9mieIQnmb+ZqeP6XkbRm/3DLzDsTK605VyrMYK1XsYMstwr464mtYJrOieKwx04Cg6UUOUeZSS+nCj5Y7IOK6p7/bI37XmLvrI2smJ4TMs0T/n+BTZUUKNgYNTrqRG5n20HVHkuwUwfxATd+iLoO1NmKstD4JX+zffFvGUAwW4MNTenBjtHKlTs7GMWJlkVBF/+5UF2Tu30G7mJ6d00x+qgHk9bgRUPdWIsKXi3nQThusrEbUHAocDcSG0s0baEDKlgsKWyq4Lif+EpsUfgg7kGqoD0Y6qye7Zutm5X4jXKRz4cjMTc/NRzsvbrCyAp3sJ7cLSrLp0cZfNiUsgrdZZ639WufjhsTVbsuvQ+HOFeaTuqnubzdeADokNysuD/ht8/P8hSmkjhBGL2OKL6IZgk35dwCmhPIOdd4x27bFoGgxJN89pqTDCpFsBqhy8WJKhSpZbGz9Pnr83SbHmulSKAmGTQhmimY0QChdosxgjwV6dTAJd/lNwHqy8/z3Twpq8pmuD5Gum03BUEsMnFWjdvydbz9vURrXSD2PGiqoNIVCIuJPBDIVJUv3SM0+k4Isavh16MNcWGN+0+6mnytHZzRTFPe0xTd/MecW4RmpZACJapE2GlT4YmbUnmjg5hBdXQQHok5i7VRh8VGxUqUMxqtiQZplLgscFNewtd+WIRgDoVRTQJ1gTsUFTQHSbVpNs4AQP9goPrxQXtqvXAACdDhSEWnLodo7mgPKJxTUeE4XaF+Gq0Q8uE9uUBMJyfIMuLq8uYVg+ejZXtbI1Wic2gwMoUXdtYiFajxoTERyRX7gU/VDdVyBnunST38KZShwT2u+6ZmdGVWMQtxkkKVhD6hJZrpRcgXHsZrwhsLxiaJojA0UI2Bmn+R9qx1oSermmqZbdLiniDx6oovm6Nu/ex/sntdBaV+0S7FAwZOma3/75iMTW8pBfhr8FtHHKR7MW0OUUqjGdX2aNWdZv5J9iG+6XFrnvc/MNlsrtOFJxs4q6iNIqZT4XNyM450wN87twfP8+pI81cWqM9eSYr0kTc+G4WH3TIOa4dM2vRpsoC/e8qeTE+65Ltgj7K5Kuk="; // Replace this with your encrypted data

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




