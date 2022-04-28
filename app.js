document.getElementById("resultCard").style.display = "none";
document.getElementById("rateCard").style.display = "gird";

const resultDisplay = document.getElementById("result");
const ratings = document.querySelectorAll(".rate");
let result;

ratings.forEach((rate) =>
    rate.addEventListener("click", (e) => {
        rate = e.target.id;
        resultDisplay.innerHTML = " " + rate;
    })
);

ratings.forEach((rate) => {
    rate.addEventListener("click", function () {
        rate.style.backgroundColor = "hsl(25, 97%, 53%)";
    });
});

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
    let rateCard = document.getElementById("rateCard");
    rateCard.classList.toggle("rateCard");
    while (rateCard.firstChild) {
        rateCard.removeChild(rateCard.firstChild);
    }
    document.getElementById("resultCard").style.display = "grid";
});
