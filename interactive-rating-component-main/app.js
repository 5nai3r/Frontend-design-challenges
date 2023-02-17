let selectedRating=1

document.getElementById('rating-submit').addEventListener('click',()=>{
    selectedRating = document.querySelector('.radio-container input:checked').getAttribute("data-rating")
    document.getElementById("user-rating").innerText = selectedRating
    document.querySelector(".rating-component .rating-page").classList.add("hidden")
    document.querySelector(".rating-component .thanks-page").classList.remove("hidden")
})