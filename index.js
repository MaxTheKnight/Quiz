const domain = "https://pphs-quiz-machine.herokuapp.com"

function getQuizzes() {
fetch("https://pphs-quiz-machine.herokuapp.com/quizzes")
.then(function(response) {
    return response.json();
})
.then(function(quizzes) {
    console.log(quizzes);
    let QUIZZZ = "";
    for (let i = 0; i < quizzes.length; i++) {
        const quiz = quizzes[i];
         QUIZZZ += `<a href="https://pphs-quiz-machine.herokuapp.com/quizzes/
    ${quiz.id}">${quiz.question}</a>
    <br>
    Number Correct: ${quiz.correct}
    <br>
    Number Incorrect: ${quiz.incorrect}
    <br>
    `
    
    }
    document.getElementById("QUIZZ").innerHTML = QUIZZZ;
});

}

function submitQuiz(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    fetch(domain + "/quizzes", {

        method: "POST",
        body: formData
    })
    .then(response => {
        return response.text();
    })
    .then(result=> {
        alert(result);
    });
}
setInterval(getQuizzes, 2000);
document.getElementById("submitQuiz").onsubmit = submitQuiz;