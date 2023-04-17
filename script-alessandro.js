const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

//console.log(questions);
//CREAZIONE ELEMENTI/STRUTTURA PAGINA

// TEMPORANEO
let logo = document.querySelector('#logo');  
let bodyTemp = document.querySelector('#temp');
//   creazione contenitore
let allContent = document.createElement("div");
allContent.id = "container";
bodyTemp.appendChild(allContent);

// creazione blocco domande
let bloccoDomanda = document.createElement("div");
bloccoDomanda.id = "question-container";
allContent.appendChild(bloccoDomanda);

let questionsTitle = document.createElement("p");
questionsTitle.className = "questions";
allContent.append(bloccoDomanda);
bloccoDomanda.appendChild(questionsTitle);

//  creazione  blocco risposta
let bloccoRisposta = document.createElement("div");
bloccoRisposta.className = "answers-container";
allContent.append(bloccoRisposta);

// creazione bottoni
let bloccoBottoni  =  document.createElement("div");
bloccoBottoni.id = "button-container"
bloccoRisposta.append(bloccoBottoni);


//  codice  
let allAnswers =[];
let allQuestions = [];

for (let domanda of questions) {
allQuestions.push(domanda.question)
domanda.incorrect_answers.push(domanda.correct_answer)
allAnswers.push(domanda.incorrect_answers)
};

//console.log(allQuestions);
//console.log(allAnswers);

//numero casuale per randomicizzazione domande
let numeroCasuale = Math.floor(Math.random() * allQuestions.length);
console.log(numeroCasuale);
// facciamo lo slice della domanda che abbiamo appena visualizzato (anche delle risposte).

let selectedQuestion = allAnswers[numeroCasuale];
console.log(selectedQuestion);

//randomicizzare ordine risposte
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
        //console.log(shuffle(allAnswers[numeroCasuale]));
shuffle(selectedQuestion);

//creazione bottoni per ogni risposta
selectedQuestion.forEach(answer => {
    let buttons = document.createElement("button");
    buttons.textContent = answer;
    bloccoBottoni.appendChild(buttons);
});

// testo domanda  display
questionsTitle.textContent = allQuestions[numeroCasuale];
