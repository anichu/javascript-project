'use strict';
const icons = document.querySelectorAll('i');

let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector('.box .change');
  icon ? icon.classList.remove('change') : '';
  if (i >= icons.length) {
    i = 1;
    icons[0].classList.add('change');
  } else {
    icons[i].classList.add('change');
  }
}, 3000);
