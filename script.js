const quizDB = [
    {
        question: "Q1 : What is the full form of HTML? ",
        a: "Hello To My land",
        b: "Hey Text Markup language",
        c: "HyperText Makeup language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 : What is the full form of css? ",
        a: "Cascading Styles Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: 'Q3. what is the full form of http? ',
        a: "HyperText Transfer Product",
        b: "Hypertext Test Protocal ",
        c: "Hey Transfer protocal ",
        d: "Hypertext Transfer Protocal",
        ans: "ans4"
    },
    {
        question: "what is the full form of js? ",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "jorderShoes",
        ans: "ans1"
    }
];

const question =document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");


const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
    
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsEl) => {
        if (curAnsEl.checked) {
            answer = curAnsEl.id;
        }
    });
    return answer;
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> Your Score ${score}/${quizDB.length}✌️ </h3>
        <button class="btn" onclick="location.reload()">Play Again </button>
        
        `;
        showScore.classList.remove("scoreArea");
    }
        

});


