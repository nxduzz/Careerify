
    {
        question: "On a scale of 1 to 5, how much do you enjoy solving problems?",
        options: [
            { label: "1", value: "humanities" },
            { label: "2", value: "arts" },
            { label: "3", value: "biomaths" },
            { label: "4", value: "computer_science" },
            { label: "5", value: "computer_science" }
        ]
    }
];

// Variables
let currentQuestionIndex = 0;
let userResponses = [];
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-question");
const startQuizButton = document.getElementById("start-quiz");
const resultsDiv = document.getElementById("results");
const resultText = document.getElementById("result-text");

// Start Quiz
startQuizButton.addEventListener("click", () => {
    startQuizButton.quiz.display = "none";
    quizContainer.quiz.display = "block";
    loadQuestion();
});

// Load Question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("label");
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option.value}" required>
            ${option.label}
        `;
        optionsContainer.appendChild(optionElement);
    });

    nextButton.disabled = true;
}

// Handle Option Selection
optionsContainer.addEventListener("change", () => {
    nextButton.disabled = false;
});

// Next Question
nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userResponses.push(selectedOption.value);
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
});

// Show Results
function showResults() {
    quizContainer.style.display = "none";
    resultsDiv.style.display = "block";

    // Calculate scores
    const scores = {};
    userResponses.forEach(response => {
        scores[response] = (scores[response] || 0) + 1;
    });

    // Determine the recommended stream
    const recommendedStream = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    resultText.textContent = `${recommendedStream.charAt(0).toUpperCase() + recommendedStream.slice(1)}`;
}
