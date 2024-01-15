# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./preview.jpg)



### Links

- Solution URL: [Source code](https://github.com/5nai3r/Frontend-design-challenges/tree/master/space-tourism)
- Live Site URL: [Live site](https://5nai3r.github.io/Frontend-design-challenges/space-tourism/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this project, I reinforced my understanding of responsive design principles and sharpened my skills in:

- Implementing semantic HTML5 markup for better accessibility and SEO.
- Leveraging CSS custom properties for efficient styling.
- Utilizing Flexbox and CSS Grid for layout flexibility.
- Adopting a mobile-first workflow to ensure a solid foundation for responsiveness.

```html
<picture data-id="1">
      <source media="(min-width: 48.1rem)" srcset="assets/technology/image-launch-vehicle-portrait.jpg">
      <img src="assets/technology/image-launch-vehicle-landscape.jpg" alt="" loading="lazy">
  </picture>
```
```css
.number-indicators>* {
    aspect-ratio: 1;
    font-size: var(--indicators-size, 2rem);
    width: 2.5em;
    cursor: pointer;
    border: 1px solid hsl(var(--clr-white) / .25);
    border-radius: 50%;
    padding: .5em;
    background: transparent;
    color: hsl(var(--clr-white));
}
```
```js
function handleIndicatorClick(container, e) {
    const targetButton = e.target;
    if (!targetButton.dataset.id) return;


    container.querySelectorAll('button').forEach(function (element) {
        element.classList.remove('selected');
    });
    targetButton.classList.add('selected');

    const targetId = targetButton.dataset.id;
    const allImages = document.querySelectorAll('main picture');
    const allContent = document.querySelectorAll('main article');
    allImages.forEach(function (image) {
        image.dataset.id !== targetId ? image.setAttribute('hidden', 'true') : image.removeAttribute('hidden');
    });
    allContent.forEach(function (content) {
        content.dataset.id !== targetId ? content.setAttribute('hidden', 'true') : content.removeAttribute('hidden');
    });
}
```

### Continued development

While I achieved a 99/100 score on Lighthouse and successfully implemented the required features, I plan to focus on the following areas for future development:

Exploring more advanced CSS techniques and animations.
Enhancing interactivity with JavaScript for a smoother user experience.
Implementing additional accessibility features to improve inclusivity.


## Author

- Website - [C. ismail](#)
- Frontend Mentor - [@5nai3r](https://www.frontendmentor.io/profile/5nai3r)


## Acknowledgments

I'd like to express my gratitude to the Frontend Mentor community. 
Special thanks to Kevin powell for his insightful articles and videos that assisted me in mastering specific concepts.
