// Capturar el evento SubmitEvent
const formElement = document.querySelector('form');
const emailValue = document.querySelector('.email-value');
const emailInput = document.getElementById('email')
let isEmailValid = false;

if (emailInput) {
    emailInput.addEventListener('invalid', (e) => {
        e.preventDefault();
        console.log('El correo no es válido....')
    })
}

if (formElement) {
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = formElement.elements['email'].value;
        if (email.trim().length > 0) {
            localStorage.setItem('email', email)
            window.location.href = 'form-end.html';
        }
    });
};

// Capturamos el valor que está en el localStorage, para mostrarlo en otra página
if (emailValue) {
    const emailTmp = localStorage.getItem('email');
    emailValue.innerHTML = emailTmp;
}