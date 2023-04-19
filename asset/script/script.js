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
        <button class="bottone2" onclick="verificaCheckbox()">MORE INFO</button>
    </div>
</div>`*/

//   creazione contenitore
let body = document.querySelector('#rating-star');


// creazione blocco centrale
let bloccoCentro = document.createElement("div");
bloccoCentro.classList.add("centro");
body.append(bloccoCentro);

let titolo = document.createElement("p");
titolo.classList.add("title-star");
titolo.textContent="Tell us how it's going";
bloccoCentro.append(titolo);

let subtitolo = document.createElement("p");
subtitolo.classList.add("subtitle-star");
subtitolo.textContent=`From 0 to 10,how likely are you to recommend Epicode to a friend or acolleague?`;
bloccoCentro.append(subtitolo);

let starRating = document.createElement("div");
starRating.classList.add("star-rating");
bloccoCentro.append(starRating);

let stella = document.createElement("div");
stella.classList.add("fastar");
starRating.append(stella);

let stella1 = document.createElement("div");
stella1.classList.add("fastar");
starRating.append(stella1);

let stella2 = document.createElement("div");
stella2.classList.add("fastar");
starRating.append(stella2);

let stella3 = document.createElement("div");
stella3.classList.add("fastar");
starRating.append(stella3);

let stella4 = document.createElement("div");
stella4.classList.add("fastar");
starRating.append(stella4);

let stella5 = document.createElement("div");
stella5.classList.add("fastar");
starRating.append(stella5);

let stella6 = document.createElement("div");
stella6.classList.add("fastar");
starRating.append(stella6);

let stella7 = document.createElement("div");
stella7.classList.add("fastar");
starRating.append(stella7);

let stella8 = document.createElement("div");
stella8.classList.add("fastar");
starRating.append(stella8);

let stella9 = document.createElement("div");
stella9.classList.add("fastar");
starRating.append(stella9);

let subp = document.createElement("p");
subp.classList.add("subtitle-star");
subp.textContent="Leave us an open feedback about your experience so far";
bloccoCentro.append(subp);

let context = document.createElement("div");
context.classList.add("cont-text");
bloccoCentro.append(context);

let input = document.createElement("input");
input.classList.add("textarea");
context.append(input);


let contbottone = document.createElement("div");
contbottone.classList.add("cont-bottone2");
bloccoCentro.append(contbottone);

let bottone = document.createElement("button");
bottone.classList.add("bottone2");
bottone.textContent="MORE INFO";
contbottone.append(bottone);


