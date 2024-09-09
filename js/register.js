import { errorStyle, createError, handleInputError, validateField } from "./functions.js";

const elemArray = {
    'phone': document.getElementById('tel'),
    'email': document.getElementById('email'),
    'username': document.getElementById('username'),
    'lastName': document.getElementById('lastName'),
    'bday': document.getElementById('bday'),
    'password': document.getElementById('password'),
    'passwordRepeat': document.getElementById('password_repeat')
};

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

// Удаление ошибок при вводе
Object.entries({
    'phone': 'error_tel',
    'email': 'error_email',
    'username': 'error_username',
    'lastName': 'error_lastName',
    'bday': 'error_bday',
    'password': 'error_password'
}).forEach(([key, errorClass]) => {
    elemArray[key].addEventListener('input', () => handleInputError(elemArray[key], errorClass));
});

// Валидация при отправке формы
document.getElementById('form').addEventListener('submit', (event) => {
    const isPhoneValid = validateField('tel_wrapper', phoneMask.unmaskedValue.length === 11, 'error_tel', 'Заполните поле до конца!');
    const isEmailValid = validateField('email_wrapper', /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(elemArray['email'].value), 'error_email', 'Неправильный адрес эл. почты!');
    const isUsernameValid = validateField('username_wrapper', elemArray['username'].value.length > 0, 'error_username', 'Это поле обязательно для заполнения!');
    const isLastnameValid = validateField('lastName_wrapper', elemArray['lastName'].value.length > 0, 'error_lastName', 'Это поле обязательно для заполнения!');
    const isBdayValid = validateField('bday_wrapper', elemArray['bday'].value.length > 0, 'error_bday', 'Это поле обязательно для заполнения!');
    const isPasswordValid = validateField('password_wrapper', /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(elemArray['password'].value), 'error_password', 'Пароль слишком простой!');
    const isPasswordMatch = validateField('password_wrapper', elemArray['password'].value === elemArray['passwordRepeat'].value, 'error_password', 'Пароли не совпадают!');

    // Останавливаем отправку формы, если есть ошибки
    if (!isPhoneValid || !isEmailValid || !isUsernameValid || !isLastnameValid || !isBdayValid || !isPasswordValid || !isPasswordMatch) {
        event.preventDefault();
    }
});