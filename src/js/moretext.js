const text = document.querySelector('.section-aboutcompany-desc__desktop')
const showtext = document.querySelector('.section-aboutcompany-desc__btn')

showtext.addEventListener('click', () => {
  text.classList.add('section-aboutcompany-desc__desktop--active');console.log('yes')
  showtext.classList.add('section-aboutcompany-desc__btn--active');console.log('yes')
})

// showtext.addEventListener('click', () => {
//   showtext.classList.remove('section-aboutcompany-desc__btn--active');
// })

