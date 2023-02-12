const RATINGS = document.querySelectorAll("input[type='radio']")
const RATING_CARD = document.getElementById("rating")
const THANKS_CARD = document.getElementById("thanksMessage")
const USER_RATING_SPAN = document.getElementById("userRating")
const SUBMIT_BUTTON = document.querySelector(".submit-btn")
let selectedRating

RATINGS.forEach((rating) => {
  rating.checked = false

  rating.addEventListener("input", () => {
    selectedRating = rating.name

    RATINGS.forEach((radio) => {
      radio.checked = false
      radio.parentNode.dataset.status = ""
    })

    rating.checked = true
    rating.parentNode.dataset.status = "selected"
  })
})

SUBMIT_BUTTON.addEventListener("click", (e) => {
  e.preventDefault()
  RATING_CARD.dataset.status = "hidden"
  THANKS_CARD.dataset.status = ""
  USER_RATING_SPAN.innerHTML = selectedRating
})
