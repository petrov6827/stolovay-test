const mail = document.querySelector('.mail')
const copyblock = document.querySelector('.mail-copy')

mail.addEventListener('click', () => {
  copyblock.classList.add('mail-copy-active')
})


copyblock.addEventListener('click', () => {
  
  copyblock.classList.remove('mail-copy-active');
})

