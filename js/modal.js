import blockScrolled from './blockScrolled.js';
const { disabledScroll, enabledScroll } = blockScrolled;
export default function modal() {
  const openModal = () => {
    modalElem.classList.remove('hidden');
    disabledScroll();
  };

  const closeModal = () => {
    modalElem.classList.add('hidden');
    enabledScroll();
  };

  const moreElems = document.querySelectorAll('.more');
  const modalElem = document.querySelector('.modal');

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
}
