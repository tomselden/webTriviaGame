// declaring variables
const nbaButton = document.getElementById("nba");
const disneyButton = document.getElementById("disney");
const historyButton = document.getElementById("history");
const nextButton = document.getElementById("next");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");
const scoreText = document.getElementById("scoreText");

var score = 0;
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
    question: "Where did LeBron James play before the NBA?",
    answers: [
      { text: "High School", correct: true },
      { text: "UNC", correct: false },
      { text: "UCLA", correct: false },
      { text: "Harvard", correct: false },
    ],
  },
  {
    question: "What player has the most career assists?",
    answers: [
      { text: "John Stockton", correct: true },
      { text: "Chris Paul", correct: false },
      { text: "Udonis Haslem", correct: false },
      { text: "George Gerving", correct: false },
    ],
  },
  {
    question: "What player has the highest career PPG(Points Per Game)?",
    answers: [
      { text: "Lebron James", correct: false },
      { text: "Michael Jordan", correct: true },
      { text: "Magic Johnson", correct: false },
      { text: "Larry Bird", correct: false },
    ],
  },
  {
    question: "What team has the most NBA Finals appearances?",
    answers: [
      { text: "Celtics", correct: false },
      { text: "Suns", correct: false },
      { text: "Lakers", correct: true },
      { text: "Knicks", correct: false },
    ],
  },
  {
    question: "Who has the most career rebounds?",
    answers: [
      { text: "Luka Doncic", correct: false },
      { text: "Julius Randle", correct: false },
      { text: "Kevin Durant", correct: false },
      { text: "Wilt Chamberlain", correct: true },
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
  {
    question: "How many dwarfs does Snow White live with?",
    answers: [
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "9", correct: false },
      { text: "32", correct: false },
    ],
  },
  {
    question: "Mickey Mouse has a wife named what?",
    answers: [
      { text: "Minnie", correct: true },
      { text: "Daisy", correct: false },
      { text: "Pluto", correct: false },
      { text: "Luigi", correct: false },
    ],
  },
  {
    question: "In the movie Cars, what is the name of the main character?",
    answers: [
      { text: "Star", correct: false },
      { text: "Car", correct: false },
      { text: "Cat", correct: false },
      { text: "Lightning McQueen", correct: true },
    ],
  },
  {
    question: "Hakuna Matata is a song from what movie?",
    answers: [
      { text: "Snow White", correct: false },
      { text: "Cars", correct: false },
      { text: "The Lion King", correct: true },
      { text: "Toy Story", correct: false },
    ],
  },
  {
    question:
      "Who is the young man who takes from the rich and gives to the needy?",
    answers: [
      { text: "Goofy", correct: false },
      { text: "Tom Cruz", correct: false },
      { text: "Robin Hood", correct: true },
      { text: "Idk", correct: false },
    ],
  },
  {
    question: "What Disney character has long hair that is let down?",
    answers: [
      { text: "Garfield", correct: false },
      { text: "Repunzel", correct: true },
      { text: "Belle", correct: false },
      { text: "The Beast", correct: false },
    ],
  },
];

const historyQuestions = [
  {
    question: "Which Great Wonder Of The Ancient World Still Stands Today?",
    answers: [
      { text: "Giza Pyramid", correct: true },
      { text: "Great Wall", correct: false },
      { text: "Tower of Babyl", correct: false },
      { text: "Mount Rushmore", correct: false },
    ],
  },
  {
    question: "What Country Created The Statue Of Liberty?",
    answers: [
      { text: "France", correct: true },
      { text: "United Kingdom", correct: false },
      { text: "Italy", correct: false },
      { text: "Belgium", correct: false },
    ],
  },
  {
    question: "What type of government did the USSR have?",
    answers: [
      { text: "Monarchy", correct: false },
      { text: "Democratic", correct: false },
      { text: "Communist", correct: true },
      { text: "Socialist", correct: false },
    ],
  },
  {
    question: "Britain annexed Hong Kong as a result of which war?",
    answers: [
      { text: "Opium War", correct: true },
      { text: "Seven Years War", correct: false },
      { text: "Revolutionary War", correct: false },
      { text: "Russo-Japanese War", correct: false },
    ],
  },
  {
    question: "What is United State's 50th state?",
    answers: [
      { text: "Hawaii", correct: true },
      { text: "Alaska", correct: false },
      { text: "Maine", correct: false },
      { text: "Michigan", correct: false },
    ],
  },
  {
    question:
      "Who Was The Famous Actor That Became The Governor Of California In 2003?",
    answers: [
      { text: "Arnold Schwarzenegger", correct: true },
      { text: "Joe Biden", correct: false },
      { text: "Barack Obama", correct: false },
      { text: "Donald Trump", correct: false },
    ],
  },
  {
    question:
      "Jack The Ripper Is The Name Of A Serial Killer That Terrorized What City In 1888?",
    answers: [
      { text: "Naples", correct: false },
      { text: "New York City", correct: false },
      { text: "Dallas", correct: false },
      { text: "London", correct: true },
    ],
  },
  {
    question: "How Many US Presidents Have There Been?",
    answers: [
      { text: "44", correct: false },
      { text: "41", correct: false },
      { text: "46", correct: true },
      { text: "38", correct: false },
    ],
  },
  {
    question: "What Ship Sank In 1912 And Has A Famous Movie?",
    answers: [
      { text: "SS Sinkington", correct: false },
      { text: "Concordia", correct: false },
      { text: "Titanic", correct: true },
      { text: "A big boat", correct: false },
    ],
  },
  {
    question: "Who Was The First Man To Set Foot On The Moon?",
    answers: [
      { text: "Buzz Aldron", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Lance Armstrong", correct: false },
      { text: "It was fake, duh!", correct: false },
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
  startGame(historyQuestions);
});
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame(quizType) {
  score = 0;
  scoreElement.classList.remove("hide");
  scoreText.classList.remove("hide");
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
  scoreElement.innerHTML = score;
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
    questionElement.innerText = `Quiz Complete: You've correctly answered ${score} out of ${nbaQuestions.length} !`;
    answerButtonsElement.classList.add("hide");
    scoreElement.classList.add("hide");
    scoreText.classList.add("hide");
    setTimeout(function () {
      resetQuiz();
      answerButtonsElement.classList.remove("hide");
      questionContainer.classList.add("hide");
      nbaButton.innerText = "NBA Quiz";
      nbaButton.classList.remove("hide");
      disneyButton.innerText = "Disney Quiz";
      disneyButton.classList.remove("hide");
      historyButton.innerText = "History Quiz";
      historyButton.classList.remove("hide");
    }, 6000);
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
    score++;
    scoreElement.innerHTML = score;
  } else {
    new Audio("assets/mp3-now.com - Wrong Buzzer  Sound Effect.mp4").play();
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}
