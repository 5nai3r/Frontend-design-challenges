const lightbox = document.querySelector(".lightbox");
const imageContainer = document.getElementById('imageContainer');
const lightboxImageContainer = document.getElementById('lightboxImageContainer');
const thumbnails = document.querySelectorAll('.carousel img');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const lightboxNextButton = document.querySelector('.lightbox .next');
const lightboxPreviousButton = document.querySelector('.lightbox .previous');

const updateImage = (index) => {
    const selectedThumbnail = thumbnails[index];
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));
    selectedThumbnail.classList.add('selected');
    const imagePath = selectedThumbnail.src.replace('-thumbnail', '');
    imageContainer.src = imagePath;
    lightboxImageContainer.src = imagePath;
};

const handleThumbnailClick = (index) => {
    updateImage(index);
};

const handleArrowClick = (direction) => {
    const currentIndex = Array.from(thumbnails).findIndex(thumb => thumb.classList.contains('selected'));
    const newIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
    updateImage(newIndex);
};

const handleLightboxClick = (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
};

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', (e) => {
        e.stopPropagation();
        handleThumbnailClick(index);
    });
});

nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    handleArrowClick(1);
});

previousButton.addEventListener('click', (e) => {
    e.stopPropagation();
    handleArrowClick(-1);
});

lightboxNextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    handleArrowClick(1);
});

lightboxPreviousButton.addEventListener('click', (e) => {
    e.stopPropagation();
    handleArrowClick(-1);
});

lightbox.addEventListener('click', handleLightboxClick);

imageContainer.addEventListener('click', () => {
    lightbox.classList.remove("hidden");
});
