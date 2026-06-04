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

// función filter

const numerosX = [90, 70, 30, 10, 50];
const numerosFiltrados = numerosX.filter(
numX => numX > 50
);

console.log(numerosFiltrados);


const personas = [
    {
        nombre: "Carlos",
        edad: 19
    },
    {
        nombre: "David",
        edad: 19
    },
    {
        nombre: "Gabriel",
        edad: 16
    },
    {
        nombre: "Yelin",
        edad:15
    },
];

const personasMayores = personas.filter(
    personaX => personaX.edad > 17
)
console.log(personasMayores);

// Función reduce

const numerosY =[3,6,9,12,16];

const sumaNumero = numerosY.reduce( 
    (variablePersistente, elemento) => 
        variablePersistente + elemento 
    ,
    0
);
console.log(sumaNumero);