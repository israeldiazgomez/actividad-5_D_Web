//Objetos
let persona2: {
    nombre:string,
    direccion:string,
    hijos:string[]
} = {
    nombre: "Israel Diaz",
    direccion: "Carrera21",
    hijos: ["Israel","Yiliber","Leinys"]
}
let persona3: {
    nombre:string,
    direccion:string,
    hijos:string[]
} = {
    nombre: "Israel Diaz",
    direccion: "Carrera21",
    hijos: ["Israel","Yiliber","Leinys"]
}
console.log(persona2);
console.log(persona3);
console.log("Objetos personalizados")
// Objetos personalizados
type Person9 = {
    nombre1:string,
    direccion1?:string, //DIRECCION PUEDE SER OPCIONAL
    hijos1:string[]
}
let person4: Person9 = {
    nombre1: " Diaz Israel",
    // direccion1: "Car99",
    hijos1: ["diaz","gomez","Leinyxs"]
}
let person5: Person9 = {
    nombre1: "Israeldc Diaz",
    direccion1: "Carrercda21",
    hijos1: ["Isrdael","Yilibder","Leindys"]
}
console.log(person4);
console.log(person5);


console.log("INTERFACE")
//INTERFACE
interface Person10 {
    nombre1:string,
    direccion1?:string,
    hijos1:string[],
    mostrarPerson: () => string
}


let person6: Person10 = {
    nombre1: "Gomez perez",
    direccion1: "calle 25",
    hijos1: ["pollo","fermi","ñaparin"],
    mostrarPerson(): string {
        return (`Nombre y Direccion: ${this.nombre1} - ${this.direccion1} `)
    }
}
console.log(person6.mostrarPerson());