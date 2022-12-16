import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE = 'feedback-form-state';

input.required = true;
message.required = true;

const clearInput = event => {
  event.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE));
  form.reset();
  localStorage.clear();
};

const saveInput = () => {
  const object = {
    email: `${input.value}`,
    message: `${message.value}`,
  };
  localStorage.setItem(LOCALSTORAGE, JSON.stringify(object));
};

form.addEventListener('input', saveInput);
form.addEventListener('submit', clearInput);

formBackup();

function formBackup() {
  const saveUserData = localStorage.getItem(LOCALSTORAGE) || '';
  let userData = {};
  let imputedEmail = '';
  let imputedMessage = '';
  if (saveUserData === '') {
    userData = '';
  } else {
    userData = JSON.parse(saveUserData);
    imputedEmail = userData.email;
    imputedMessage = userData.message;
  }

  input.value = imputedEmail;
  message.value = imputedMessage;
}
