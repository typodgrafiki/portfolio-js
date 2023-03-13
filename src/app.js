import { modQuizz } from './modules/modQuizz.js';
import openError from './modules/module2/modError.js'

// module1
modQuizz();


// module2
const errorBtn = document.querySelector('#errorBtn');
errorBtn.addEventListener('click', openError);
