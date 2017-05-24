var auto = {
 UP:38,
 DOWN: 40,
 LEFT: 37,
 RIGTH: 39
};

console.log(auto);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("purple", x-1, y-1, x+1, y+1, papel);

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
	if (evento.keyCode == auto.UP) 
	{
		console.log("vamos para arriba");
	}

	if (evento.keyCode == auto.DOWN) 
	{
		console.log("vamos para abajo");
	}

	if (evento.keyCode == auto.LEFT) 
	{
		console.log("vamos para la izquierda");
	}

	if (evento.keyCode == auto.RIGTH) 
	{
		console.log("vamos para la derecha");
	}

	var color = "purple";
	var movimiento = 1;

	switch(evento.keyCode)
	{
		case auto.UP:
			dibujarLinea(color, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;

		case auto.DOWN:
			dibujarLinea(color, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;

		case auto.LEFT:
			dibujarLinea(color, x, y, x - movimiento, y, papel);
			x = x - movimiento;
		break;

		case auto.RIGTH:
			dibujarLinea(color, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;

		
	}
}