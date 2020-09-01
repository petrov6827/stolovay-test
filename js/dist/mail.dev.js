"use strict";

var mail = document.querySelector('.mail');
var copyblock = document.querySelector('.mail-copy');
mail.addEventListener('click', function () {
  copyblock.classList.add('mail-copy-active');
});
copyblock.addEventListener('click', function () {
  copyblock.classList.remove('mail-copy-active');
});