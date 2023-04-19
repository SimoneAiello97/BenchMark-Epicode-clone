
// array con domande
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
    
      // creazione blocchi del dom
    let blocco = document.getElementById("timer");
    let para = document.createElement('p');
    let para1 = document.createElement('p');
    let seconds = document.getElementById('seconds');
    para.innerText = 'SECONDS';
    para1.innerText = 'REMAINING';
    para.classList.add('para');
    para1.classList.add('para');
    blocco.appendChild(para);
    blocco.appendChild(seconds);
    blocco.appendChild(para1);

  let timer;

    // il cerchio che gira
    function countdown() {

    // definisce l'intervallo con cui si riempie il cerchio
    let interval;

    // SELEZIONARE LA DOMANDA GIUSTA
    for (let question of questions){
        switch (question.difficulty) {
            case 'easy':
                interval = 83;
                break;
            case 'medium':
                interval = 166;
                break;
            case 'hard':
                interval = 250;
        }
    }

    let number = 0;
    timer = setInterval(function(){
    blocco.style.backgroundImage = `conic-gradient(rgba(255, 255, 255, 0.5) ${number}deg, #00ffff 0deg)`;
    number >= 360 ? number += 0 : number += 1;}, interval); 
}


let myButton = document.getElementById('button');
myButton.addEventListener('click', function() {
myStop();
countdown();
trovaNumero();
})

function myStop(){
  clearInterval(myInterval);
  clearInterval(timer);
}

let countdownNumber;
let myInterval;
function trovaNumero(){
for (let question of questions){
  switch (question.difficulty) {
      case 'easy':
          countdownNumber = 30;
          break;
      case 'medium':
          countdownNumber = 60;
          break;
      case 'hard':
          countdownNumber = 90;
  }
}
seconds.innerHTML = countdownNumber;

myInterval = setInterval(function() {
  countdownNumber -= 1;
  seconds.innerHTML = countdownNumber;
  if(countdownNumber == 0){
    myStop();
}
}, 1000);

}