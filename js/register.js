import {errorStyle, createError} from "./functions.js";

const elemArray = {
    'phone': document.getElementById('tel'),
    'email': document.getElementById('email'),
    'username': document.getElementById('username'),
    'lastName': document.getElementById('lastName'),
    'bday': document.getElementById('bday'),
    'password': document.getElementById('password'),
    'passwordRepeat': document.getElementById('password_repeat')
}

const phoneMask = new IMask(elemArray['phone'], {
    mask: '+{7}(000)000-00-00'
});

function setCaretPosition(elem, pos) {
    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
    }
}

elemArray['phone'].addEventListener('input', () => {
    if (elemArray['phone'].value.length > 0) {
        const cursorPosition = elemArray['phone'].selectionStart;
        phoneMask.updateOptions({lazy: false});
        setCaretPosition(elemArray['phone'], cursorPosition);
    }
});

const bdayMask = new IMask(elemArray['bday'], {
    mask: Date,
    max: new Date()
});

elemArray['bday'].addEventListener('input', () => {
    if (elemArray['bday'].value.length > 0) {
        const cursorPosition = elemArray['bday'].selectionStart;
        bdayMask.updateOptions({lazy: false});
        setCaretPosition(elemArray['bday'], cursorPosition);
    }
});

document.getElementById('form').addEventListener('submit', (event) => {
    const errorTel = document.querySelector('.error_tel');
    if (elemArray['phone'].value.length < 1) {
        event.preventDefault();
        if (errorTel) {
            errorTel.remove();
        }
        createError('error_tel', 'Это поле обязательно для заполнения!', 'tel_wrapper');
        errorStyle('tel');
    } else if (phoneMask.unmaskedValue.length !== 11) {
        event.preventDefault();
        if (errorTel) {
            errorTel.remove();
        }
        createError('error_tel', 'Заполните поле до конца!', 'tel_wrapper');
        errorStyle('tel');
    } else {
        if (errorTel) {
            errorTel.remove();
        }
    }

    const errorEmail = document.querySelector('.error_email');
    const emailMask = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (elemArray['email'].value.length < 1) {
        event.preventDefault();
        if (errorEmail) {
            errorEmail.remove();
        }
        createError('error_email', 'Это поле обязательно для заполнения!', 'email_wrapper');
        errorStyle('email');
    } else if (!emailMask.test(elemArray['email'].value)) {
        event.preventDefault();
        if (errorEmail) {
            errorEmail.remove();
        }
        createError('error_email', 'Неправильный адрес эл. почты!', 'email_wrapper');
        errorStyle('email');
    } else {
        if (errorEmail) {
            errorEmail.remove();
        }
    }

    const errorUsername = document.querySelector('.error_username');
    if (elemArray['username'].value.length < 1) {
        event.preventDefault();
        if (errorUsername) {
            errorUsername.remove();
        }
        createError('error_username', 'Это поле обязательно для заполнения!', 'username_wrapper');
        errorStyle('username');
    } else {
        if (errorUsername) {
            errorUsername.remove();
        }
    }

    const errorLastname = document.querySelector('.error_lastName');
    if (elemArray['lastName'].value.length < 1) {
        event.preventDefault();
        if (errorLastname) {
            errorLastname.remove();
        }
        createError('error_lastName', 'Это поле обязательно для заполнения!', 'lastName_wrapper');
        errorStyle('lastName');
    } else {
        if (errorLastname) {
            errorLastname.remove();
        }
    }

    const errorBday = document.querySelector('.error_bday');
    if (elemArray['bday'].value.length < 1) {
        event.preventDefault();
        if (errorBday) {
            errorBday.remove();
        }
        createError('error_bday', 'Это поле обязательно для заполнения!', 'bday_wrapper');
        errorStyle('bday');
    } else {
        if (errorBday) {
            errorBday.remove();
        }
    }

    const errorPassword = document.querySelector('.error_password');
    const passwordMask = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    if (elemArray['password'].value.length < 1) {
        event.preventDefault();
        if (errorPassword) {
            errorPassword.remove();
        }
        createError('error_password', 'Это поле обязательно для заполнения!', 'password_wrapper');
        errorStyle('password');
    } else if (!passwordMask.test(elemArray['password'].value)) {
        event.preventDefault();
        if (errorPassword) {
            errorPassword.remove();
        }
        createError('error_password', 'Пароль слишком простой!', 'password_wrapper');
        errorStyle('password');
    } else if (elemArray['password'].value !== elemArray['passwordRepeat'].value) {
        event.preventDefault();
        if (errorPassword) {
            errorPassword.remove();
        }
        createError('error_password', 'Пароли не совпадают!', 'password_wrapper');
        errorStyle('password');
    } else {
        if (errorPassword) {
            errorPassword.remove();
        }
    }
});

elemArray['phone'].addEventListener('input', () => {
    const errorTel = document.querySelector('.error_tel');
    if (elemArray['phone'].value.length > 0 && errorTel) {
        errorTel.remove();
    }
});

elemArray['email'].addEventListener('input', () => {
    const errorEmail = document.querySelector('.error_email');
    if (elemArray['email'].value.length > 0 && errorEmail) {
        errorEmail.remove();
    }
});

elemArray['username'].addEventListener('input', () => {
    const errorUsername = document.querySelector('.error_username');
    if (elemArray['username'].value.length > 0 && errorUsername) {
        errorUsername.remove();
    }
});

elemArray['lastName'].addEventListener('input', () => {
    const errorLastname = document.querySelector('.error_lastName');
    if (elemArray['lastName'].value.length > 0 && errorLastname) {
        errorLastname.remove();
    }
});

elemArray['bday'].addEventListener('input', () => {
    const errorBday = document.querySelector('.error_bday');
    if (elemArray['bday'].value.length > 0 && errorBday) {
        errorBday.remove();
    }
});

elemArray['password'].addEventListener('input', () => {
    const errorPassword = document.querySelector('.error_password');
    if (elemArray['password'].value.length > 0 && errorPassword) {
        errorPassword.remove();
    }
});