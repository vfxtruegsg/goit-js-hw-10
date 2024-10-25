// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', createNewPromise);

function createNewPromise(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const radioValue = formData.get('state');

  setTimeout(() => {
    let promise = new Promise((resolve, reject) => {
      if (radioValue === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else if (radioValue === 'rejected') {
        reject(`Rejected promise in ${delay}ms`);
      }
    });

    promise
      .then(message => {
        iziToast.success({
          title: '✅',
          message: message,
          position: 'topRight',
          timeout: 3000,
          transitionIn: 'fadeInLeft',
          transitionOut: 'fadeOutRight',
        });
      })
      .catch(error => {
        iziToast.error({
          title: '❌',
          message: error,
          position: 'topRight',
          timeout: 3000,
          transitionIn: 'fadeInLeft',
          transitionOut: 'fadeOutRight',
        });
      });
  }, delay);
  form.reset();
}
