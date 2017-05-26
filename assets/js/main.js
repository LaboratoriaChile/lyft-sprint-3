class Taxi{
	constructor(x,y){
		this.posicion_x = parseInt(x);
		this.posicion_y = parseInt(y);
	}
	right(max){
		(max > this.posicion_y + 1) ? this.posicion_y++ : max-1;
	}
	left(){
		(0 < this.posicion_y) ? this.posicion_y-- : 0;
	}
	up(){
		(0 < this.posicion_x) ? this.posicion_x-- : 0;
	}
	down(max){
		(max > this.posicion_x + 1) ? this.posicion_x++ : max-1;
	}
	coordenadas(){
		console.log(this.posicion_x + " , " + this.posicion_y)
	}
}

class Tablero{
	constructor(x,y,selector,taxi){
		this.tablero = new Array(y);
		for(var i = 0; i < this.tablero.length; i++){
			this.tablero[i] = new Array(x);
			for (var j = 0; j < this.tablero[i].length; j++) {
				this.tablero[i][j] = "empty";
			}
		}
		this.box = document.querySelector(selector);
		this.taxi = taxi;
		this.tablero[taxi.posicion_x][taxi.posicion_y] = "taxi";
	}
	dibujarTablero(){
		var casilla, fila;
		this.box.innerHTML = "";
		for(var i = 0; i < this.tablero.length; i++){
			fila = document.createElement("div");
			fila.classList.add("fila");
			this.box.appendChild(fila);
			for (var j = 0; j < this.tablero[i].length; j++) {
				casilla = document.createElement("div");
				casilla.classList.add(this.tablero[i][j]);
				fila.appendChild(casilla);
			}
		}
	}
	posicionarTaxi(){
		this.tablero[this.taxi.posicion_x][this.taxi.posicion_y] = "taxi";
	}
	posVisitada(){
		this.tablero[this.taxi.posicion_x][this.taxi.posicion_y] = "visitada";
	}
}

function controls(coord_x,coord_y){
	var miTaxi = new Taxi(coord_x,coord_y);
	var x = 10;
	var y = 6;
	var miTablero = new Tablero(x, y, "#tablero", miTaxi);
	miTablero.dibujarTablero();
	
	document.addEventListener("keydown", function(e){
		e.preventDefault();
		if(e.keyCode >= 37 && e.keyCode <= 40){
			miTablero.posVisitada();
			if(e.keyCode == 39){ //right
				console.log("presione derecha");
				miTaxi.right(x);				
			}
			if(e.keyCode == 37){ //left
				miTaxi.left();
			}
			if(e.keyCode == 38){ //up
				miTaxi.up();
			}
			if(e.keyCode == 40){ //down 
				miTaxi.down(y);
			}
			miTaxi.coordenadas();
			miTablero.posicionarTaxi();
			miTablero.dibujarTablero();
		}else{
			return false;
		}
	});
}

document.getElementById("start-button").addEventListener("click", function(e){
	e.preventDefault();
	var x = document.getElementById("coord_x").value;
	var y = document.getElementById("coord_y").value;	
	controls(x,y);
});