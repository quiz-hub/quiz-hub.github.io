// Encrypted questions data (replace this with the actual encrypted string from the console)
const encryptedQuestions = "U2FsdGVkX1/TlAwlMRd8MDpQCKVCcrFJ6Sa9jLSMggZjh4CFMMMBXA11/pDCym1Aa+RhoRm2xxTlFgDTvFhWEkuVDMwht/axzHk52Z8uLU6vFwkI6e1JSJ2Sm6WG3qPpCz50oDflbxwXun9SdPPteeqiqWQ0C7KZDmwKsGxR0209fr6mZTpG7aYPCJ7cjGjnAnnRXIO4y74OiuWOLkqQsNbRdaNVVhFLWFWeFYk56V5BvzMSFiDeaBi9qPFZwUh+5D7s32HCow/qFk+MCiFOhveAso3KE7PJUuBnpC2Bx8hQaXPj7Xsz/qWJ9ZLzSmRuC4KdDC47SpOlbp8wO81VwZXPqtrw4/GRToxbG9oHFwxpouGD2p3Aws2mMM1aqDxJksWrB1JTq3cdFdo4iXrDgJVaqgaYPfkxskstpUTyhzYGu2JnmdtW3JLk0quOEnoISHlAshmc5xTiyjvCDqN8XFuU2nT66T+YD82pQeZNbplAHZTDtyhWITIg5QV8OjMXiUaLrlYRGGyLhNOUMSHR6PUrrpdoiBmcYaQIll4+Qvj/K/tdOzIQaqIXVn0FmwLrj3/37e5nieB/g1Ooz1HLrIWmk7FQPS7yKr5DrIEwuZh82MXXH3KAQ4xRW6lZ5412Kj9jAUHgORUX/YMS4FMvOKAa4RThToDONaeUhityzabyYoK43ZL23a7D37SdwXvgI0tW5450o5nVA1USo50BEGOHvxWrH+2gY8mzm+elv5DwpBZ5QnGnappZDjM9vMIAz4oebOSKmHuyPp6hTzP+CdhSHZDAhifw7b4G+G7hj+AKYLTZkHBUo3KBS6gMaziFWd+pqs4A/Uud3SYSvH4FNFthVlw5N3dFEoZ+lPNpkse7HSMapPC73bt1tiffJKLDDfQ+NuLY1qmB7UTpg89thJyBzlx5Xg7VZUF/hiRf2kHhCpwedEh2ZjQoB/i1+Up5x+xJ0lXKFJmqiwv4dVHcYXAS8K/WGX90zSLtRVPiqLrgB22kvPwg5s2E/NfmZ/uPkoKTu10OrVbrJ4lTlruJ7Q9zSqI6jmAi0Mc3NiyPiR/yXAd6HafLt6cPj8SEnO/AIfSOj4euLNsrxcLPo3doXY4FOFToAiHw1PvuwCB7MJNzBKgWF9G+XSgEKN5Bkskjif4PH5PN/eaY4o1eZZfRTlK3PS+a6avdXonNjLoaVB6trDwbFHsWFjEQMyJbKkNeTmwhh4Vh/1xr04slN38Wgu56FHb5pFYY34ABjvn4iSoeQ2gHTT/1ffum5DtymoeCcZ2aIo6fjTeLkhN6QFX2sdGuqwj1qEPlEQujd7LDQt7hewRtsxbvUNrFncgnMUeubd63Et3fFiqyRJr3b4wNdp7AWhK+JZohQUY4jxnRqmax97zrV0X5XTEsmoBi2NyLLweIwg2Qs1adgD5XvW8IWPVFjAUBQR1gJ3HE71rjDZXgtkOICgeUx1Yw1UEabVrs0CqknkUt8rFht2qaBgC2N4gGTbpKgCYvnV9fqIkg4VDflQ/eql08iPp8rG8mdeZJqyUcXjQDAj3bj+a3YsqMbNa34lihyyKjIx0WMC+euxzhHp0DBrUr9wPxlIWx8mbFebF29iGFH/oHebyKrMDb9vCojZ7Oswlgj39HDCJEgrZolTghaQKjyvzLlmRXGqfA3W509a/cpk0qB5nQG8nlX3p/kiYI7P9q4maovL4vndsz4iulfFgxFjKzuSac7glgqOySfvUyHeEb+IIeoyOKkzIRr6e8ijaYl05cI7DsfDznM4fUEfzPuPgciak5+YI2d4269fM4gqJ4CdAp9mNgAfSMcNWgq45159SO8kqRWqNCfHytJZ5mGmL7zsVbaja/zBXZO3+Caqv8AAVFxyEyjgmuV+L7r3LoMcT/K7/Wfnyeqjzk2OHrv6reWVIZ8IMWL7dp/4gc/gKRYtg9y9LKOEZ5HHn2tZTMfM3pTJd6gKaTIrT4npv711R2nxj3/if2ar3RxxKqG2fyhx1bJdelQjJGdODvyjklslSKIuTx04qDFA8kkYv25qU/T3Mw177EKUGwo9Z27Zm5zI4CCCgv0RgmUYuDAHljX4rkiBPrxyJK1J238ueMDcLu4cZGYy5L";

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




