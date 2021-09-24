
class Persona {
    nombre: string;
    direccion: string;
    hijos:string[]

    constructor(
        nombre:string,
        direccion:string,
        hijos:string[]
    ){
        this.nombre = nombre;
        this.direccion = direccion;
        this.hijos = hijos;
    }

    getMostrarPersona(): void {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Direccion: ${this.direccion}`)
        console.log(`Hijos: ${this.hijos}`)
    } 
}

console.log("Clase Persona")
let persona1 = new Persona("Yilberth Andres", "Cll 33", ["Oliver", "Loki"])
console.log(persona1.getMostrarPersona())


class Empleado extends Persona {
    cargo: string;
    salario: string;

    constructor(
        nombre:string,
        direccion:string,
        hijos:string[],
        cargo: string,
        salario: string
    ){
        super(nombre, direccion, hijos)
        this.cargo = cargo;
        this.salario = salario;
    }

    getMostrarEmpleado():void{
        super.getMostrarPersona()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Hijos: ${this.cargo}`) 
    }
}


let empleado1 = new Empleado("Yilberth Andres", "Cll 33", ["Oliver", "Loki"], "Estudiante", "400.000")
console.log("Clase empleado")
console.log(empleado1.getMostrarEmpleado())