# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Select and submit a number rating
-   See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot1.jpg)
![](./screenshot2.jpg)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   JavaScript getElementById
-   JavaScript addEventListener
-   JavaScript toggle
-   JavaScript removeChild

### What I learned

```css
.proud-of-this-css {
    .resultCard {
        width: 30rem;
        height: 30rem;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        background: hsl(213, 19%, 18%);
        color: hsl(0, 0%, 100%);
        border-radius: 1.5rem;
        padding: 3rem;
    }
}
```

```js
const proudOfTheseFunc = () => {
    ratings.forEach((rate) =>
        rate.addEventListener("click", (e) => {
            rate = e.target.id;
            resultDisplay.innerHTML = rate;
        })
    );
};

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
```

### Continued development

meida queries

### Useful resources

-   [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
-   [Learn JavaScript by Building 7 Games](https://www.youtube.com/watch?v=ec8vSKJuZTk&t)

## Author

-   Website - [Akira](https://github.com/akiraafu?tab=repositories)
-   Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/akiraafu)
