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

//dichiarazione variabili globali
let logo;
let bodyTemp;
let allContent;
let bloccoDomanda;
let questionsTitle;
let bloccoRisposta;
let bloccoBottoni;
let footer;
let footerText;
let span;
    //  array domande risposte
let allAnswers =[];
let allQuestions = [];
let onlyCorrectAnswer = [];

let numeroCasuale
let selectedQuestion
let givenAnswer = [];
let correctAnswer
//let displayedQuestions = [];//da eliminare + richiamo

  creation();
  function creation() {
    //console.log(questions);
    //CREAZIONE ELEMENTI/STRUTTURA PAGINA
    
    // TEMPORANEO
    logo = document.querySelector('#logo');  
    bodyTemp = document.querySelector('#temp');
    //   creazione contenitore
    allContent = document.createElement("div");
    allContent.id = "container";
    bodyTemp.appendChild(allContent);
    
    // creazione blocco domande
    bloccoDomanda = document.createElement("div");
    bloccoDomanda.id = "question-container";
    allContent.appendChild(bloccoDomanda);
    
    questionsTitle = document.createElement("p");
    questionsTitle.className = "questions";
    allContent.append(bloccoDomanda);
    bloccoDomanda.appendChild(questionsTitle);
    
    //  creazione  blocco risposta
    bloccoRisposta = document.createElement("div");
    bloccoRisposta.className = "answers-container";
    allContent.append(bloccoRisposta);
    
    // creazione bottoni
    bloccoBottoni  =  document.createElement("div");
    bloccoBottoni.id = "button-container"
    bloccoRisposta.append(bloccoBottoni);
    
    //  creazione blocco footer
    footer = document.createElement("div");
    footer.id = "footer";
    allContent.append(footer);
    footerText = document.createElement("p");
    footer.append(footerText);
    footerText.textContent = `QUESTION 1`
    span = document.createElement("span");
    footer.append(span);
    span.textContent = "/10"

    // CODICE
    for (let domanda of questions) {
      allQuestions.push(domanda.question)
      domanda.incorrect_answers.push(domanda.correct_answer)
      allAnswers.push(domanda.incorrect_answers)
      
    };
  
    //numero casuale per randomicizzazione domande
    numeroCasuale = Math.floor(Math.random() * allQuestions.length);
  
    selectedQuestion = allAnswers[numeroCasuale]; // risposte per le relativa domanda
  
  
    //randomicizzare ordine risposte
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }    
    shuffle(selectedQuestion);
  
    // testo domanda  display
    questionsTitle.textContent = allQuestions[numeroCasuale];
    
    //controllo prima domanda
    correctAnswer = allAnswers[numeroCasuale].find(answer => answer === questions[numeroCasuale].correct_answer);
    onlyCorrectAnswer.push(correctAnswer);

    //creazione bottoni per ogni risposta, SOLO PRIMA DOMANDA
      selectedQuestion.forEach(answer => {
        let buttons = document.createElement("button");
        buttons.textContent = answer;
        bloccoBottoni.appendChild(buttons);
        buttons.addEventListener("click", function() {
          handleButtonClick(event);
          controlAnswer();
          nextQuestion();
        });
      });

    // next question & next risposte
    function nextQuestion() {  
        //eliminazione domanda(e relative risposte) già vista
        allQuestions.splice(numeroCasuale, 1);
        allAnswers.splice(numeroCasuale, 1);
        questions.splice(numeroCasuale, 1);
        //creazione nuovo numero casuale
        if (allQuestions.length !== 0){
        numeroCasuale = Math.floor(Math.random() * allQuestions.length);
        //nuovo shuffle risposte
        selectedQuestion = allAnswers[numeroCasuale];
        shuffle(selectedQuestion);
        //console.log(numeroCasuale);
        //console.log(questions);
        //console.log(allAnswers);
        //ricarca e creazione array per controllo risposte
        correctAnswer = allAnswers[numeroCasuale].find(answer => answer === questions[numeroCasuale].correct_answer);
        onlyCorrectAnswer.push(correctAnswer);
        console.log(onlyCorrectAnswer);
        //nuova domanda da mostrare
        questionsTitle.textContent = allQuestions[numeroCasuale];
        //distruzione vecchi bottoni
        let eliminareBottoni = document.querySelectorAll("button");
        eliminareBottoni.forEach((button) => button.remove());
        //creazioni nuovi bottoni
        allAnswers[numeroCasuale].forEach(answer => {
            let buttons = document.createElement("button");
            buttons.textContent = answer;
            bloccoBottoni.appendChild(buttons);
            buttons.addEventListener("click", function() {
            handleButtonClick(event);
            nextQuestion();
            });
        }); 
        footerText.textContent = `QUESTION ${Math.abs(allQuestions.length - 10)+1}`
        //countdown();
        } else {
        controlAnswer();
        allContent.remove();
        //nota: funzione pagina 3
        }
    }

    //funzione di cattura testo della risposta data
    function handleButtonClick(event) {
        let buttonText = event.target.textContent;
        console.log(buttonText);
        givenAnswer.push(buttonText);
        //displayedQuestions.push(allQuestions[numeroCasuale]); da eliminare + dichiarazione
    }
      
    //funzione di controllo
    function controlAnswer() {
        let correctCount = 0;
        let wrongCount = 0;
      
        for (let i = 0; i < givenAnswer.length; i++) {
          if (onlyCorrectAnswer.includes(givenAnswer[i])) {
            correctCount++;
          } else {
            wrongCount++;
          }
        }
      
        console.log(correctCount);
        console.log(wrongCount);
    }
}//chiusura  creation