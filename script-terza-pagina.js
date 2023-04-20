let bodyTemp = document.querySelector('.background');

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

//codice
firstP.textContent = "Results";
secondP.textContent = "The summary of your answers:"

pResult1.textContent =  "Correct"
pResult2.textContent = "%"
pResult3.textContent = "/10 questions"
pResult4.textContent =   "Wrong";
pResult5.textContent = "%";
pResult6.textContent =  "/10 questions"

buttonRate.textContent = "RATE US";