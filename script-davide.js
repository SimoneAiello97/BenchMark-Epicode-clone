let blocco = document.getElementById("timer");

let n = 0
let timer = setInterval(function(){
    
    
   
    blocco.style.backgroundImage = 'conic-gradient(#00ffff '+ n +'deg, #D20094 0deg)'

            if(n >= 360){
                n += 0;
            }else{
                n += 1;
            }

        }, 30);