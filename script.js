"use strict";

const btnSubmit = document.getElementById("btn_submit");
const surveyRating = document.querySelectorAll(".survey_rating");
const surveyResponse = document.querySelector(".survey_response");
const surveySubmit = document.querySelector(".survey_submit");
const selectedRating = document.querySelector(".user_selected_rating");

let userRating;

for (let a = 0; a < surveyRating.length; a++) {
  surveyRating[a].addEventListener("click", function () {
    userRating = surveyRating[a].textContent;
    surveyRating[a].classList.toggle("selected");

    for (let b = 0; b < surveyRating.length; b++) {
      if (b !== a) surveyRating[b].classList.remove("selected");
    }
  });
}

btnSubmit.addEventListener("click", function () {
  if (userRating) {
    selectedRating.textContent = userRating;
    surveyResponse.classList.add("hidden");
    surveySubmit.classList.remove("hidden");
  }
});
