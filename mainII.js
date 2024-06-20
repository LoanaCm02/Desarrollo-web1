// punto 1 //
documento.obtenerElementoPorId('iniciarQuizBtn').agregarEventListener('click', iniciarCuentaRegresiva);

function iniciarCuentaRegresiva() {
    documento.obtenerElementoPorId('presentacion').style.display = 'none';
    documento.obtenerElementoPorId('cuentaRegresiva').style.display = 'block';

    let contadorRegresivo = 10;
    const intervaloCuentaRegresiva = setInterval(() => {
        contadorRegresivo--;
        documento.obtenerElementoPorId('contadorRegresivo').innerText = contadorRegresivo;

        if (contadorRegresivo <= 0) {
            clearInterval(intervaloCuentaRegresiva);
            documento.obtenerElementoPorId('cuentaRegresiva').style.display = 'none';
            documento.obtenerElementoPorId('quiz').style.display = 'block';
        }
    }, 1000);
}

documento.obtenerElementoPorId('formularioQuiz').agregarEventListener('submit', function(evento) {
    evento.prevenirDefault();

    const respuestas = {
        q1: '4',  // Respuesta correcta a la pregunta 1
        q2: 'Juan',  // Respuesta correcta a la pregunta 2
        q3: 'Tecnología',  // Respuesta correcta a la pregunta 3
        q4: '2020',  // Respuesta correcta a la pregunta 4
        q5: 'María'  // Respuesta correcta a la pregunta 5
    };

    let puntaje = 0;
    const formularioData = new FormData(evento.target);

    if (formularioData.get('q1') === respuestas.q1) puntaje += 2;
    if (formularioData.get('q2') === respuestas.q2) puntaje += 2;
    if (formularioData.get('q3') === respuestas.q3) puntaje += 2;
    if (formularioData.get('q4') === respuestas.q4) puntaje += 2;
    if (formularioData.get('q5') === respuestas.q5) puntaje += 2;

    mostrarResultado(puntaje);
});

function mostrarResultado(puntaje) {
    documento.obtenerElementoPorId('quiz').style.display = 'none';
    documento.obtenerElementoPorId('resultado').style.display = 'block';

    let puntajeMensaje = '';
    if (puntaje === 10) {
        puntajeMensaje = '¡Felicitaciones! Obtuvo el máximo puntaje';
    } else if (puntaje >= 7 && puntaje <= 9) {
        puntajeMensaje = '¡Muy bien! Su puntaje es alto';
    } else if (puntaje >= 5 && puntaje <= 6) {
        puntajeMensaje = '¡Bien hecho! Puede mejorar';
    } else if (puntaje >= 3 && puntaje <= 4) {
        puntajeMensaje = 'Necesita prestar más atención al blog';
    } else {
        puntajeMensaje = 'Debe leer el blog con más atención';
    }

    documento.obtenerElementoPorId('puntajeMensaje').innerText = puntajeMensaje;
}
