const ratings = document.querySelectorAll(".rate");
ratings.forEach((rate) => {
    rate.addEventListener("click", function () {
        rate.style.backgroundColor = "hsl(25, 97%, 53%)";
    });
});

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
    let contentP = document.getElementById("text");
    contentP.innerHTML =
        "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Thank you!";
});

// button.addEventListener("click", function() {
//     const newContainer = document.createElement("div");
//     newContainer.classList.add("container");
//     const h3 = document.createElement("h3");
//     h3.textContent = "You selected out of 5";
//     const h2 = document.createElement("h2");
//     h2.textContent = "Thank you!";
//     const p = document.createElement("p");
//     p.classList.add("thankYou");
//     p.textContent =
//         "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
//     document.body.appendChild(newContainer);
//     newContainer.appendChild(h3);
//     newContainer.appendChild(h2);
//     newContainer.appendChild(p);
// })
