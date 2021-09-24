"use strict";
var prueba = function () {
    console.log("Probando el codigo");
};
console.log(prueba());
//clases
var estudiante = /** @class */ (function () {
    function estudiante(codigo, nombre, apellido, telefono, edad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.edad = edad;
    }
    estudiante.prototype.getMostarEstudiante = function () {
        console.log("Codigo: " + this.codigo);
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
        console.log("Telefono: " + this.telefono);
    };
    return estudiante;
}());
var estud = new estudiante(1, "Marlon", "Alarcon", 3135680972, 21);
var estud1 = new estudiante(2, "Juan", "Javier", 3156780972, 24);
console.log("------ Estudiante1 ------");
console.log(estud.getMostarEstudiante());
console.log("");
console.log("------ Estudiante2 ------");
console.log(estud1.getMostarEstudiante());
//multiplicar
var multiplicar = function (x, y) {
    return (x * y);
};
var m = multiplicar(8, 4);
console.log("la multiplicacion de 8 y 4 es ", m);
//basico
var minombre = function (nombre) {
    console.log(" Mi nombre es: " + nombre);
};
minombre("Marlon Alarcon");
console.log("");
// Mostrar
console.log(minombre);
