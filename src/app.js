import { modQuizz } from './modules/module1/modQuizz.js';
import openError from './modules/module2/modError.js';
import { movieList } from './modules/module3/movieApi.js';
import changeColor from './modules/module4/colorPicker.js';
import fileUpload from './modules/module5/uploadFile.js';
import { observer, backgroundVideo } from './modules/module6/video.js';
import gridFn from './modules/module7/grid.js';


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

movieSearchInput.addEventListener("keyup", (el) => {
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



// preloaderPage
const preLoader = () => {
    const loader = document.querySelector('.start-loader');
    loader.classList.add('fade');
    setTimeout(() => {
        loader.remove();
    }, "300");
}

window.addEventListener('load', preLoader);