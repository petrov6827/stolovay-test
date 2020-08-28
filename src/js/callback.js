const phone = document.querySelector('.section-header-desktop__phone')
const phoneBlock = document.querySelector(
  '.section-header-desktop__phone-block'
)
const phoneBlockActive = document.querySelector(
  '.section-header-desktop__phone-block-active'
)

phone.addEventListener('click', () => {
  phoneBlock.classList.add('section-header-desktop__phone-block-active')
})

const close = document.querySelector('#phone-block-close')

close.addEventListener('click', () => {
  phoneBlock.classList.remove('section-header-desktop__phone-block-active')
})