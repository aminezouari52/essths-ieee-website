const header = document.querySelector('.header')
const items = document.querySelectorAll('.item')
const search = document.getElementById('search')
const input = document.querySelector('.input')
const form = document.querySelector('form')

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
