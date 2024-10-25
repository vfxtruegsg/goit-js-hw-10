let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input[name="email"]');
const messageField = form.querySelector('textarea[name="message"]');

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    formData = JSON.parse(savedData);
    emailField.value = formData.email;
    messageField.value = formData.message;
  }
}

loadFormData();

form.addEventListener('input', event => {
  const target = event.target;

  if (target.name) {
    formData[target.name] = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    emailField.value = '';
    messageField.value = '';
  }
});
