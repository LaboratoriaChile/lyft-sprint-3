var teclas = {
 UP:38,
 DOWN: 40,
 LEFT: 37,
 RIGTH: 39
};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 20;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();
}

function dibujarTeclado(evento)
{
	if (evento.keyCode == teclas.UP) 
	{
		console.log("vamos para arriba");
	}

	if (evento.keyCode == teclas.DOWN) 
	{
		console.log("vamos para abajo");
	}

	if (evento.keyCode == teclas.LEFT) 
	{
		console.log("vamos para la izquierda");
	}

	if (evento.keyCode == teclas.RIGTH) 
	{
		console.log("vamos para la derecha");
	}

	var colorcito = "purple";
	var movimiento = 1;

	switch(evento.keyCode)
	{
		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;

		case teclas.DOWN:
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;

		case teclas.LEFT:
			dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
		break;

		case teclas.RIGTH:
			dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;

		default:
		console.log("otra tecla");
		 break;
	}
}