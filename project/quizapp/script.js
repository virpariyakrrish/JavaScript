const quiz = [

    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System"
        ],
        answer: "Programming Language"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "float",
            "char"
        ],
        answer: "var"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "=="
        ],
        answer: "//"
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
        ],
        answer: "Netscape"
    },

    {
        question: "Which method displays output in the browser console?",
        options: [
            "console.log()",
            "document.write()",
            "alert()",
            "print()"
        ],
        answer: "console.log()"
    },

    {
        question: "Which operator is used for strict equality?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which loop is guaranteed to execute at least one time?",
        options: [
            "for",
            "while",
            "do...while",
            "foreach"
        ],
        answer: "do...while"
    },

    {
        question: "Which function converts a string into an integer?",
        options: [
            "parseInt()",
            "parseFloat()",
            "Number()",
            "toString()"
        ],
        answer: "parseInt()"
    },

    {
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
    },

    {
        question: "Which method removes the last element from an array?",
        options: [
            "pop()",
            "push()",
            "shift()",
            "slice()"
        ],
        answer: "pop()"
    },

    {
        question: "Which keyword is used to declare a constant variable?",
        options: [
            "const",
            "let",
            "var",
            "constant"
        ],
        answer: "const"
    },

    {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: [
            "let",
            "var",
            "int",
            "constvar"
        ],
        answer: "let"
    },

    {
        question: "Which method is used to remove the first element of an array?",
        options: [
            "shift()",
            "pop()",
            "push()",
            "slice()"
        ],
        answer: "shift()"
    },

    {
        question: "Which method adds an element at the beginning of an array?",
        options: [
            "unshift()",
            "push()",
            "shift()",
            "splice()"
        ],
        answer: "unshift()"
    },

    {
        question: "Which keyword is used to define a function?",
        options: [
            "function",
            "method",
            "define",
            "func"
        ],
        answer: "function"
    },

    {
        question: "Which method is used to display a popup message?",
        options: [
            "alert()",
            "prompt()",
            "confirm()",
            "console.log()"
        ],
        answer: "alert()"
    },

    {
        question: "Which method is used to take input from the user?",
        options: [
            "prompt()",
            "alert()",
            "confirm()",
            "input()"
        ],
        answer: "prompt()"
    },

    {
        question: "Which value represents an undefined variable?",
        options: [
            "undefined",
            "null",
            "false",
            "0"
        ],
        answer: "undefined"
    },

    {
        question: "Which operator is used to assign a value?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "="
    },

    {
        question: "Which event occurs when a button is clicked?",
        options: [
            "onclick",
            "onload",
            "onchange",
            "onmouseover"
        ],
        answer: "onclick"
    }

];

let index = 0;
let score = 0;
let timer;
let timeLeft = 60;
let answers = new Array(quiz.length).fill(null);
let timeup = [];

const quizBox = document.querySelector(".quiz-box");
const previousBtn = document.querySelector(".Previous");
const nextBtn = document.querySelector(".next");
const submitBtn = document.querySelector(".submit");

function loadQuestion() {

    clearInterval(timer);

    timeLeft = 60;

    document.querySelectorAll(".timer span")[0].innerText = "01";
    document.querySelectorAll(".timer span")[1].innerText = "00";

    quizBox.innerHTML = `
        <article>
            <h2>${index + 1}. ${quiz[index].question}</h2>
            <main>
                <aside class="opetions">${quiz[index].options.map(option => `<div class="opb">
                <input type="radio"name="que-1"value="${option}"${answers[index] === option ? "checked" : ""}>
                <label>${option}</label>
                </div>`).join("")}
                </aside>
            </main>
        </article>
    `;

    document.querySelectorAll(".opb").forEach(box => {
        box.onclick = function () {
            box.querySelector("input").checked = true;
        };
    });

    previousBtn.disabled = index === 0;
    nextBtn.disabled = index === quiz.length - 1;

    timer = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.querySelectorAll(".timer span")[0].innerText =
            min < 10 ? "0" + min : min;
        document.querySelectorAll(".timer span")[1].innerText =
            sec < 10 ? "0" + sec : sec;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeup.push(index);
            alert("Time Up!");
            if (index < quiz.length - 1) {
                index++;
                loadQuestion();
            } else {
                submitBtn.click();
            }
        }
    }, 1000);
}

loadQuestion();
nextBtn.onclick = function () {
    let selected = document.querySelector('input[name="que-1"]:checked');
    if (selected) {
        answers[index] = selected.value;
    }
    if (index < quiz.length - 1) {
        index++;
        loadQuestion();
    }
};

previousBtn.onclick = function () {

    let selected = document.querySelector('input[name="que-1"]:checked');
    if (selected) {
        answers[index] = selected.value;
    }
    if (index > 0) {
        index--;
        loadQuestion();
    }
};

submitBtn.onclick = function () {
    let selected = document.querySelector('input[name="que-1"]:checked');
    if (selected) {
        answers[index] = selected.value;
    }
    clearInterval(timer);
    score = 0;
    for (let i = 0; i < quiz.length; i++) {
        if (answers[i] === quiz[i].answer) {
            score++;
        }

    }

    let totalQuestions = quiz.length;
    let wrongAnswers = totalQuestions - score - timeup.length;
    if (wrongAnswers < 0) {
        wrongAnswers = 0;
    }
    let percentage = ((score / totalQuestions) * 100).toFixed(0);
    let result = percentage >= 40 ? "PASS ✅" : "FAIL ❌";
    document.querySelector(".wrapper").innerHTML = `
    
    <div class="result">

        <h1>🎉 Quiz Finished 🎉</h1>
        <hr>
        <h3>Total Questions : ${totalQuestions}</h2>
        <h3>Correct Answers : ${score}</h2>
        <h3>Wrong Answers : ${wrongAnswers}</h2>
        <h3>Time Up Questions : ${timeup.length}</h2>
        <h3>Your Score : ${score} / ${totalQuestions}</h2>
        <h3>Percentage : ${percentage}%</h2>
        <h3>Result : ${result}</h2>
        <br>

        <button id="restart">Restart Quiz</button>

    </div>

    `;

    document.querySelector("#restart").onclick = function () {
        location.reload();
    };
};