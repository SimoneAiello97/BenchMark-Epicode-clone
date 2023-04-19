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
subtitolo.textContent=`From 0 to 10,how likely are you to recommend EPICODE`;
bloccoCentro.append(subtitolo);

let subtitolo2 = document.createElement("p");
subtitolo2.classList.add("subtitle-star2");
subtitolo2.textContent=`to a friend or a colleague?`;
subtitolo.append(subtitolo2);

let starRating = document.createElement("div");
starRating.classList.add("star-rating");

bloccoCentro.append(starRating);

let stella5 = document.createElement("div");
stella5.classList.add("fastar");
starRating.append(stella5);

let subp = document.createElement("p");
subp.classList.add("subtitle-star3");
subp.textContent="Leave us an open feedback about your experience so far";
bloccoCentro.append(subp);

let context = document.createElement("div");
context.classList.add("cont-text");
bloccoCentro.append(context);

let input = document.createElement("input");
input.classList.add("textarea");
input.placeholder="Write your comment here"
context.append(input);


let contbottone = document.createElement("div");
contbottone.classList.add("cont-bottone2");
bloccoCentro.append(contbottone);

let bottone = document.createElement("button");
bottone.classList.add("bottone2");
bottone.textContent="MORE INFO";
bottone.onclick=function(){window.open('https://epicode.com/it/community/', '_blank');}

contbottone.append(bottone);

// fare 10 stelle
for (let i = 0; i < 10; i++) {
    let stella5 = document.createElement("div");
    stella5.classList.add("fastar");
    starRating.append(stella5);
  }




// rating stars
const starContainer = document.querySelector('#star-container');
let selectedStars = [];


const stars = document.querySelectorAll('.fastar');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    if (star.classList.contains('selected')) {
      star.classList.remove('selected');
      selectedStars.splice(selectedStars.indexOf(index), 1);
    } else {
      star.classList.add('selected');
      selectedStars.push(index);
    }
  });
});