export function errorStyle(element) {
    const elem = document.getElementById(element);
    const error = document.querySelector(".error");
    const errorWidth = elem.clientWidth / 2 + 20 + "px";
    error.style.left = `calc(50% + ${errorWidth})`;
}

export function createError(errorClass, errorText, errorWrapper) {
    const error = document.createElement('div');
    error.className = `error ${errorClass}`;
    error.textContent = errorText;
    document.querySelector(`.${errorWrapper}`).append(error);
}