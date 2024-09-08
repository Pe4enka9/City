const phoneInput = document.getElementById('tel');
const phoneMask = new IMask(phoneInput, {
    mask: '+{7}(000)000-00-00'
});

const bdayInput = document.getElementById('bday');
const bdayMask = new IMask(bdayInput, {
    mask: Date,
    max: new Date(2024, 11, 1)
});

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.querySelector(".email_error");

form.addEventListener('submit', (event) => {
    const emailMask = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (!emailMask.test(emailInput.value)) {
        event.preventDefault();
        emailError.textContent = 'Неверный адрес эл. почты!';
        emailError.style.display = 'block';
    }
});


const forError = emailInput.clientWidth / 2 + 20 + "px";
emailError.style.left = `calc(50% + ${forError})`;