// start quiz from opinion content container
function scrollToQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.scrollIntoView({ behavior: "smooth" });

    const startButton = document.getElementById("startQuizButton");
    //start quiz button will remain regardless whether the user clicks it or not
    startButton.style.display = "block";
}

//quiz js
const questions = [
    {
        qn: "How many million tons of plastic are dumped into the oceans every year?",
        opts: ["11 million tons", "5 million tons", "50 million tons", "20 million tons"],
        ans: "11 million tons"
    },
    {
        qn: "When toxic chemicals from plastic are released into the soil, who does it affect?",
        opts: ["Plants", "Animals", "Humans", "All of the above"],
        ans: "All of the above"
    },
    {
        qn: "What are the 3 R's?",
        opts: ["Reduce,Repurpose,Replant", "Reduce,Reduce,Recycle", "Remove,Replace,Renew", "Replenish,Rebuild,Relocate"],
        ans: "Reduce,Reduce,Recycle"
    }
];

let currentQuestion = 0;
let score = 0;

//display question
function displayQuestion() {
    const qnDiv = document.getElementById("qn");
    const optsDiv = document.getElementById("opts");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");
    const startButton = document.getElementById("quizStartButton");

    qnDiv.textContent = questions[currentQuestion].qn;
    optsDiv.innerHTML = "";

    questions[currentQuestion].opts.forEach((opt) => {
        const optButton = document.createElement("button");
        optButton.textContent = opt;
        optButton.classList.add("opt");
        optButton.addEventListener("click", () => selectOption(opt));
        optsDiv.appendChild(optButton);
    });

    nextButton.style.display = "none";
    restartButton.style.display = "none";
    startButton.style.display = "block";
}

//javascript to start quiz
function startQuiz() {
    const startButton = document.getElementById("startButton");
    const qnDiv = document.getElementById("qn");
    const optsDiv = document.getElementById("opts");
    const resultDiv = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    startButton.style.display = "none";
    qnDiv.style.display = "block";
    optsDiv.style.display = "block";
    resultDiv.style.display = "block";
    nextButton.style.display = "none";
    restartButton.style.display = "none";

    currentQuestion = 0;
    score = 0;
    document.getElementById("result").textContent = "";
    displayQuestion();
}

// javascript to the nextquestion
function nextQuestion() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

// java script for option
function selectOption(opt) {
    const resultDiv = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    if (opt === questions[currentQuestion].ans) {
        resultDiv.textContent = "Correct!";
        score++;
    } else {
        resultDiv.textContent = `Incorrect! The correct answer is: ${questions[currentQuestion].ans}`;
    }

    const opts = document.getElementsByClassName("opt");
    for (let i = 0; i < opts.length; i++) {
        opts[i].disabled = true;
    }

    nextButton.style.display = "block";
    restartButton.style.display = "none";
}

//display final socre for quiz
function showScore() {
    const qnDiv = document.getElementById("qn");
    const optsDiv = document.getElementById("opts");
    const resultDiv = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    qnDiv.style.display = "none";
    optsDiv.style.display = "none";
    nextButton.style.display = "none";
    restartButton.style.display = "block";

    resultDiv.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>
      <p>Thank you for taking the quiz!</p>
    `;

    // Scroll back to the top of the page
    setTimeout(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000); // 1 sec
}

//to restart the quiz
function restartQuiz() {
    const startButton = document.getElementById("startButton");
    const qnDiv = document.getElementById("qn");
    const optsDiv = document.getElementById("opts");
    const resultDiv = document.getElementById("result");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    startButton.style.display = "block";
    qnDiv.style.display = "none";
    optsDiv.style.display = "none";
    resultDiv.style.display = "none";
    nextButton.style.display = "none";
    restartButton.style.display = "none";

    const opts = document.getElementsByClassName("opt");
    for (let i = 0; i < opts.length; i++) {
        opts[i].disabled = false;
    }

    currentQuestion = 0;
    score = 0;
}
document.getElementById("nextButton").style.display = "none";
document.getElementById("restartButton").style.display = "none";