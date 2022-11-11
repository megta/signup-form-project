'use strict';

const form = document.querySelector('form');
const input = document.querySelector('.form__input');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('.form__submit-btn');

const fNameError = document.querySelector('.form__error--fname');
const lNameError = document.querySelector('.form__error--lname');
const emailError = document.querySelector('.form__error--email');
const passwordError = document.querySelector('.form__error--password');



form.addEventListener('submit', (event) => {
    if (!form.validity.valid) {
        showError();
        input.style.borderColor = 'hsl(0, 100%, 74%)';
        event.preventDefault();
    }
});


function showError() {
    if (firstName.validity.valueMissing) {
        fNameError.textContent = 'First Name cannot be empty';
    } 

    /* 
    if (firstName.value === '') {
        fNameError.textContent = 'First Name cannot be empty';
    }
    */

    if (lastName.validity.valueMissing) {
        lNameError.textContent = 'Last Name cannot be empty';
    }

    if (email.validity.valueMissing) {
        emailError.textContent = 'Email cannot be empty';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Looks like this is not an email';
    }

    if (password.validity.valueMissing) {
        passwordError.textContent = 'Password cannot be empty';
    }


}



