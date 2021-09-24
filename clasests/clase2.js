"use strict";
//Objetos
var persona2 = {
    nombre: "Israel Diaz",
    direccion: "Carrera21",
    hijos: ["Israel", "Yiliber", "Leinys"]
};
var persona3 = {
    nombre: "Israel Diaz",
    direccion: "Carrera21",
    hijos: ["Israel", "Yiliber", "Leinys"]
};
console.log(persona2);
console.log(persona3);
console.log("Objetos personalizados");
var person4 = {
    nombre1: " Diaz Israel",
    // direccion1: "Car99",
    hijos1: ["diaz", "gomez", "Leinyxs"]
};
var person5 = {
    nombre1: "Israeldc Diaz",
    direccion1: "Carrercda21",
    hijos1: ["Isrdael", "Yilibder", "Leindys"]
};
console.log(person4);
console.log(person5);
console.log("INTERFACE");
var person6 = {
    nombre1: "Gomez perez",
    direccion1: "calle 25",
    hijos1: ["pollo", "fermi", "ñaparin"],
    mostrarPerson: function () {
        return ("Nombre y Direccion: " + this.nombre1 + " - " + this.direccion1 + " ");
    }
};
console.log(person6.mostrarPerson());
