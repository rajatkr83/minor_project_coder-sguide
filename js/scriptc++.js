const quizDB = [
    {
        question:"Q1: 	In C++, cout is found in which library file?",
        a: "ctype.h",
        b: "stdlib.h",
        c: "math.h",
        d: "iostream.h",
        ans:"ans4"
    },
    {
        question:"Q2: In C++, the token // is used for:",
        a: "integer division",
        b: "concatenation",
        c: "comments",
        d: "exponentiation",
        ans:"ans3"
    },
    {
        question:"Q3: The standard identifier cin is used for:",
        a: "a compiler flag",
        b: "standard output",
        c: "standard input",
        d: "the integer -1",
        ans:"ans3"
    },
    {
        question:"Q4: The keyword endl:",
        a: "defines a symbolic constant",
        b: "specifies that a function is to be compiled, if possible, as inline code",
        c: "provides assertion testing",
        d: "flushes the output stream and adds a new line",
        ans:"ans4"
    },
    {
        question:"Q5: One difference between C++ and C is that C++:",
        a: "has long double",
        b: "is block structured",
        c: "has declarations that can go after executable code",
        d: "has no do-while statement",
        ans:"ans3"
    },
    {
        question:"Q6: By default the members of the structure are",
        a: "private",
        b: "protected",
        c: "public",
        d: " Access specifiers not applicable for structures.",
        ans:"ans3"
    },
    {
        question:"Q7: One of the following is true for an inline function.",
        a: "It executes faster as it is treated as a macro internally",
        b: "It executes faster because it priority is more than normal function",
        c: "It doesn’t executes faster compared to a normal function",
        d: "None of the above holds true for an inline function",
        ans:"ans1"
    },
    {
        question:"Q8: Where does the abstract class is used ?",
        a: "derived class",
        b: "base class only",
        c: "All of the above",
        d: "None of the Above",
        ans:"ans2"
    },
    {
        question:"Q9: Which interface determines how your class will be used by other program ?",
        a: "private",
        b: "protected",
        c: "public",
        d: "None of the Above",
        ans:"ans3"
    },
    {
        question:"Q10: Pick out the correct statement about override.",
        a: "Overriding has different names.",
        b: "Overriding refers to a derived class function that has the same name and signature as a base class virtual function.",
        c: "All of the above",
        d: "None of the Above",
        ans:"ans2"
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