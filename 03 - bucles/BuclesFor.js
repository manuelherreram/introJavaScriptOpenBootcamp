// Bucle for

for(let i = 0; i < 10; i++){
  console.log(i); 
}

let lista = [1, 2, 4. 6, 12];

for (let i = 0; i < lista.length; i++){
  console.log(lista [i])
}

// Estructura for...Of 
for (let valor of lista){
  console.log(valor);
}

// Estructura forEach
lista.forEach(valor ==>{
  console.log(valor);
}) 

// Estructura for ... in
let persona = {
  nombre: "Manuel",
  apellido: "Herrera",
  edad: 34,
  isDeveloper: true  
}
console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);


for(let propiedad in persona){
  console.log(propiedad);
  console.log(persona[propiedad]);
}