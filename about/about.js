const header = document.querySelector('.header')
const items = document.querySelectorAll('.item')
const search = document.getElementById('search')
const input = document.querySelector('.input')
const form = document.querySelector('form')

const btn = document.querySelector('.btn')
const paragraph = document.querySelector('.para')

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

btn.addEventListener('click', () => {
  style = paragraph.style.display
  if (style === 'block') paragraph.style.display = 'none'
  else paragraph.style.display = 'block'
})
