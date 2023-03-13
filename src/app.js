import { modQuizz } from './modules/module1/modQuizz.js';
import openError from './modules/module2/modError.js';
import { movieRandom } from './modules/module3/movieApi.js'

// module1
modQuizz();


// module2
const errorBtn = document.querySelector('#errorBtn');
errorBtn.addEventListener('click', openError);



// module3
const movie1Btn = document.querySelector('#randomMovieBtn');
movie1Btn.addEventListener('click', movieRandom);



// preloaderPage
const preLoader = () => {
    const loader = document.querySelector('.start-loader');
    loader.classList.add('fade');
    setTimeout(() => {
        loader.remove();
    }, "300");
}

window.addEventListener('load', preLoader);