const loginButton = document.querySelector('.login-button button');
const loginSuccess = document.querySelector('.alert-success');
const LoginFailed = document.querySelector('.alert-danger');



loginButton.addEventListener('click', () => {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    if (email == "" || password == "") {
        LoginFailed.style.display = 'block';
        setTimeout(() => {
            LoginFailed.style.display = 'none';
        }, 2000);
    } else {
        loginSuccess.style.display = 'block';
        setTimeout(() => {
            loginSuccess.style.display = 'none';
        }, 2000);
    }
})
