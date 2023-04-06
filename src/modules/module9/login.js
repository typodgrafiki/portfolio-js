import sha256 from 'crypto-js/sha256';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const elementShowPass = document.querySelector('#show-pass.underline-hover');
// const loginErrorMsg = document.getElementById("login-error-msg");

function login(e) {
    
    e.preventDefault();
    const usernameCrypt = sha256(loginForm.username.value+loginForm.password.value).toString();
    const correstSha = 'd5552d06d3a7324e8f514053cda69679d237f40afe0dc4c0ce8e3da0fb3477d1';
    
    // toJestHaslo:)

    if (usernameCrypt === correstSha) {
        success();    
    } else {
        incorrect();
    }
    
}

function success() {
    console.log('yes');
}   

function incorrect() {
    
    const form = document.querySelector('#login-form');
    const element = document.createElement('p');
          element.textContent = 'Hasło nieprawidłowe';
          element.classList.add('error-message');
    const wrapper = document.querySelector('#login .panel')
    
    form.classList.add('error');
    wrapper.appendChild(element);
    
    setTimeout(function() {
        element.remove();
    }, 3000);
    
}

function showPass() {
    const text = 'admin / toJestHaslo:)';
    elementShowPass.textContent = text;
    elementShowPass.classList.remove('underline-hover');
}

elementShowPass.addEventListener('click', showPass);

export { login, loginButton }