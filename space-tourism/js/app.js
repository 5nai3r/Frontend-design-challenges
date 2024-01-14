const headerContainer = document.querySelector(".primary-header")
const navToggleButton = document.querySelector(".nav-toggle")

const tabListContainer = document.querySelector('.tab-list')
const numberIndicatorContainer = document.querySelector('.number-indicators')
const dotIndicatorContainer = document.querySelector('.dot-indicators')

navToggleButton.addEventListener('click', () => {
    headerContainer.dataset.expanded = headerContainer.dataset.expanded == "true" ? "false" : "true"
})




tabListContainer?.addEventListener('click', (e) => {
    tabListContainer.querySelectorAll('button').forEach(function (element) {
        element.classList.remove('selected');
    });
    const targetButton = e.target
    targetButton.classList.add('selected')

    const targetId = targetButton.dataset.id
    const allImages = document.querySelectorAll('main img');
    const allContent = document.querySelectorAll('main article');
    allImages.forEach(function (image) {
        image.dataset.id != targetId ? image.setAttribute('hidden', 'true') : image.removeAttribute('hidden')
    });
    allContent.forEach(function (content) {
        content.dataset.id != targetId ? content.setAttribute('hidden', 'true') : content.removeAttribute('hidden')
    });

})

dotIndicatorContainer?.addEventListener('click', (e) => {
    dotIndicatorContainer.querySelectorAll('button').forEach(function (element) {
        element.classList.remove('selected');
    });
    const targetButton = e.target
    targetButton.classList.add('selected')

    const targetId = targetButton.dataset.id
    const allImages = document.querySelectorAll('main img');
    const allContent = document.querySelectorAll('main article');
    allImages.forEach(function (image) {
        image.dataset.id != targetId ? image.setAttribute('hidden', 'true') : image.removeAttribute('hidden')
    });
    allContent.forEach(function (content) {
        content.dataset.id != targetId ? content.setAttribute('hidden', 'true') : content.removeAttribute('hidden')
    });

})

numberIndicatorContainer?.addEventListener('click', (e) => {
    numberIndicatorContainer.querySelectorAll('button').forEach(function (element) {
        element.classList.remove('selected');
    });
    const targetButton = e.target
    targetButton.classList.add('selected')

    const targetId = targetButton.dataset.id
    const allImages = document.querySelectorAll('main picture');
    const allContent = document.querySelectorAll('main article');
    allImages.forEach(function (image) {
        image.dataset.id != targetId ? image.setAttribute('hidden', 'true') : image.removeAttribute('hidden')
    });
    allContent.forEach(function (content) {
        content.dataset.id != targetId ? content.setAttribute('hidden', 'true') : content.removeAttribute('hidden')
    });

})