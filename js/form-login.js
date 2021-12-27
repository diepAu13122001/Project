const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const submitBtnLogin = document.querySelector('.submit-btn-login');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtnLogin.addEventListener('click', () => {
    if (!email.value.length) {
        showAlert('enter your email');
    } else if (password.value.length < 8) {
        showAlert('password should be 8 letters long');
    } else {
        // submit form
        loader.style.display = 'block';
        location.href = 'home.html';
    }
})


