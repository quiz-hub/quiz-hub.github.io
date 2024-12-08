// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19d4QzG01ndRKQLSPuf+jrznstFuY8eUqz6mKQuaMl3/02cF8a/sYNFXtXtZ2goGmZipZ896Fppl524OvwlLLaar20LJKt7EFSXaF42s8hNDmeUOdCo9rY9GQ8SvpUv9I1otm1ihDtkfKV+cKrVlhtRdsG8Slmwr6QZzBB37298J/ZDVBfDzDkcTZAhAVFZe75uYf4n7bWnSK74BXkXfNu7OWjNbkUjtHItxfIGo/RdeHdc+h1V7LCtkReb+TT/U44t9ClXycxPLoud0YvVE5GTyVMAIIQUgJFN4YuyEDZFnUh74yklk1Z1/bqKiurf4w0ZPIy5l+dJgPE93pILRAJgVP0AG5a+N49REejrAj01HaJrr8Q7sXFWBmWzx/UWOiILsvmHDzU/ny3I1/W59NIdNDstWaKacIjjdwc1ApXF590dgPasSdyiWjtRw3wtcdXLyDFosptjccUB/KPpJtDDiFTRl7+6yfSmV101AP0mHu10z9iUGYfce/anrXmcqmqNyfDaf3Zo7jjLzX9iNGL+XOV1TypYpw7JGAahDCXfp3qUoR6oovtEvTimpiQZU+Sau2Knorb65eT+BOe125zcDyGOCH+8XblZ9WiDmoD/kYBi8FmSpSRqRUtWjABAghL/tFxnrPUyAVgAdhTH+lWizDsLwagxWw0yDzAeLsEPZY2Fm+4ljXxmsxRqCJqPUQ1I9rrk+O/jwxnTpcoUM9KAHr90w0wH6w1N8q/TbUqzGo5mLrRnYOw0KjYz5N42ZFLxV3ycvbrZVN4sKST1dEdtQk2RGC3J+E7IPQdZ0M+atkCC1YpkRIe1wEtB+OBMOBW00fOXNusUvpPK0oqFdPGQSWyxIN4g8T/ZoO6x7/sGpwqgcjZtJTwtbEkgo4Fa8LlH9jxaHj8qB4RIB3vRENND6kEDbl9R6EJnpUM5ZZ96ShEGuNzgsBVuZpzRww1pWUKtnt2FnZnl+V0TiyKzcxMwcdY5E1/mWs1VvHS8KUDxrJRih3F81gJdJwai0LbcGGLeCZwXV5gHa2Ga+DQEewj/B9E6/wd9EP/T9n+nuMRLV/XVWzUzFRRj76n4OmoYTlckRBtP6wJtiL2SY8osY61QGkyI88nO1jbx7V7xeOzinztWTScvAFMdNsIuMiW+qiLarz50RutKjMAbeN3aGwxc6UT4Y2eZ8zqbY8EqPt7+DphkVBIPf5KH1+8LfxWvz/KraRIlPUtzObTkuy2IIBX9LpoahVqD/20IT1Tmq5tVe5skfhkZGHguY8rCIcjh56ns1IxBMvFEskZ7lWHhHypBjLQtC1Rhv+2gUUlFcvu3cpTeZXAEoeRJ1T33bw4Ha0Rcb1ctSB/oCQ2+MWl7Njr2E12cFtVR/l/pAZjEgQIUpPHqfyyoQrur53mQaOBObB3ohtZfRkZGTRlwEb4BV7/ZHqcJIcG+j+sAeMPvupp42Zj/QmelexZK2aPW3MMxU1p3qhzarr0UmE0hq8qIgkHnRv3dVRusus6etBOmwaxT0Axcnet496j3FbeQ90lxxLxJ21+mrCl1OgrM6vh5DVEw8Mr4MHQxfS1ZF5xAt9wFacN4FIcci3iHXBnT8PVJ6Rj24T3D5tQIbfbjctDVED4KHS10FkeCwgOs/1c3gu9uyoDZrwZQqPGB8q/uiTwNs8vUB7x/wkvJtuWkg7mRmaocz9udAwZW3H79poGHTJqSMYd0GiSf+kZIl+ahJnpv9jtCtSvrR3OQGlswjw0piogliuZ4oAIV0x07aR+knWNUxnzqVNJYYJ6oDFUdShYMIja44iCFoPfoTq6PR3z5Hg7MooEA9NiAeS/WNOTOb5EJ1VExe/6jyGpmZZ9OXsZohS9XFxHHzra6YyFH28q2LorW2J5rzmuBwz0RdTBUHK7tp/kwp67dhWwo";

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




