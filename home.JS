let card = document.querySelector(".course");
let circle = document.querySelector(".cricle");
card.addEventListener("mouseover", function() {
    circle.style.backgroundColor = "green";
})
card.addEventListener("mouseout", function() {
    circle.style.backgroundColor = "grey";
})