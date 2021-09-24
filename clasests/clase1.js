"use strict";
//FUNCIONES BASICAS CON PARAMETROS
console.log("FUNCIONES CON PARAMETROS");
console.log("");
var mostrarDatos = function (codigo, nombre, apellido, edad) {
    console.log("El codigo es " + codigo);
    console.log("El nombre es " + nombre);
    console.log("El apellido es " + apellido);
    console.log("la edad es " + edad);
};
mostrarDatos(181710029, 'leinys', 'Giovannetty', 22);
console.log(mostrarDatos);
console.log("-------------------------------------------");
//FUNCIONES ANONIMAS
console.log("FUNCIONES ANONIMAS");
console.log("");
var Carrera = function () {
    console.log("Ingnieria de sistemas");
};
console.log(Carrera);
Carrera();
console.log("-------------------------------------------");
var suma = function (x, y) {
    return (x + y);
};
var su = suma(5, 5);
console.log(su);
console.log("-------------------------------------------");
//FUNCION LAMDA
console.log("FUNCION LAMDA");
console.log("");
var multiplica = function (x, y) {
    if (y === void 0) { y = 5; }
    return x * y;
};
var mul = multiplica(5);
console.log(mul);
console.log("---------------------------------------------");
var resta = function (x, y) {
    if (y === void 0) { y = 3; }
    var r = 0;
    if (y === undefined) {
        r = x;
    }
    else {
        r = x - y;
    }
    return r;
};
var res = resta(7, 4);
console.log(res);
console.log("-------------------------------------------");
//------
function edad() {
    return 22;
}
var informacion = function (nombre, ed) {
    if (ed === void 0) { ed = edad(); }
    console.info(" " + nombre + " tiene " + ed + " a\u00F1os");
    if (ed = 22) {
        console.warn("mayoria de edad");
    }
};
informacion("Leinys");
console.log("-------------------------------------------");
//funciones que contiene parametros otras funciones ... FUNCIONNES CALL BACK 
console.log("FUNIONES CALL BACK");
console.log("");
var potencia = function (x) {
    return x * 4;
};
var triplicador = function (x) {
    return x * 3;
};
function dividir(f, y) {
    return f(y) / 2;
}
;
console.log(dividir(potencia, 10));
console.log(dividir(triplicador, 20));
console.log("-------------------------------------------");
