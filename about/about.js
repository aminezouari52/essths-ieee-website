const header = document.querySelector('.header')
const items = document.querySelectorAll('.item')
const search = document.getElementById('search')
const input = document.querySelector('.input')
const form = document.querySelector('form')

const pageOne = document.querySelector('.page-one')
const pageTwo = document.querySelector('.page-two')
const btnOne = document.getElementById('btnOne')
const btnTwo = document.getElementById('btnTwo')

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

btnOne.addEventListener('click', () => {
  pageOne.classList.remove('hidden')
  pageTwo.classList.add('hidden')
  btnOne.classList.add('active')
  btnTwo.classList.remove('active')
})

btnTwo.addEventListener('click', () => {
  pageTwo.classList.remove('hidden')
  pageOne.classList.add('hidden')
  btnTwo.classList.add('active')
  btnOne.classList.remove('active')
})
