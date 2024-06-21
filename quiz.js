function submitQuiz() {
    var correctAnswers = {
        q1: '3',
        q2: 'Celina',
        q3: 'Matias',
        q4: 'Spiderman',
        q5: 'Loana'
    };

    var form = document.getElementById('quiz-form');
    var resultElement = document.getElementById('quiz-result');
    var score = 0;

    for (var key in correctAnswers) {
        var userAnswer = form[key].value.trim();
        if (userAnswer.toLowerCase() === correctAnswers[key].toLowerCase()) {
            score += 2;
        }
    }

    var message;
    if (score === 10) {
        message = '¡Felicitaciones! Obtuvo el máximo puntaje.';
    } else if (score >= 7) {
        message = '¡Muy bien! Obtuvo un puntaje alto.';
    } else if (score >= 5) {
        message = '¡Bien hecho! Aunque puede mejorar.';
    } else if (score >= 3) {
        message = 'Siga intentando, puede hacerlo mejor.';
    } else {
        message = 'Tomate un tiempo para ver nuestro blog y conocernos mejor. ¡Hasta pronto!';
    }

    resultElement.innerHTML = `<p>Puntaje: ${score}</p><p>${message}</p>`;
    resultElement.style.display = 'block';
}

