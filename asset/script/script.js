document.getElementById('rating-star').innerHTML=
`<div class="centro">
<div>
    <p class="title-star">Tell us how it's going</p>
</div>
    <div>
    <p class="subtitle-star">From 0 to 10,how likely are you to recommend Epicode<br>
    to a friend or acolleague?
    </p>
    <div class="star-rating">
        <i class="fa fa-star" data-index="0"></i>
        <i class="fa fa-star" data-index="1"></i>
        <i class="fa fa-star" data-index="2"></i>
        <i class="fa fa-star" data-index="3"></i>
        <i class="fa fa-star" data-index="4"></i>
        <i class="fa fa-star" data-index="5"></i>
        <i class="fa fa-star" data-index="6"></i>
        <i class="fa fa-star" data-index="7"></i>
        <i class="fa fa-star" data-index="8"></i>
        <i class="fa fa-star" data-index="9"></i>
    </div>

</div>`

const stars = document.querySelectorAll(".star-rating i");

function setRating(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    setRating(index);
  });
  star.addEventListener("mouseover", () => {
    setRating(index);
  });
  star.addEventListener("mouseout", () => {
    setRating(-1);
  });
});