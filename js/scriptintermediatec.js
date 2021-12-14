const quizDB = [
    {
        question:"Q1: What is the output of the below code snippet? ",
        a: "Photo editing Program",
        b: "General Purpose Programming Language",
        c: "Client side scripting Language",
        d: "Hyper Text Markup Language",
        ans:"ans2"
    },
    {
        question:"Q2: Which function is used in C language to print output?",
        a: "printf",
        b: "print.out",
        c: "scanf",
        d: "screen.print",
        ans:"ans1"
    },
    {
        question:"Q 3 - What is the built in library function to adjust the allocated dynamic memory size.",
        a: "malloc",
        b: "calloc",
        c: "realloc",
        d: "resize",
        ans:"ans3"
    },
    {
        question:"Q4: For a structure, if a variable behave as a pointer then from the given below operators which operator can be used to access data of the structure via the variable pointer?",
        a: ".",
        b: "%",
        c: "->",
        d: "#",
        ans:"ans3"
    },
    {
        question:"Q5: What is function in C language?",
        a: "execute a statement fixed no. of times",
        b: "keeps its members private",
        c: "print ouptut on the screen",
        d: "block of code that performs specific task",
        ans:"ans4"
    }

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b; 
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () =>{
       let answer;
       answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
       })
       return answer;
}
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> You Scored ${score} / ${quizDB.length} &#9996.</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})