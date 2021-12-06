// declaring variables
const nbaButton = document.getElementById("nba");
const disneyButton = document.getElementById("disney");
const historyButton = document.getElementById("history");
const nextButton = document.getElementById("next");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions;
let currentQuestionIndex;

// questions for quiz
const nbaQuestions = [
  {
    question: "Who plays in MSG (Madison Square Garden)?",
    answers: [
      { text: "Dallas Mavericks", correct: false },
      { text: "New York Knicks", correct: true },
      { text: "Miami Heat", correct: false },
      { text: "Boston Celtics", correct: false },
    ],
  },
  {
    question: "What team does LeBron James currently play for?",
    answers: [
      { text: "Los Angeles Lakers", correct: true },
      { text: "Cleveland Cavaliers", correct: false },
      { text: "Miami Heat", correct: false },
      { text: "Memphis Grizzlies", correct: false },
    ],
  },
  {
    question: "This season marks the NBA's _____ anniversary.",
    answers: [
      { text: "80th", correct: false },
      { text: "100th", correct: false },
      { text: "50th", correct: false },
      { text: "75th", correct: true },
    ],
  },
  {
    question: "What team did Carmelo Anthony NOT play for?",
    answers: [
      { text: "Denver Nuggets", correct: false },
      { text: "New York Knicks", correct: false },
      { text: "Miami Heat", correct: true },
      { text: "Oklahoma City Thunder", correct: false },
    ],
  },
  {
    question:
      "Stephen Curry led all rookies in which category for the 2009-10 NBA season?",
    answers: [
      { text: "Rebounds", correct: false },
      { text: "Steals", correct: true },
      { text: "Threes", correct: false },
      { text: "Points", correct: false },
    ],
  },
  {
    question:
      "Stephen Curry led all rookies in which category for the 2009-10 NBA season?",
    answers: [
      { text: "Rebounds", correct: false },
      { text: "Steals", correct: true },
      { text: "Threes", correct: false },
      { text: "Points", correct: false },
    ],
  },
];

const disneyQuestions = [
  {
    question: "Who plays Woody in Toy Story?",
    answers: [
      { text: "Tom Hanks", correct: true },
      { text: "Larry David", correct: false },
      { text: "Randy Newman", correct: false },
      { text: "Morgan Freeman", correct: false },
    ],
  },
  {
    question: "Who founded the Walt Disney Company?",
    answers: [
      { text: "Walt Dinsey", correct: true },
      { text: "Hugh Jackman", correct: false },
      { text: "Probably the guy named Disney!", correct: true },
      { text: "My Uncle Bob", correct: false },
    ],
  },
  {
    question: "Who is the Disney company's mascot?",
    answers: [
      { text: "Goofy", correct: false },
      { text: "Donald Duck", correct: false },
      { text: "Mickey Mouse", correct: true },
      { text: "Mario", correct: false },
    ],
  },
  {
    question: "Finish the phrase! 'When you wish upon a ____'",
    answers: [
      { text: "Star", correct: true },
      { text: "Car", correct: false },
      { text: "Cat", correct: false },
      { text: "Mailbox", correct: false },
    ],
  },
];

// event listeners
nbaButton.addEventListener("click", () => {
  let quizType = document.getElementById("nba");
  startGame(nbaQuestions);
});
disneyButton.addEventListener("click", () => {
  let quizType = document.getElementById("disney");
  startGame(disneyQuestions);
});
historyButton.addEventListener("click", () => {
  let quizType = document.getElementById("history");
  startGame(nbaQuestions);
});
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame(quizType) {
  console.log("started");
  nbaButton.classList.add("hide");
  disneyButton.classList.add("hide");
  historyButton.classList.add("hide");
  shuffledQuestions = quizType.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetQuiz();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// clears answers from answers container
function resetQuiz() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  playSound(correct);

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    questionElement.innerText = `Quiz Complete: You've correctly answered _______ correctly out of ${nbaQuestions.length} !!!`;
    setTimeout(function () {
      resetQuiz();
      questionContainer.classList.add("hide");
      nbaButton.innerText = "NBA Quiz";
      nbaButton.classList.remove("hide");
      disneyButton.innerText = "Disney Quiz";
      disneyButton.classList.remove("hide");
      historyButton.innerText = "History Quiz";
      historyButton.classList.remove("hide");
    }, 3000);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

function playSound(correct) {
  if (correct) {
    new Audio("assets/mp3-now.com - Correct answer Sound effect.mp4").play();
  }
  if (correct === false) {
    new Audio("assets/mp3-now.com - Wrong Buzzer  Sound Effect.mp4").play();
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}
