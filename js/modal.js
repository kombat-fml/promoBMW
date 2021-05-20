const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
  modalElem.classList.remove('hidden');
};

const closeModal = () => {
  modalElem.classList.add('hidden');
};

moreElems.forEach((elem) => {
  elem.addEventListener('click', openModal);
});

modalElem.addEventListener('click', (event) => {
  const target = event.target;

  if (
    target.classList.contains('overlay') ||
    target.classList.contains('modal__close')
  ) {
    closeModal();
  }
});

document.body.addEventListener('keydown', (event) => {
  if (!modalElem.classList.contains('hidden') && event.keyCode == '27') {
    closeModal();
  }
});
