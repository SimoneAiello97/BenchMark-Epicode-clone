function countdown() {let blocco = document.getElementById("timer");

let n = 0
let timer = setInterval(function(){
    
    
   
    blocco.style.backgroundImage = 'conic-gradient(#00ffff '+ n +'deg, #D20094 0deg)'

            if(n >= 360){
                n += 0;
            }else{
                n += 1;
            }

        }, 30);

let myInterval = setInterval(myTimer, 1000);
let seconds = document.getElementById('seconds');
let number = 30;
function myTimer() {
    number -= 1
    seconds.innerHTML = number;
    console.log(number);
};

function myStop(){
    clearInterval(myInterval);
}
if(number == 0){
    myStop()
}
}
countdown()
 