const headerContainer = document.querySelector("header")
const navToggleButton = document.querySelector("#nav-toggle")


navToggleButton.addEventListener('click', () => {
    headerContainer.dataset.expanded = headerContainer.dataset.expanded == "true" ? "false" : "true"
})