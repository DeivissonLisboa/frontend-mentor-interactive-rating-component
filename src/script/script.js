const RATINGS = document.querySelectorAll(".ratings button")
let selectedRating

RATINGS.forEach((rating) => {
  rating.addEventListener("click", () => {
    RATINGS.forEach((ratingEl) => (ratingEl.dataset.status = ""))

    rating.dataset.status = "selected"
    selectedRating = rating.innerText
  })
})
