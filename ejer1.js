/* 1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetas de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planeta NABOO.  */
function calculaDistancia(x1,y1,x2,y2) {
    return (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)))
}

//Llamar a la función 
console.log(calculaDistancia(1,3,12,0))