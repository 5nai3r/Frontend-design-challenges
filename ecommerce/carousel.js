const imageContainer = document.getElementById('imageContainer');
const thumbnails = document.querySelectorAll('.carousel img');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');


const updateImage = (index) => {
    const selectedThumbnail = thumbnails[index];
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));
    selectedThumbnail.classList.add('selected');
    const imagePath = selectedThumbnail.src.replace('-thumbnail', '');
    imageContainer.src = imagePath;
};

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateImage(index);
    });
});

nextButton.addEventListener('click', () => {
    const currentIndex = Array.from(thumbnails).findIndex(thumb => thumb.classList.contains('selected'));
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    updateImage(nextIndex);
});

previousButton.addEventListener('click', () => {
    const currentIndex = Array.from(thumbnails).findIndex(thumb => thumb.classList.contains('selected'));
    const previousIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateImage(previousIndex);
});