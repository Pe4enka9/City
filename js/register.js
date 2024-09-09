import {errorStyle, createError} from "./functions.js";

const phoneInput = document.getElementById('tel');
const phoneMask = new IMask(phoneInput, {
    mask: '+{7}(000)000-00-00'
});

const bdayInput = document.getElementById('bday');
const bdayMask = new IMask(bdayInput, {
    mask: Date,
    max: new Date(2024, 11, 1)
});

const emailInput = document.getElementById('email');

document.getElementById('form').addEventListener('submit', (event) => {
    const emailMask = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (!emailMask.test(emailInput.value)) {
        event.preventDefault();
        createError('error_email', 'Неправильный адрес эл. почты!', 'email_wrapper');
        errorStyle('email');
    }
});