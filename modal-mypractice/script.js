const overlay = document.querySelector('.overlay');
console.log(overlay);
const showButton = document.querySelector('.show-button');
const closeModal = document.querySelector('.close-modal');

const openModal = () =>{
  overlay.classList.remove('hidden');
}

const close = () =>{
  overlay.classList.add('hidden')
}

showButton.addEventListener('click',openModal);
closeModal.addEventListener('click',close);