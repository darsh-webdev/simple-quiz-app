let quizData = [
  {
    question: "In which Italian city can you find the Colosseum?",
    correctAnswer: "b",
    a: "Venice",
    b: "Rome",
    c: "Naples",
    d: "Milan",
  },
  {
    question: "In the TV show New Girl, which actress plays Jessica Day?",
    correctAnswer: "a",
    a: "Zooey Deschanel",
    b: "Kaley Cuoco",
    c: "Jennifer Aniston",
    d: "Alyson Hannigan",
  },
  {
    question: "What is the largest canyon in the world?",
    correctAnswer: "c",
    a: "Verdon Gorge, France",
    b: "King’s Canyon, Australia",
    c: "Grand Canyon, USA",
    d: "Fjaðrárgljúfur Canyon, Iceland",
  },
  {
    question: "What is a baby monkey known as?",
    correctAnswer: "a",
    a: "An Infant",
    b: "A Pup",
    c: "A Bunny",
    d: "A Piglet",
  },
  {
    question: "Which star is nearest the Earth?",
    correctAnswer: "c",
    a: "Ursa Minor",
    b: "Proxima Centauri",
    c: "Sol",
    d: "Epsilon Eridani",
  },
  {
    question: "Which director directed Batman?",
    correctAnswer: "d",
    a: "Steven Spielberg",
    b: "Woody Allen",
    c: "Martin Scorsese",
    d: "Tim Burton",
  },
  {
    question: "Port-au-Prince is the capital city of which country?",
    correctAnswer: "b",
    a: "Vanuatu",
    b: "Haiti",
    c: "Saint Vincent and the Grenadines",
    d: "Suriname",
  },
  {
    question:
      "Which American rapper, producer and actor released the studio album 'The Marshall Mathers LP'?",
    correctAnswer: "d",
    a: "Nicki Minaj",
    b: "Drake",
    c: "Ludacris",
    d: "Eminem",
  },
  {
    question: "Which film won the Academy Award for Best Picture in 2011?",
    correctAnswer: "b",
    a: "The Descendants",
    b: "The Artist",
    c: "Extremely Loud & Incredibly Close",
    d: "The Help",
  },
  {
    question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
    correctAnswer: "a",
    a: "Le Louvre",
    b: "Uffizi Museum",
    c: "British Museum",
    d: "Metropolitan Museum of Art",
  },
];

// DOM elements
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const questionEle = document.getElementById("question");
const buttonEl = document.getElementById("submitBtn");
const quiz = document.getElementById("quiz");
const reloadBtn = document.getElementById("reload");

let inputArr = document.querySelectorAll('input[name = "answer"]');

//Counter for current quizdata
let currentQuiz = 0;

//Do DeSelect options
const deSelect = () => {
  inputArr.forEach((input) => {
    input.checked = false;
  });
};

//Function that loads new quiz
const loadQuiz = () => {
  deSelect();
  let currentQuizData = quizData[currentQuiz];

  questionEle.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

const isSelected = () => {
  let selectedId = undefined;
  inputArr.forEach((input) => {
    if (input.checked) {
      selectedId = input.id;
    }
  });

  return selectedId;
};

//Counter to keep score
let score = 0;

buttonEl.addEventListener("click", () => {
  let answer = isSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correctAnswer) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h1>Thank You! <br> Your Score is: ${score}/${quizData.length}</h1>`;
      buttonEl.style.display = "none";
      reloadBtn.style.display = "block";
    }
  } else {
    alert("Please choose an option!");
  }
});

reloadBtn.addEventListener("click", () => {
  location.reload();
});
