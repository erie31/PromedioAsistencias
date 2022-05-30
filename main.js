const nombre = prompt ("Ingrese nombre y apellido del alumno");
const clases = 20;
let asistencias = parseInt(prompt("Ingrese la cantidad de Asistencias (no mayor a 20)."));

let promedio = (asistencias/clases)*100;

	if(promedio >= 75){
		alert("El promedio es "+promedio+"% BIEN HECHO");
	}else{
		alert("El promedio es "+promedio+"% RECURSAR");}