/* 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave.  */ 

let naves = []
let registrarNave = nave =>{
    let clave = nave.split(":")[0]
    let nombre = nave.split(":")[1]
    let objNave = {
        "nombre" : nombre,
        "clave" : clave
    }
    naves.push(objNave)
}
let obtenerNave = codigo =>{
    let nombre = ""
    naves.forEach(function(nave){
        if (codigo == nave.clave) {
            nombre = "El director de la nave es : "+nave.nombre
        }
    })
    if (nombre == "") {
        nombre = "No hay resultados encontrados"
    }
    return nombre
}
//Llamando a la función 
//let resultado=obtenerNombre("1025640454: Mateo Franco ")
//console.log("El piloto se llama "+resultado)

let registro1 = registrarNave("000: Mateo Franco ")
let registro2 = registrarNave("123: pepito ")
let registro3 = registrarNave("456: lucas ")
let registro4 = registrarNave("789: grupo ")

let buscar = obtenerNave("000")
console.log(buscar);






/* let obtenerNombre=codigo => codigo.split(":")[1]+codigo.split(":")[0]


let resultado=obtenerNombre("1025640454: Clara Restrepo ") */
