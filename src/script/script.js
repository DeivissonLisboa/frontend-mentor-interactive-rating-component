const RATINGS = document.querySelectorAll(".ratings button")
const RATING_CARD = document.getElementById("rating")
const THANKS_CARD = document.getElementById("thanksMessage")
const USER_RATING_SPAN = document.getElementById("userRating")
const SUBMIT_BUTTON = document.querySelector(".submit-btn")
let selectedRating

RATINGS.forEach((rating) => {
  rating.addEventListener("click", () => {
    RATINGS.forEach((ratingEl) => (ratingEl.dataset.status = ""))

    rating.dataset.status = "selected"
    selectedRating = rating.innerText
  })
})

SUBMIT_BUTTON.addEventListener("click", () => {
  RATING_CARD.dataset.status = "hidden"
  THANKS_CARD.dataset.status = ""
  USER_RATING_SPAN.innerHTML = selectedRating
})
