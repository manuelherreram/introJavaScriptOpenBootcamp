let nombre = "Manuel";
let apellido = "Herrera";

let estudiante = nombre.concat(" ", apellido)

console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let largoEstudiante = estudiante.length;
console.log(largoEstudiante);

let primeraLetraNombre = nombre.substring(0, 1);

let primeraLetraApellido = apellido.substring(apellido.length - 1, apellido.length);

let estudianteSinEspacio = estudiante.replace(/ /g, "");
console.log(estudianteSinEspacio);

let nombreEnEstudiante = estudiante.includes(nombre);