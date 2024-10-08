import {errorStyle} from "./functions.js";

const passwordWrapper = document.querySelector('.password_wrapper');
const passwordInput = document.getElementById('password');

function changePasswordWidth() {
    const passwordInputWidth = passwordInput.clientWidth;
    passwordWrapper.style.width = passwordInputWidth + "px";
}

window.addEventListener('DOMContentLoaded', changePasswordWidth);

window.addEventListener('resize', () => {
    passwordWrapper.style.width = "100%";
    changePasswordWidth();
});

const passwordEye = document.querySelector('.password_eye');
passwordEye.addEventListener('click', () => {
    if (passwordEye.classList.contains('password_hide')) {
        passwordInput.type = 'text';
        passwordEye.classList.remove('password_hide');
        passwordEye.classList.add('password_show');
    } else {
        passwordInput.type = 'password';
        passwordEye.classList.remove('password_show');
        passwordEye.classList.add('password_hide');
    }
});

errorStyle('tel');