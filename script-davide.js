/*
function countdown() {
  let timerContainer = document.createElement("div");
  timerContainer.id = "timer-container";
  let temp = document.querySelector('#temp')
  temp.appendChild(timerContainer);

  let timer = document.createElement("div");
  timer.classList.add("timer");
  timer.id = "timer";
  timerContainer.append(timer);

  let seconds = document.createElement("p");
  seconds.classList.add("z-index");
  seconds.id = "seconds";
  timer.append(seconds);
  
  

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
    let ced = setInterval(function(){

    blocco.style.backgroundImage = `conic-gradient(rgba(255, 255, 255, 0.5) ${number}deg, #00ffff 0deg)`;
    number >= 360 ? number += 0 : number += 1;}, interval);

    let myInterval = setInterval(myTimer, 1000);
    
    // definisce il countdown
    let countdownNumber;
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
    seconds.innerHTML = parseInt(countdownNumber);
    function myTimer() {
        countdownNumber -= 1
        seconds.innerHTML = countdownNumber;
      if(countdownNumber === 0){
        myStop();
        }
      }
      function myStop(){
          clearInterval(myInterval);
          let children = timerContainer.querySelectorAll('*')
          children.forEach(child=>child.textContent= null)

      }
    };
    function stop () {
      let children = timerContainer.querySelectorAll('*')
          children.forEach(child=>child.textContent='')
    }
*/

let myInterval;
let timerInterval;

function startQuiz() {
    // Creazione del timer
    let timerContainer = document.createElement("div");
    timerContainer.id = "timer-container";
    let temp = document.querySelector('#temp')
    temp.appendChild(timerContainer);
  
    let timer = document.createElement("div");
    timer.classList.add("timer");
    timer.id = "timer";
    timerContainer.append(timer);
  
    let seconds = document.createElement("p");
    seconds.classList.add("z-index");
    seconds.id = "seconds";
    timer.append(seconds);
  
    // Imposta il countdown
    let countdownNumber = 30;
    seconds.textContent = countdownNumber;
  
    // Inizia l'animazione del cerchio
    let number = 0;
    let interval = 83;
    let timerInterval = setInterval(function(){
      timer.style.backgroundImage = `conic-gradient(rgba(255, 255, 255, 0.5) ${number}deg, #00ffff 0deg)`;
      number >= 360 ? number += 0 : number += 1;
    }, interval);
  
    // Definisce il countdown
    let myInterval = setInterval(myTimer, 1000);
    function myTimer() {
      countdownNumber -= 1
      seconds.textContent = countdownNumber;
      if(countdownNumber === 0){
        myStop();
      }
    }
    function myStop(){
      clearInterval(myInterval);
      clearInterval(timerInterval);
      timerContainer.remove();
      nextQuestion()
    }
    
  }

  function ferma(){
    document.querySelector('#timer-container').remove()
    nextQuestion()
  }

