//const operaciones = ["suma","resta","multiplica","divide"];
type Operaciones = "suma" | "resta" | "multiplica" | "divide"
type Resultados = number | string;
const calculadora = (a:number,b:number,operacion: Operaciones):number =>{
    if(operacion == "suma"){
        return a+b;;
    }
    if(operacion == "resta"){
        return a-b;
    }
    if(operacion == "multiplica"){
        return a*b;
    }
    if(operacion == "divide"){
       if(b==0){
           throw new Error("No se puede dividir entre 0");  
        }
        return a/b;
    }
    throw new Error("Operacion no permitida");
}
console.log(calculadora(2,4,"suma"));
console.log(calculadora(2,4,"resta"));
console.log(calculadora(2,4,"multiplica"));
console.log(calculadora(2,4,"divide"));
console.log(calculadora(2,0,"divide"));

