'use strict';

const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('.form__submit-btn');
// const fNameError = document.querySelector('.form__error--fname');
// const lNameError = document.querySelector('.form__error--lname');
// const emailError = document.querySelector('.form__error--email');
// const passwordError = document.querySelector('.form__error--password');



form.addEventListener('submit', (event) => {
    if (!form.validity.valid) {
        showError();
        event.preventDefault();
    }
});

/*
function showError() {
    if (firstName.validity.valueMissing) {
        fNameError.textContent = 'First Name cannot be empty';
    }

    OR  

    if (firstName.value === '') {
        fNameError.textContent = 'First Name cannot be empty';
    }
}

*/


