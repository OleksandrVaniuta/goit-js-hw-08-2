import throttle from 'lodash.throttle';

const form = document.querySelector('form');

form.addEventListener('input', throttle(saveFeedback, 500));

refreshPageData();

function saveFeedback() {
  const feedback = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function refreshPageData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    form.elements.email.value = JSON.parse(savedData).email;
    form.elements.message.value = JSON.parse(savedData).message;
  }
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const feedback = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(feedback);
  form.reset();
  localStorage.clear();
});
