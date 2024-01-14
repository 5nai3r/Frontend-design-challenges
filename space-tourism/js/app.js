const headerContainer = document.querySelector(".primary-header")
const navToggleButton = document.querySelector(".nav-toggle")

const tabListContainer = document.querySelector('.tab-list')
const numberIndicatorContainer = document.querySelector('.number-indicators')
const dotIndicatorContainer = document.querySelector('.dot-indicators')

navToggleButton.addEventListener('click', () => {
    headerContainer.dataset.expanded = headerContainer.dataset.expanded == "true" ? "false" : "true"
})



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

tabListContainer?.addEventListener('click', (e) => {
    handleIndicatorClick(tabListContainer, e);
})

dotIndicatorContainer?.addEventListener('click', (e) => {
    handleIndicatorClick(dotIndicatorContainer, e);
})

numberIndicatorContainer?.addEventListener('click', (e) => {
    handleIndicatorClick(numberIndicatorContainer, e);
})


class SwipeHandler {
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.threshold = options.threshold || 50;

        this.element.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.element.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
    }

    handleTouchEnd(e) {
        this.endX = e.changedTouches[0].clientX;
        this.endY = e.changedTouches[0].clientY;

        const deltaX = this.endX - this.startX;
        const deltaY = this.endY - this.startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > this.threshold) {
                if (this.options.onSwipeRight) this.options.onSwipeRight();
            } else if (deltaX < -this.threshold) {
                if (this.options.onSwipeLeft) this.options.onSwipeLeft();
            }
        } else {
            // Vertical swipe
            if (deltaY > this.threshold) {
                if (this.options.onSwipeDown) this.options.onSwipeDown();
            } else if (deltaY < -this.threshold) {
                if (this.options.onSwipeUp) this.options.onSwipeUp();
            }
        }
    }
}

const swipeHandler = new SwipeHandler(document.getElementById('main'), {
    threshold: 75,
    onSwipeRight: () => {
        const currentSelectedButton = document.querySelector("button.selected")
        currentSelectedButton.previousElementSibling?.click()
    },
    onSwipeLeft: () => {
        const currentSelectedButton = document.querySelector("button.selected")
        currentSelectedButton.nextElementSibling?.click()
    },
});