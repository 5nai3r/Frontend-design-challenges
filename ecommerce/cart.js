const cartToggle = document.querySelector('#cart')
const cartContainer = document.querySelector('.cart')
const bodyElement = document.body

cartToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    cartContainer.classList.toggle("hidden")
})

cartContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})


bodyElement.addEventListener("click", () => {
    cartContainer.classList.add("hidden")
})

// To-do Add  cart loginc and count tracking