window.addEventListener('load', iniciar, false);

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
