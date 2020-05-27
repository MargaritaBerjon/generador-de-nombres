const form = document.querySelector('.js-form');

form.addEventListener('submit', callApiAjax);

function callApiAjax(ev) {
  ev.preventDefault();
  console.log('click');

}