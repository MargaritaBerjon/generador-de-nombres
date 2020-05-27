const form = document.querySelector('.js-form');

form.addEventListener('submit', callApiAjax);

function callApiAjax(ev) {
  ev.preventDefault();
  const origin = document.querySelector('.js-origin');
  const originSelected = origin.options[origin.selectedIndex].value;
  const gender = document.querySelector('.js-gender');
  const genderSelected = gender.options[gender.selectedIndex].value;
  const number = document.querySelector('.js-number').value;
  let ENDPOINT = '';

  ENDPOINT += 'https://randomuser.me/api/?';
  if (originSelected !== '') {
    ENDPOINT += `nat=${originSelected}&`;
  }
  if (genderSelected !== '') {
    ENDPOINT += `gender=${genderSelected}&`;
  }

  if (number !== '') {
    ENDPOINT += `results=${number}`;
  }
  console.log(ENDPOINT);
}