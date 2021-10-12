// Create a counter app that changes based on input

const counter = document.getElementById('counter')
const increaseBtn = document.getElementById('increase-btn')
const decreaseBtn = document.getElementById('decrease-btn')
const resetBtn = document.getElementById('reset-btn')
let counterNumber = 0;

// // Increase the count
// increaseBtn.addEventListener('click', () => {
//   counterNumber++
//   counter.textContent = counterNumber
//   if (counterNumber > 0) {
//     counter.classList.remove('red')
//     counter.classList.add('green')
//   } else if (counterNumber === 0) {
//     removeClass()
//   }
// })

// // Decrease the count
// decreaseBtn.addEventListener('click', () => {
//   counterNumber--
//   counter.textContent = counterNumber
//   if (counterNumber < 0) {
//     counter.classList.remove('green')
//     counter.classList.add('red')
//   } else if (counterNumber === 0) {
//     removeClass()
//   }
// })

// // Reset the count
// resetBtn.addEventListener('click', () => {
//   counterNumber = 0
//   counter.textContent = counterNumber
//   removeClass()
// })

function removeClass() {
  counter.classList.remove('red', 'green')
}


// BETTER SOLUTION: REDUCE EVENT LISTENERS USING FOREACH
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Select the clicked elemtn using event object
    const buttonType = event.target.id

    // Button Functionalities
    if (buttonType === 'increase-btn') {
      counterNumber++
    } else if (buttonType === 'decrease-btn') {
      counterNumber--
    } else if (buttonType === 'reset-btn') {
      counterNumber = 0
    }
    counter.textContent = counterNumber

    // Change Colours
    if (counterNumber > 0) {
      counter.classList.remove('red')
      counter.classList.add('green')
    } else if (counterNumber < 0) {
      counter.classList.remove('green')
      counter.classList.add('red')
    } else if (counterNumber === 0) {
      removeClass()
    }
  })
})