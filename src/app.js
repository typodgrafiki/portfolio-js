import { modQuizz } from './modules/module1/modQuizz.js';
import openError from './modules/module2/modError.js';
import { movieList } from './modules/module3/movieApi.js';
import changeColor from './modules/module4/colorPicker.js';
import fileUpload from './modules/module5/uploadFile.js';
import { observer, backgroundVideo } from './modules/module6/video.js';
import gridFn from './modules/module7/grid.js';

import sha256 from 'crypto-js/sha256';


// module1
modQuizz();


// module2
const errorBtn = document.querySelector('#errorBtn');
errorBtn.addEventListener('click', openError);



// module3
const movieRandomBtn = document.querySelector('#randomMovieBtn');
const movieSearchBtn = document.querySelector('#movieSearch .btn');
const movieSearchInput = document.querySelector('#movieSearch input');

movieRandomBtn.addEventListener('click', (el) => {
    movieList(el, 'Filmy z najnowszych trendów', 'random');
});

movieSearchBtn.addEventListener('click', (el) => {
    movieList(el, 'Wyniki wyszukiwania', movieSearchInput);
});

movieSearchInput.addEventListener('keyup', (el) => {
    if (el.key === "Enter") {
        movieList(el, 'Wyniki wyszukiwania', movieSearchInput);
    }
});


// module4
changeColor();

// module5
fileUpload();

// module6
observer.observe(backgroundVideo);

// module7
gridFn();

//module8



const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    const usernameCrypt = sha256(username+password);
    
    console.log(usernameCrypt.toString());
    
    // toJestHaslo:)
    // d5552d06d3a7324e8f514053cda69679d237f40afe0dc4c0ce8e3da0fb3477d1

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        // location.reload();
    } else {
        // loginErrorMsg.style.opacity = 1;
    }
})


// preloaderPage
const preLoader = () => {
    const loader = document.querySelector('.start-loader');
    loader.classList.add('fade');
    setTimeout(() => {
        loader.remove();
    }, "300");
}

window.addEventListener('load', preLoader);
