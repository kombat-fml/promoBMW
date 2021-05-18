document.addEventListener('DOMContentLoaded', () => {
  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  // for (let i = 0; i < featureLinkElems.length; i++) {
  //   featureLinkElems[i].addEventListener('click', () => {
  //     featureSubElems[i].classList.toggle('hidden');
  //     featureLinkElems[i].classList.toggle('feature__link_active');
  //   });
  // }
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
});