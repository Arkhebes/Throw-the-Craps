var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;

window.onload = init;

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",iniciar);

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
}

function tirardado(){
return Math.floor(Math.random() * 6) + 1 ;
}

function cambiarDado(ref,cara){
ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function iniciar(){
tiro_1 = tirardado();
tiro_2 = tirardado();
cambiarDado(dado1,tiro_1);
cambiarDado(dado2,tiro_2);
}