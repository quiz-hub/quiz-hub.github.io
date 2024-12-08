// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX19Zxr2bXYPInNU8rihy4eXjm72LmtT2s2vY2ylLnLAr6JxWRIi0wwFMagLiOVzFmgitag5mOezTwdQs4FN5BwLi6/NL2uiJuaQDBnthQQbyAC+SWyDlTIPldHZRZ+6JMaOYxcZjrKVNBopsi3WOqNPGucU6gFU6mTB95R1x6I6SThurrWRY/QRluUL5ketjLsTaby1u+kCFktl2Zb/S9oRZkdiUXXf4x/bnxikwspqcD9ueEkrPQ855SPeoEYzOgUYu+RMDuqNlrraQ4vdFQfGN+atA0kE61t1MYrvXGIknHL3ogZXEvhQm/vP1xp7741OK/FfpGZpPCurbqtq92U1QSCC4wHRq2CDQhcoOKWsIvzxjhnK79PZXAYYe2EH87abqByQUkXSgS3D+uU4cv66us5CnrV3/nKCj6/YBKTI6+JRMWt3LsRA2V/fSQSIwBRlz93RlEjLHrpFKH7bi2UCO6RZqdmhQhDUDv5S50BllxrfSZDgn00O/0k5guZrC1TQcVE9yEe4QhxCd+1cCkNlyL1mYISxFTplVyLwtPI6odXyhfWDvfk2Tev7lfO26ISi8kPir41SCeQL8zMrppmjAAJeIWeCTqjOSUFsgQ20mEttS0d35CokGG+Q6pS+2AVO3K7JDiKRFaVRLpBcr3vEYf5mhCE7iARoJB0nh47+X5kDVwn3OR2TXor7eZMfLJqPmEIAyQmE9tW4OBcNetnoSDrxpeq6zbLRJOT4tl7NelMHr944EVbaeTj3/8qBrdGlxPL/sD4oICG5JMc9AJJRPUefZs77iv/0J7C4N6qfRcKzS51oiKwvrIl5NIJXPnxl20zBlhm9ESGevDN9t/Bked8ujLCuq3qRngPgtLlQXo7VhtUH5LwtmOIa0996kO1VAUgOzpYCkAqlG8k+6nN14Ca1ak9KuQyPTzUhPz4BJZu8alWnegjbQ+t1TQ880/x0qW1xmDagVS4bHQKhW6/mVaZHtgCIcazkBeLPNfRp+D7KPmDt5u/LSOdk/2UKDW5ewb1DmB+1gblkl1Grlz84Ro1culn4ZrDrylXZ3rHzMSKuclOTnhdhXLegTyPZ+2Wqgu2iFtHDg4iurs2HhkBvKrwtmhTyYaeP9fWcQoetkQ6fU5xCr+3T1ArUE+klaO6lohk14r78GEwqhOWFTrOytO77iSXnHf1YbJSIORxqRjsVtUPFs7o/y++z78VLXJimCu47uZm1Ao/lHUBOdYLDXdos8BHcRRtQI/3WIKa5VcTnE/k6Xb1Ue7Ok/7EPrrbcD3GtIhVgM7wtpefkqilsfWkQo2FyA9Imfzjl+RQanNvvXNhoRtzVks6dNSKMotcYEr4NlVqkd+vg9NTqqkyZr06sokcI1EqgINz1lWlV9NgBoy8OFlLi3d8ROgIqbmNQuwTwPHUa6HEq4wpy43Z8HL2JOkzhW9kBLTYYlBx/FcurXHpey0MZgEK/t16gaQVrE5Dp7YLdGmtHxl35FOmw4KI4+GVSj0Xez6VO3QOr9ha26/UiFuuUNiLBtoD1sJ/DtYhoUngJEY6TOB7L+3U11xuz+TdpNpayNYV2xPZbXENZdiNFE8tZE41tekgC1X+vi6czXdgxI3gD/v78RuNZWRNmhC2Rrb4KCE+tzXKX51XXXEAsAkUE+XBAkCLt5A/P5T91OMtFON19Mba+xJjOyHFBZbTGZlEYQ4HN3tyEvWhRAeonhupZoejEEz5wP1nE+9IO5ln1i+6dZddXiV0TtH5gHoms1s++JylK78ac54kEXMRmfH9cJWd/yWsYCcZKL6ZJAGhPs6sm/jkXnpQCoJmJCGAtiZsogLCLfckbo65Iov1nComa2H09o/krRSMAgdPJRviQfTSnY5nw9V7JuOnZB74kWlb5xjMFYoT9f+pn2BcHUxVNvdqojk33J5jOWTduY5K2rnNmjzQmbDTtxZ4jWNY6jrJKQBCK/Kh4ciBvbFVlZMc3cXe2RI/lLc447p5otqcIhY0X7FWZa3fZo8GshbIpvhjg=";

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




