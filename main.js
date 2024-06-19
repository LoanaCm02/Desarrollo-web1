window.addEventListener('load', iniciar, false);
window.addEventListener('load', iniciarReloj, false);


//Eventos Onmouseout y Onmouseover:

function iniciar() {

var imagen = document.getElementById('Foto 1');

imagen.addEventListener('mouseover', otraImagen, false);
imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
    var imagen = document.getElementById('Foto 1').src = "img/boca.jpg";
}

function otraImagen() {
    var imagen = document.getElementById('Foto 1').src = "img/boca2.jpg";
}


//Reloj Digital:

function iniciarReloj() {
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
}

function actualizarReloj() {
    const ahora = new Date();
    
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const anio = ahora.getFullYear();
    
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const ampm = horas >= 12 ? 'PM' : 'AM';
    
    horas = horas % 12;
    horas = horas ? horas : 12; // La hora '0' debe ser '12'
    
    const strHoras = horas < 10 ? '0' + horas : horas;
    const strMinutos = minutos < 10 ? '0' + minutos : minutos;
    const strSegundos = segundos < 10 ? '0' + segundos : segundos;
    
    const fecha = `${diaSemana} ${dia} de ${mes} de ${anio}`;
    const hora = `${strHoras}:${strMinutos}:${strSegundos} ${ampm}`;
    
    document.getElementById('reloj-digital').innerHTML = `${fecha}<br>${hora}`;
}
