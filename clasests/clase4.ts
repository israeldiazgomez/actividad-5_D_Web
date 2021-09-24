let prueba=function(){
    console.log(`Probando el codigo`)
}
console.log(prueba());

//clases

class estudiante{
    codigo: number;
    nombre: String;
    apellido: String;
    telefono: Number;
    edad: Number;

    constructor(
        codigo: number,
        nombre: String,
        apellido: String,
        telefono: Number,
        edad: Number
    ){
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.edad = edad;
    }

    getMostarEstudiante(): void{
        console.log(`Codigo: ${this.codigo}`)
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
        console.log(`Telefono: ${this.telefono}`)

    }
}

let estud = new estudiante ( 1 , "Marlon" , "Alarcon" , 3135680972 , 21 )
let estud1 = new estudiante ( 2 , "Juan" , "Javier" , 3156780972 , 24 )

console.log("------ Estudiante1 ------")
console.log(estud.getMostarEstudiante())
console.log("")
console.log("------ Estudiante2 ------")
console.log(estud1.getMostarEstudiante())

//multiplicar

let multiplicar = (x: number , y:number):number => {
    return (x*y)
}

let m = multiplicar(8,4)

console.log("la multiplicacion de 8 y 4 es " , m)

//basico

let minombre = function(nombre: string){
    console.log(` Mi nombre es: ${nombre}`)
}

minombre("Marlon Alarcon")

console.log("")
// Mostrar
console.log(minombre)

