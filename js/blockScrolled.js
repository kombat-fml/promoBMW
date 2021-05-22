const disabledScroll = () => {
  document.body.dataset.scrollY = window.scrollY;
  const scrollWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.cssText = `
      overflow:hidden;
      position:fixed;
      left:0;
      top:-${window.scrollY}px;
      width:100%;
      height:100vh;
      padding-right: ${scrollWidth}px;
      `;
};

const enabledScroll = () => {
  document.body.style.cssText = '';
  window.scrollTo({ top: document.body.dataset.scrollY });
};
export default { disabledScroll, enabledScroll };
