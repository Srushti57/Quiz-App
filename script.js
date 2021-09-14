
const quizData = [
    {
        question : 'Cat has how many legs?',
        a: '6',
        b: '2',
        c: '4',
        d: '3',
        correct : 'c'
    },
    {
        question : 'Who was Micheal Jackson?',
        a: 'Singer',
        b: 'Football Player',
        c: 'Designer',
        d: 'Dancer',
        correct : 'd'
    },
    {
        question : 'A shape with three sides is called?',
        a: 'Triangle',
        b: 'Square',
        c: 'Rhombus',
        d: 'Rectangle',
        correct : 'a'
    }
    
]

const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQues = 0;
let score =0;

loadQuiz();
function loadQuiz(){
    deSelected();
    const CurrentQuizData = quizData[currentQues];

    questionEl.innerText = CurrentQuizData.question;

    a_text.innerText = CurrentQuizData.a;
    b_text.innerText = CurrentQuizData.b;
    c_text.innerText = CurrentQuizData.c;
    d_text.innerText = CurrentQuizData.d;
    
}

function getSelected(){
    let answer = undefined;
    answerEl.forEach((answerel) => {
        if(answerel.checked){
            answer = answerel.id;
        }
    });
    return answer;
}

function deSelected(){
    answerEl.forEach((answerel) => {
        answerel.checked = false;
    });
}
submitBtn.addEventListener('click', ()=>{

    const answer = getSelected();
    if(answer){

        if(answer === quizData[currentQues].correct){
            score++;
        }
        currentQues++;
        if(currentQues < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> You scored ${score}/${quizData.length} questions</h2>`;
        }
    }


});
