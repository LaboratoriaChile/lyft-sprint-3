<<<<<<< HEAD
/*
//para hacer aparecer el tablero de juego, pero no funciona :( 
=======

>>>>>>> ed79deba78cd1535ccab747cc6948afc62809867

var button=document.getElementById("boton-juego");

button.addEventListener("click", function() {
  var div = document.getElementById("contenedor-tablero");
    if (div.style.display !== "none") {
        div.style.display == "none";
    }
    else {
        div.style.display == "block";
    }

});

<<<<<<< HEAD
//intentando hacer el juego con el codigo de blanca
=======
>>>>>>> ed79deba78cd1535ccab747cc6948afc62809867

//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
<<<<<<< HEAD

//Ingreso el auto segun coordenadas del usuario (rescato las coordenadas)


var x = document.getElementById("coorx").value;
var y = document.getElementById("coory").value;

tablero[x][y] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("contenedor-tablero");

//Variables temporales 
var fila, casilla;


=======
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

var x = document.getElementById("coorx").value;
var y = document.getElementById("coory").value;
>>>>>>> ed79deba78cd1535ccab747cc6948afc62809867

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}
<<<<<<< HEAD

otro intento del juego

//rescato el valor de las coordenadas ingresadas por el usuario, para que este sea mi punto de partida

var x = document.getElementById("coorx").value;
var y = document.getElementById("coory").value;

//inserto estas variables en una funcion general

function Juego(x,y){
  this.x=x;
  this.y=y;

}

function direccion(){

}

new Juego=(x,y);

//cuando apretan boton "START" llama a la funcion principal para que empiece el juego

var boton=document.getElementById("boton-juego");

botton.addEventListener("click", function() {


  */

var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keyup", dibujarTeclado);
function dibujarTeclado(evento)
{
  console.log(evento.keyCode);
}
=======
>>>>>>> ed79deba78cd1535ccab747cc6948afc62809867
