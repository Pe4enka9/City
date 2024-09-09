// Добавляет стили к полю с ошибкой, двигает сообщение об ошибке
export function errorStyle(elementId) {
    const elem = document.getElementById(elementId);
    const error = document.querySelector(`.error_${elementId}`);

    if (elem && error) { // Проверка, что оба элемента существуют
        const errorWidth = elem.clientWidth / 2 + 20 + "px";
        error.style.left = `calc(50% + ${errorWidth})`;
    }
}

// Создает сообщение об ошибке, если его еще нет
export function createError(errorClass, errorText, errorWrapper) {
    // Проверка, существует ли ошибка
    if (!document.querySelector(`.${errorClass}`)) {
        const error = document.createElement('div');
        error.className = `error ${errorClass}`;
        error.textContent = errorText;
        document.querySelector(`.${errorWrapper}`).append(error);
    }
}

export function handleInputError(elem, errorClass) {
    const errorElement = document.querySelector(`.${errorClass}`);
    if (elem.value.length > 0 && errorElement) {
        errorElement.remove();
    }
}

export function validateField(wrapperClass, condition, errorClass, message) {
    const errorElement = document.querySelector(`.${errorClass}`);
    if (!condition) {
        if (errorElement) {
            errorElement.remove();
        }
        createError(errorClass, message, wrapperClass);
        errorStyle(wrapperClass);
        return false;
    } else if (errorElement) {
        errorElement.remove();
    }
    return true;
}