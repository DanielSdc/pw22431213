/*document.write("<h1>Hola</h1>");
console.log("consola desde JS");

//Variables
//Tipado debil
let x=1;
console.log(typeof(x));
let espw = false;
console.log(typeof(espw));

if(espw){
    console.log("estamos en clase")
}else{
    console.log("no estamos en clase")
}

let number = -31231.23;
console.log(number);

let cadena = "una cadena 'comillas'";
console.log(cadena);
let cadena2 = 'otra "cadena"'
console.log(cadena2);
let cadena3 = `otra cadena
incluso puedo tener rengloes
y variables ${number}`; 
console.log(cadena3);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1)

let usuario = {nombre:"Daniel", [id1]:123};
console.log(usuario.nombre+" "+usuario[id1]);

let variablenula = null;
console.log(variablenula);

let arreglo = [1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(1);
console.log(arreglo);

let objeto = {nombre:"Daniel", edad:23};
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

//alert("Alerta en pantalla");
//let edad = prompt("Dame la edad",0);
//console.log(edad);

let variable = "valor"
const CONSTANTE = "valor";

function miFuncion(a=2){
    return 2*a;
}
console.log(miFuncion(6));

const funcionFlecha = (a=2) => {
    return 2*a;
};
console.log(funcionFlecha(a=8));

//Destructuring - destructurar
//Objetos

const usuarios = {
    nombre: "Daniel",
    apellido: "Castro",
}

//let nombre = usuarios.nombre;
//let apellido = usuarios.apellido;
const {nombre, apellido} = usuarios;
console.log(nombre+" "+apellido);

//Otro objeto
const usuario2 = {
    nombre: "Daniel",
    apellido: "Castro",
    redes: {
        sociales:{
            twx: '@miusuario',
            face: '@miface'
        }
    }
}

//const face = usuarios2.redes.sociales.face;
//const {twx, face} = usuarios2.redes.sociales;
//console.log(twx+" "+face);

const {redes:{sociales:{twx, face}}} = usuario2;
console.log(twx+" "+face);

//Arreglos
const arregloNombres = ["Daniel", "Juan", "Martin"];
//let nombre1 = arregloNombres[0];
//let nombre3 = arregloNombres[2];
const [nombre1, , nombre3] = arregloNombres;
console.log(nombre1+" "+nombre3);

//Combinaciones
//objetos
const usuario3 = {
    direccion: 'conocida',
    numerocasa: '123'
}

const nuevoObjeto= {...usuario2, ...usuario3};
console.log(nuevoObjeto);

//Arreglos
const arregloApellidos = ["Castro", "Perez", "Gomez"];
const nuevoArreglo = [...arregloNombres, ...arregloApellidos];
console.log(nuevoArreglo);

const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//foreach, for, map, reduce === iterar arreglos
for(let i=0;i<nuevoArreglo.length;i++){
    console.log(nuevoArreglo[i]);
}

nuevoArreglo.forEach(function(nombre){
    console.log(nombre);
})

let numeros = [1,2,3,4,5];
let suma=0;
numeros.forEach(function(numero){
    suma+=numero;
})
console.log(suma);

//Map
let precios = [10,20,30,40,50];
const conversion = 0.85;
let preciosNuevos=precios.map(function(precios){
    return precios*conversion;
})
console.log(preciosNuevos);

//Reduce
let sumaPrecios = precios.reduce(function(suma, precio){
    return suma+precio;
},0);

console.log(sumaPrecios);

//Clases
class Animal{
    constructor(nombre){
        this.nombre = nombre
    }
    habla(){
        console.log("Este "+this.nombre+" hace ruido");
    }
}

class Perro extends Animal{
    habla(){
        console.log("Mi perro "+this.nombre+" ladra"); 
    }
}

const perro = new Perro("Hunter");
perro.habla();*/

//Closueres
const variablefuncion = function(){
    return "HOLA";
}
console.log(variablefuncion());
const saludo = "¡Hola";
function externa(){
    const persona = " Daniel ";
    function interna(){
        const fin = "Castro!"
        return saludo+persona+fin
    }
    return interna;
}

console.log(externa()());
const closure = externa();
console.log(closure());

//Otro ejemplo
const miContador = (function(){  //funcion que guarda funciones
    let contador = 0;
    function incrementar(){
        return contador++;
    }
    function decrementar(){
        return contador--;
    }
    function valor(){
        return contador;
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})(); //ejecuta la funcion principal

console.log(miContador);
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());

//Promesas
let datos = [
    {
        id: 1,
        materia: "PW",
        semestre: 6
    },
    {
        id: 2,
        materia: "POO",
        semestre: 1
    },
    {
        id: 3,
        materia: "Estructura de datos",
        semestre: 2
    }
];


// console.log(datos);
//datos = [];
//Funcion simulacion obtencion datos servidor remoto
const obtenerDatos = () => {
    return new Promise((resolve, reject)=>{
        if(datos.length === 0){
            reject(new Error("No hay datos"));
        }
        setTimeout(() => {
            resolve(datos);
        }, 2000); //milisegundos 
    })
}

//Funcion async debe esperar a que termine de obtener la informacion
async function procesarDatos(){
    try{
        const misdatos = await obtenerDatos()
        console.log(misdatos);
    }catch(err){
        console.error(err.message);
    }
}

procesarDatos();
//console.log(obtenerDatos());