

// let bodyTemp = document.querySelector('.background');
let newContainer = document.createElement('div');


newContainer.id = 'content-container';

let firstSection = document.createElement('div');
firstSection.id = "title";

let secondSection = document.createElement('div');
secondSection.id = "result";

let thirdSection = document.createElement('div');
thirdSection.id = "rate";

let firstP = document.createElement('p');
firstP.classList.add("bold");

let secondP = document.createElement('p');
secondP.classList.add("summary");

let firstResult = document.createElement('div');
firstResult.classList.add("perc-result");

let secondResult = document.createElement('div');
secondResult.id = "chart";

let thirdResult = document.createElement('div');
thirdResult.classList.add("perc-result");

let pResult1 = document.createElement('p');
pResult1.classList.add("answer");

let pResult2 = document.createElement('p');
pResult2.classList.add("bold");

let pResult3 = document.createElement('p');
pResult3.classList.add("questions");

let pResult4 = document.createElement('p');
pResult4.classList.add("answer");

let pResult5 = document.createElement('p');
pResult5.classList.add("bold");

let pResult6 = document.createElement('p');
pResult6.classList.add("questions");

let buttonRate = document.createElement("button");

let congrat = document.createElement('p');
congrat.classList.add('congrat');

let passed = document.createElement('p');
passed.classList.add('passed');

let certificate = document.createElement('p');
certificate.classList.add('certificate');

function terzaPagina(){

//append
bodyTemp.append(newContainer);

newContainer.append(firstSection)
newContainer.append(secondSection)
newContainer.append(thirdSection)

firstSection.append(firstP)
firstSection.append(secondP)

secondSection.append(firstResult)
secondSection.append(secondResult)
secondSection.append(thirdResult)
firstResult.append(pResult1)
firstResult.append(pResult2)
firstResult.append(pResult3)
thirdResult.append(pResult4)
thirdResult.append(pResult5)
thirdResult.append(pResult6)

thirdSection.append(buttonRate)

secondResult.append(congrat);
secondResult.append(passed);
secondResult.append(certificate);

//codice
firstP.textContent = "Results";
secondP.textContent = "The summary of your answers:"


if(correctCount > wrongCount){
    congrat.textContent = 'Congratulations!';
    passed.textContent = 'You passed the exam';
    certificate.innerHTML = 'We\'ll send you the certificate in few minutes. <br> Check your email (including promotion / spam folder)';
}
else {
    congrat.textContent = 'Oh No';
    passed.textContent = 'You failed the exam :(';
    certificate.innerHTML = 'Get in touch with your teacher in order to retry the exam';
}

pResult1.textContent =  "Correct"
pResult2.textContent = `${(correctCount / onlyCorrectAnswer.length) * 100} %`
pResult3.textContent = `${correctCount}/10 questions`
pResult4.textContent =   "Wrong";
pResult5.textContent = `${(wrongCount / onlyCorrectAnswer.length) * 100} %`;
pResult6.textContent =  `${wrongCount}/10 questions`

buttonRate.textContent = "RATE US";

//dare valore al grafico
secondResult.style.backgroundImage = `conic-gradient(#d20094 ${wrongCount * 36}deg, #00ffff 0deg)`;


buttonRate.addEventListener('click', function(){
    destruction();
    pagina4();
});
}


function destruction() {
    newContainer.remove();
}