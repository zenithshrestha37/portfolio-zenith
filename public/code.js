const quizQuestions = [

    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<script>",
        c: "<scripting>",
        d: "<javascript>",
        correctanswer : "b"
    },{
        question: `How do you write "Hello World" in an alert box? `,
        a: `msg("Hello World")`,
        b:`msgBox("Hello World")`,
        c: `alert("Hello World")`,
        d: `alertBox("Hello World")`,
        correctanswer: "c"
    },{
        question: `How do you call a function named "myFunction"?`,
        a: "call myFunction()",
        b: "hi myFunction()",
        c: "myFunction()",
        d: "call function myFunction()",
        correctanswer : "c"
    }, {
        question: `How to insert a comment that has more than one line?`,
        a: "<!--This comment has more than one line-->  ",
        b: "//This comment has more than one line//",
        c: "/*This comment has more than one line*/ ",
        d: ".This comment has more than one line.",
        correctanswer : "c"
    },{
        question: `How do you round the number 7.25, to the nearest integer?`,
        a: "Math.round(7.25)",
        b: "rnd(7.25)",
        c: "Math.rnd(7.25)",
        d: "round(7.25)",
        correctanswer: "a"
    }
]

const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionElement = document.getElementById('question');
const a_option = document.getElementById('a_option');
const b_option = document.getElementById('b_option');
const c_option = document.getElementById('c_option');
const d_option = document.getElementById('d_option');
const submitBtn = document.getElementById('submit');


let currentQuestion = 0;
let score = 0;

// let shuffledQuestions, currentQuestionIndex

startQuiz();
function startQuiz() {
    
    removeAutomaticSelection();
  
    // shuffledQuestions = quizQuestions.sort(() =>Math.ceil(Math.random()*quizQuestions.length))
    // currentQuestionIndex = 0

    const currentQuestionData = quizQuestions[currentQuestion];

    questionElement.innerText = currentQuestionData.question;
    
    a_option.innerText = currentQuestionData.a;
    b_option.innerText = currentQuestionData.b;
    c_option.innerText = currentQuestionData.c;
    d_option.innerText = currentQuestionData.d;
}

// function setNextQuestion() {
//     showQuestion(shuffledQuestions[current QuestionIndex]);

// }

// function showQuestion(quizQuestions){
//     questionElement.innetText = quizQuestion.quizQuestion

// }

function getChecked() {
    let answer = undefined;
    answerElements.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
    

}

function removeAutomaticSelection(){
    answerElements.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //we need to check to see the answer
    const answer = getChecked();

    // console.log(answer);
    if(answer) {
        if(answer === quizQuestions[currentQuestion].correctanswer){
            score++;
        }
        currentQuestion++
        if (currentQuestion < quizQuestions.length) {
        startQuiz();
        }else {
           quiz.innerHTML = `<h2> You answered ${score} correct out of ${quizQuestions.length}. </h2> <button onclick="location.reload()"> Reload </button>`;
        };

    }
    // console.log("Submit button clicked")
})