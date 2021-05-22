export default () => {
  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  featureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('feature__link_active')) {
        featureLinkElems.forEach((featureLinkElem) => {
          featureLinkElem.classList.remove('feature__link_active');
        });
        featureSubElems.forEach((featureSubElem) => {
          featureSubElem.classList.add('hidden');
        });
      }
      featureSubElems[index].classList.toggle('hidden');
      btn.classList.toggle('feature__link_active');
    });
  });
};
