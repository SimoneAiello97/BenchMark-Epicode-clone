let timerContainer = document.createElement("div");
timerContainer.id = "timer-container";

let timer = document.createElement("div");
timer.classList.add("timer");
timer.id = "timer";

let seconds = document.createElement("p");
seconds.classList.add("z-index");
seconds.id = "seconds";

timer.appendChild(seconds);
timerContainer.appendChild(timer);

bodyTemp.appendChild(timerContainer);




function countdown() {

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
    let timer = setInterval(function(){

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
    seconds.innerHTML = countdownNumber;
    function myTimer() {
        countdownNumber -= 1
        seconds.innerHTML = countdownNumber;
    function myStop(){
        clearInterval(myInterval);
    }
    if(countdownNumber == 0){
        myStop();
        nextQuestion();}
    };
}
 