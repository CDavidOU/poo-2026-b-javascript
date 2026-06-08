const estudiantes = [
  { id: 1, nombre: "Ana Lopez",    nota: 90 },
  { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
  { id: 3, nombre: "Maria Torres", nota: 78 },
  { id: 4, nombre: "Luis Mendez",  nota: 45 },
  { id: 5, nombre: "Sofia Rios",   nota: 88 },
  { id: 6, nombre: "Pedro Soto",   nota: 62 },
];

const estudianteX ={
    id: 7,
    nombre: "Lucia Gomez",
    nota: 95
}

//Referencias al DOM

    const seccionEstudiante = document.getElementById("lista-estudiantes");
    const seccionPromedio = document.getElementById("resultado-promedio");
    const btnTodos = document.getElementById("btn-todos");
    const btnAprobados = document.getElementById("btn-aprobados");
    const btnReprobados = document.getElementById("btn-reprobados");
    const btnPromedio = document.getElementById("btn-promedio");

    const btnAgregar = document.getElementById("btn-agregar");
    const inputNombre = document.getElementById("input-nombre");
    const inputNota = document.getElementById("input-nota");
    
//Funciones
const crearTarjeta = (unEstudiante) => {
    const estado = unEstudiante.nota > 60 ? "Aprobado" : "Reprobado";
    const clase = unEstudiante.nota > 60 ? "aprobado" : "reprobado";
    const tarjeta = `
    <div class =  "tarjeta ${clase}">
        <h2>${unEstudiante.nombre}</h2>
        <p>Nota: ${unEstudiante.nota}</p>
        <p>${estado}</p>
    </div>
    `;
    return tarjeta;
}

const renderizarLista = (estudianteApintar) => {
    const listaTarjetas = estudianteApintar.map(
        (unEstudiante) => {
            const tarjeta = crearTarjeta(unEstudiante);
            return tarjeta;
        }

    );
    seccionEstudiante.innerHTML=listaTarjetas.join("")
}

const toFixedTrunc = (num, decimales) => {
    // 10 elevado al número de decimalers que deseas conservar 
    const factor = Math.pow(10, decimales);

    //multiplica, corta los decimales restantes y velve a dividir
    const truncado = Math.trunc(num * factor) / factor;

    //retorna el string con el formato fijo final sin redondear
    return truncado.toFixed(decimales);
}

//Eventos

btnTodos.addEventListener('click',() => {
        renderizarLista(estudiantes);
    }
);

btnAprobados.addEventListener('click',() => {
        const aprobados = estudiantes.filter(
            (estudianteX)=>{
                return estudianteX.nota > 60;
            }
        );
    renderizarLista(aprobados);
    }
);

btnReprobados.addEventListener('click',() => {
        const reprobados = estudiantes.filter(
            (estudianteX)=>{
                return estudianteX.nota < 61;
            }
        );
    renderizarLista(reprobados);
    }
);

btnPromedio.addEventListener('click', () => {
        const sumaNotas = estudiantes.reduce(
            (estudianteX,estudiante) => { //(Acumulador, variable que lo utiliza)
                return estudianteX + estudiante.nota;
            },0
        );
        const promedio = sumaNotas / estudiantes.length;
        console.log(toFixedTrunc(promedio,2));
        seccionPromedio.innerHTML = "Promedio: " + toFixedTrunc(promedio,2);
        seccionPromedio.style.display = "block"; //Muestra de nuevo
    }
);  

btnAgregar.addEventListener('click', ()=>{
    const nombre = inputNombre.value.trim(); //" ANA " = "ANA"
    const nota = parseInt(inputNota.value.trim());

    if (nombre == "" || isNaN(nota) || nota < 0 || nota >100 ){
        alert("Por favor, ingresa unn nombre váldo y una nota entre 0 y 100");
        return;
    }

    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre, // = nombre: nombre
        nota // = nota: nota
    };
    estudiantes.push(nuevoEstudiante);
    renderizarLista(estudiantes);

    inputNombre.value = "";
    inputNota.value = "";
});

//Llamadas a funciones
renderizarLista(estudiantes);