// let cards = document.querySelectorAll(".course");
// let circle = document.querySelectorAll(".cricle");

// cards.array.forEach(card => {
//     card.addEventListener("mouseover", function() {
//         circle.style.backgroundColor = "green"

//     })

// });



// card.addEventListener("mouseover", function() {
//     circle.style.backgroundColor = "green";

// })
// card.addEventListener("mouseout", function() {
//         circle.style.backgroundColor = "grey";
//     })
// counters 

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 10; // Adjust the speed as needed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});