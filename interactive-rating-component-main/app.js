let selectedRating=1

document.getElementById('rating-submit').addEventListener('click',()=>{
    selectedRating = document.querySelector('.radio-container input:checked').getAttribute("data-rating")
})