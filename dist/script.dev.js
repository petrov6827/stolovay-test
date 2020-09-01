"use strict";

var phone = document.querySelector('.section-header-desktop__phone');
var phoneBlock = document.querySelector('.section-header-desktop__phone-block');
var phoneBlockActive = document.querySelector('.section-header-desktop__phone-block-active');
phone.addEventListener('click', function () {
  phoneBlock.classList.add('section-header-desktop__phone-block-active');
});
var close = document.querySelector('#phone-block-close');
close.addEventListener('click', function () {
  phoneBlock.classList.remove('section-header-desktop__phone-block-active');
});