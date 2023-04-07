import sha256 from 'crypto-js/sha256';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const elementShowPass = document.querySelector('#show-pass.underline-hover');
const wrapper = document.querySelector('#login .panel')
const form = document.querySelector('#login-form');
// const loginErrorMsg = document.getElementById("login-error-msg");

function login(e) {
    
    e.preventDefault();
    const usernameCrypt = sha256(loginForm.username.value + loginForm.password.value.trim()).toString();
    const correstSha = 'd5552d06d3a7324e8f514053cda69679d237f40afe0dc4c0ce8e3da0fb3477d1';

    if (usernameCrypt === correstSha) {
        success();    
    } else {
        incorrect();
    }
    
}

function success() {
    const element = document.createElement('div');
          element.classList.add('login-success-element', 'transition');
          element.style.opacity = 0;
    const contentHtml = `<svg id="newsletter-success" width="130" height="128" viewBox="0 0 130 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.05978 114.049L35 31.5L87 85.5L13.3338 121.486C8.48668 123.854 3.22043 119.121 5.05978 114.049Z" fill="#EA3A25"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4281 113.136L22.5354 116.991C17.7397 113.331 12.8698 109.326 8.2832 105.163L11.0933 97.4148C16.0342 102.384 22.2311 107.407 30.4281 113.136ZM51.8552 102.668L43.744 106.631C34.3908 99.8128 24.3324 91.4287 16.3508 82.9191L19.6475 73.8298C26.2647 83.3797 35.4531 91.6386 51.8552 102.668ZM73.3716 92.1576L65.073 96.2115C50.9614 86.4151 34.0855 72.2765 24.9421 59.2316L29.292 47.2383C37.2577 64.4036 46.6179 74.7103 73.3716 92.1576Z" fill="#C71907"></path><ellipse cx="61.4927" cy="57.9969" rx="11.1494" ry="37.7586" transform="rotate(-43.4001 61.4927 57.9969)" fill="#222222"></ellipse><path class="path1 animate-path" d="M46.5 47.5C55.5 33.5 53 21.5 51.5 17" stroke="#8342FD" stroke-width="4" stroke-linecap="round"></path><path class="path4 animate-path" d="M114 86C98.5 70.5 78.4905 74.1576 73.0001 78" stroke="#FAC714" stroke-width="4" stroke-linecap="round"></path><circle class="path6 animate-path" cx="49.5" cy="9.5" r="2.5" fill="#8342FD"></circle><circle cx="101.5" cy="30.5" r="2.5" fill="#EA3A24"></circle><circle class="path2 animate-path" cx="66.5" cy="30.5" r="3.5" fill="#FAC714"></circle><circle cx="126.5" cy="29.5" r="3.5" fill="#FAC714"></circle><path class="path3 animate-path" d="M59.5 56.9998C72.5 62.4998 76.5 61.4998 74.5 53.4998C72.5 45.4998 73 42.9998 81.5 44.4998C90 45.9998 90.5 42.4999 89 37.4999C87.5 32.4999 87.5 26.4999 94.5 27.9999" stroke="#EA3A24" stroke-width="4" stroke-linecap="round"></path><circle cx="119.5" cy="92.5" r="2.5" fill="#FAC714"></circle><rect x="82.2422" width="6" height="6" rx="2" transform="rotate(45 82.2422 0)" fill="#EA3A24"></rect><rect x="91.2422" y="92" width="6" height="6" rx="2" transform="rotate(45 91.2422 92)" fill="#8342FD"></rect><path class="path5 animate-path" d="M17.6117 26.718C17.9845 25.997 19.0155 25.997 19.3883 26.718L20.2283 28.3427C20.3235 28.5266 20.4734 28.6765 20.6573 28.7717L22.282 29.6117C23.003 29.9845 23.003 31.0155 22.282 31.3883L20.6573 32.2283C20.4734 32.3235 20.3235 32.4734 20.2283 32.6573L19.3883 34.282C19.0155 35.003 17.9845 35.003 17.6117 34.282L16.7717 32.6573C16.6765 32.4734 16.5266 32.3235 16.3427 32.2283L14.718 31.3883C13.997 31.0155 13.997 29.9845 14.718 29.6117L16.3427 28.7717C16.5266 28.6765 16.6765 28.5266 16.7717 28.3427L17.6117 26.718Z" fill="#FAC714"></path><path class="path7 animate-path" d="M105.546 56.1975C106.32 55.9513 107.049 56.6803 106.802 57.4537L106.248 59.1965C106.185 59.3939 106.185 59.6058 106.248 59.8032L106.802 61.546C107.049 62.3194 106.32 63.0485 105.546 62.8022L103.803 62.2474C103.606 62.1846 103.394 62.1846 103.197 62.2474L101.454 62.8023C100.68 63.0485 99.9514 62.3194 100.198 61.546L100.752 59.8032C100.815 59.6058 100.815 59.3939 100.752 59.1965L100.198 57.4537C99.9514 56.6803 100.68 55.9513 101.454 56.1975L103.197 56.7523C103.394 56.8151 103.606 56.8151 103.803 56.7523L105.546 56.1975Z" fill="#8342FD"></path></svg>`
    
    element.innerHTML = contentHtml;
    
    const panel = document.querySelector('#login .panel')
    const panelBody = document.querySelector('#login .panel-body')
    
    
    panel.appendChild(element)
    panelBody.style.opacity = 0;
    
    setTimeout(function() {
        form.reset();
        element.style.opacity = 1;
    }, 500);
    
    
}   

function incorrect() {
    const element = document.createElement('p');
          element.textContent = 'Hasło nieprawidłowe';
          element.classList.add('error-message');
    
    form.classList.add('error');
    wrapper.appendChild(element);
    
    setTimeout(function() {
        element.remove();
    }, 3000);
    
}

function showPass() {
    
    function completeForm() {
        
        const usernameField = document.querySelector('#username-field');
        const passField = document.querySelector('#password-field');
        usernameField.value = 'admin';
        passField.value = 'toJestHaslo:)';
        
        btn.removeEventListener("click", completeForm);    
    }
    
    const btn = document.createElement('a');
    btn.classList.add('underline', 'block', 'text-right', 'cursor-pointer', 'transition');
    btn.textContent = 'uzupełnij';
    const text = 'admin / toJestHaslo:)';
    elementShowPass.textContent = text;
    elementShowPass.classList.remove('underline-hover');
    elementShowPass.removeEventListener("click", showPass);
    elementShowPass.appendChild(btn)
    
    btn.addEventListener('click', completeForm);
}

elementShowPass.addEventListener('click', showPass);

export { login, loginButton }