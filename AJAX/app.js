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

  const xhr = new XMLHttpRequest();
  xhr.open('GET', ENDPOINT, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const names = JSON.parse(this.responseText).results;
      console.log(names);

      let htmlNames = '<h2> Nombres generados</h2>';
      htmlNames += '<ul>'

      names.forEach(function (name) {
        htmlNames += `
        <li>${name.name.first}</li>
        `

      });
      htmlNames += '</ul>';
      document.getElementById('js-result').innerHTML = htmlNames;

    }
  }
  xhr.send();
}