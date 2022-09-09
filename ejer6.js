/* 6.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años */
function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz){

    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura:estatura
    }
    clasificarAprendiz(datosAprendiz)
}

crearAprendiz('Clara','Tierra', 18, 1.72, function(aprendiz){
    if(aprendiz>=15){
        console.log("Usted se va para la clase de sable de luz")
    }
    else {
        console.log("Usted se va para la clase de la fuerza")
    }
})