function modQuizz() {
        
    const questions =  [
        {
            question: 'Najwyższy szczyt Polski to Rysy. Jaką mają wysokość?',
            a: '2690 m.n.p.m.',
            b: '2489 m.n.p.m.',
            c: '2499 m.n.p.m.',
            d: '2329 m.n.p.m.',
            correct: 'c'
        }, {
            question: 'Gdzie nie można kupić Coca Coli?',
            a: 'Finlandia',
            b: 'Japonia',
            c: 'Kuba',
            d: 'Madagaskar',
            correct: 'c'
        }, {
            question: 'Który kraj jest najczęściej odwiedzany na świecie?',
            a: 'Francja',
            b: 'Włochy',
            c: 'Egipt',
            d: 'Brazylia',
            correct: 'a'
        }, {
            question: 'Gdzie sprzedaje się najwięcej gier planszowych na świecie?',
            a: 'Polska',
            b: 'Niemcy',
            c: 'Anglia',
            d: 'Hiszpania',
            correct: 'b'
        }, {
            question: 'Najpopularniejszym prezentem na dzień ojca jest:',
            a: 'Czekoladki',
            b: 'Kapcie',
            c: 'Krawat',
            d: 'Skarpety',
            correct: 'c'
        }
    ];


    const questionEl = document.querySelector('#quiz-body h2');
    const answer1El = document.querySelector('label[for=answer_0] span');
    const answer2El = document.querySelector('label[for=answer_1] span');
    const answer3El = document.querySelector('label[for=answer_2] span');
    const answer4El = document.querySelector('label[for=answer_3] span');
    const questionBody = document.querySelector('#quiz-body');
    let numberQuestions = 0;
    const submit = document.querySelector('#submit');
    const answers = document.querySelectorAll('input[type="radio"]');
    let score = 0;

    loadQuestion();

    function loadQuestion() {

        questionEl.innerText = questions[numberQuestions].question;    
        answer1El.innerText = questions[numberQuestions].a;
        answer2El.innerText = questions[numberQuestions].b;
        answer3El.innerText = questions[numberQuestions].c;
        answer4El.innerText = questions[numberQuestions].d;
        
    }

    function deselect() {
        answers.forEach((el) => {
            el.checked = false;
        });
    }

    function showScore(){
        questionBody.innerHTML = `<div class='container container-small shadow'><div class="card padding-quiz"><h3>Twój wynik to <b>${score} pkt</b> na ${answers.length+1} możliwych</h3></div><button onclick='location.reload()' class='btn btn-primary'>Zacznij od nowa</button></div>`;
    }

    function addPoints() {
        let answerCorrect = document.querySelector('input:checked');
        if(questions[numberQuestions].correct == answerCorrect.getAttribute('data-answer')) {
            score++;
        }
    }

    submit.addEventListener("click", function(){ 

        //jesli ktoras z odpowiedzi zaznaczona zwroc true
        let answersCheck = false;
        answers.forEach((el) => {
            if(el.checked == true) {
                answersCheck = true;
            }
        });

        if (answersCheck == true) {
            addPoints();
            deselect();
            numberQuestions++; 
            if ((numberQuestions < questions.length)) {       
                loadQuestion();    
            }else{
                showScore();
            }   
        }else{
            alert('Wybierz odowiedź.');
        }

    });
}

export { modQuizz }