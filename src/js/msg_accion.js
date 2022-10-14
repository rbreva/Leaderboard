const msgAccion = (msg) => {
  const msgAccionDiv = document.querySelector('.msg_accion');
  msgAccionDiv.classList.add('showMessage');
  msgAccionDiv.innerHTML = msg;
  setTimeout(() => {
    msgAccionDiv.classList.remove('showMessage');
    msgAccionDiv.innerHTML = '';
  }, 4000);
};

export default msgAccion;
