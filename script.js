const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY

  if (scrollPos >= 400) header.classList.add('scroll')
  else header.classList.remove('scroll')
})
