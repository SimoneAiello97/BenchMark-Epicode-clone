
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


// let myButton = document.getElementById('button');
// myButton.addEventListener('click', function() {
// myStop();
// countdown();
// trovaNumero();
// })

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
    nextQuestion();
    countdown();
    trovaNumero();
}
}, 1000);

}
