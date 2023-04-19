/*document.getElementById('rating-star').innerHTML=
`<div class="centro">
    <div>
        <p class="title-star">Tell us how it's going</p>
    </div>
    <div>
        <p class="subtitle-star">From 0 to 10,how likely are you to recommend Epicode<br>
        to a friend or acolleague?
        </p>
    </div>
    <div class="star-rating">
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
        <div class="fastar"> </div>
    </div>
    <div>
    <p class="subtitle-star">Leave us an open feedback about your experience so far
    </p>
    </div>
    <div class= cont-text>
    <input class="textarea" type="text" placeholder="Write your comment here">
    </div>
    </div>
    <div class="cont-bottone2">
        <button class="bottone2" onclick="window.open('https://epicode.com/it/community/')">MORE INFO</button>
        
    </div>
</div>`*/


let logo = document.querySelector('.background');  
let bodyTemp = document.querySelector('.home2');
//   creazione contenitore
let allContent = document.createElement("div");
allContent.id = "rating-star";
bodyTemp.appendChild(allContent);

// creazione blocco centrale
let bloccoCentro = document.createElement("div");
bloccoCentro.className = "centro";
allContent.appendChild(bloccoCentro);
//blocco titolo
let bloccoTitle = document.createElement("div");
bloccoTitle.className = "cont-title";
allContent.appendChild(bloccoTitle);

let titolo = document.createElement("p");
titolo.className = "title star";
allContent.append(titolo);
bloccoTitle.appendChild(titolo)

let flag;
