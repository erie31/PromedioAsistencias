const nombre = prompt ("Ingrese nombre y apellido del alumno");
const clases = 20;
let asistencias = parseFloat(prompt("Ingrese la cantidad de Asistencias"));

let promedio = (asistencias/clases)*100;

	if(promedio >= 75){
		alert("El promedio es "+promedio+"% BIEN HECHO");
	}else{
		alert("El promedio es "+promedio+"% RECURSAR");}