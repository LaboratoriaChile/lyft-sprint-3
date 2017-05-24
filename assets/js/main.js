/*
//para hacer aparecer el tablero de juego, pero no funciona :( 

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

//intentando hacer el juego con el codigo de blanca

//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

//Ingreso el auto segun coordenadas del usuario (rescato las coordenadas)


var x = document.getElementById("coorx").value;
var y = document.getElementById("coory").value;

tablero[x][y] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("contenedor-tablero");

//Variables temporales 
var fila, casilla;



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
