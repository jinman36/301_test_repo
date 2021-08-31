'use strict';

let getMealBtn = document.getElementById('get_meal');
let mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
  fetch('https://www.affirmations.dev/')
  .then(res => res.json())
  .then(res => {
    createMeal(res.meals[0])
  })
})

console.log(random_saying[random_number])

