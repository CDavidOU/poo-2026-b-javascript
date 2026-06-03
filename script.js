console.log("Hola mundo");

const nombre="Carlos";
let apellido="Ortega";

console.log(nombre);
console.log(apellido);

//nombre = "David";
apellido = "Urías";

console.log(apellido);


// Obejtos de JavaScript
const persona = {
    nombre : "Carlos",
    apellidos : "Ortega",
    edad : 19,
    apodos : [
        "Carlitos",
        "Enlace",
        "Arlos",
        "Car"
    ]
};

console.log(persona);
console.log(persona.apodos);
persona.apellidos = "Urías";
console.log(persona.apellidos); 
console.log("===============Fin Objetos=================");

//Funciones en JavaScript
/*function saludar (nombre){
    return "Hola " + nombre;
}
*/
/*const saludar = (nombre) =>{
    return "Hola " + nombre
}
*/

const saludar = nombre =>
     "Hola " + nombre

const saludo = saludar(persona.apellidos);// Hola Carlos
console.log (saludo);
console.log("===============Fin Funciones=================");
console.log("===============Listas=================");

const listaNumeros = [
    5, 10, 3, 8, 9
];
console.log(listaNumeros);
listaNumeros[3] = 7;
console.log(listaNumeros);

const numerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy) =>{
        return numeroEnElQueVoy * 3;
    }
);
console.log(numerosMultiplicados);

const numerosEnObjetos = listaNumeros.map(
    (numeroEnElQueVoy) =>{
        return {
            valor : numeroEnElQueVoy
        }
    }
);
console.log(numerosEnObjetos);