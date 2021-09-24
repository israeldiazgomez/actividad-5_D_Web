
//FUNCIONES BASICAS CON PARAMETROS
console.log("FUNCIONES CON PARAMETROS")
console.log("")
 
let mostrarDatos = function(codigo:number, nombre:string, apellido:string, edad:number ){
    console.log(`El codigo es ${codigo}`)
    console.log(`El nombre es ${nombre}`)
    console.log(`El apellido es ${apellido}`)
    console.log(`la edad es ${edad}`)
   
}


mostrarDatos( 181710029 ,'leinys', 'Giovannetty', 22);
 console.log(mostrarDatos)
console.log("-------------------------------------------")


//FUNCIONES ANONIMAS
console.log("FUNCIONES ANONIMAS")
console.log("")


let Carrera = function(){
    console.log("Ingnieria de sistemas")

}
console.log(Carrera);
Carrera()
console.log("-------------------------------------------")

let suma =function(x: number, y:number):number {
    return (x+y);
}
let su:number = suma(5,5);
console.log(su);
console.log("-------------------------------------------")

//FUNCION LAMDA
console.log("FUNCION LAMDA")
console.log("")

let multiplica = (x: number, y:number=5):number =>{
    return x*y 

}
let mul:number = multiplica(5);
console.log(mul);
    
console.log("---------------------------------------------")

let resta = (x: number, y:number=3):number =>{
    let r:number = 0;
    
    if(y === undefined){
        r= x 
    } else {
        r= x-y

    }
    return r

}
  let res:number = resta(7,4);
  console.log(res);

  console.log("-------------------------------------------")

 //------
 function edad(){
     return 22;
 }
 let informacion =function(nombre: string, ed: number = edad()){
console.info(` ${nombre} tiene ${ed} años`)
 if (ed= 22) {
    console.warn("mayoria de edad")     
 }
 }
 informacion(`Leinys`)

 console.log("-------------------------------------------")


 //funciones que contiene parametros otras funciones ... FUNCIONNES CALL BACK 
 console.log("FUNIONES CALL BACK")
 console.log("")

 let potencia = function(x:number):number{
     return x*4
 }

 let triplicador = function(x:number):number{
    return x*3
}

function dividir (f:(x:number) => number, y:number) {
    return f(y) / 2

};
console.log(dividir(potencia,10))
console.log(dividir(triplicador,20))

console.log("-------------------------------------------")


