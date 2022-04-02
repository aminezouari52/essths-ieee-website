const header = document.querySelector('.header')
const items = document.querySelectorAll('.item')
const search = document.getElementById('search')
const input = document.querySelector('.input')
const form = document.querySelector('form')

const slides = document.querySelectorAll('.slide')
const steps = document.querySelectorAll('.step')
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')

let counter = 0

steps.forEach((step, i) => {
  step.addEventListener('click', () => {
    counter = i
    setBG()
    setStep()
  })
})

setBG()
setStep()

function setStep() {
  removeActiveSteps()
  steps[counter].classList.add('active')
}

function removeActiveSteps() {
  steps.forEach((step) => {
    step.classList.remove('active')
  })
}

function setBG() {
  removeActive()
  slides[counter].classList.add('active')
}

function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

btnRight.addEventListener('click', () => {
  counter++
  if (counter > 4) counter = 4
  console.log(counter)
  setBG()
  setStep()
})

btnLeft.addEventListener('click', () => {
  counter--
  if (counter < 0) counter = 0
  console.log(counter)
  setBG()
  setStep()
})

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY

  if (scrollPos >= 400) header.classList.add('scroll')
  else header.classList.remove('scroll')
})

search.addEventListener('click', (event) => {
  hideNav()
  search.classList.add('active')
  event.stopPropagation()
  input.focus()
})

window.addEventListener('click', () => {
  showNav()
  search.classList.remove('active')
})

function hideNav() {
  items.forEach((item) => {
    item.style.display = `none`
    search.style.display = `block`
  })
}

function showNav() {
  items.forEach((item) => {
    item.style.display = `block`
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  window.find(input.value)
})
