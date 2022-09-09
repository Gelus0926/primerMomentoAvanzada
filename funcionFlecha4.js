/* 4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables
de luz y contabilizar la cantidad de energía de sables que tienen
negativa en Joules. */
let sables= [-2,4,8,9,-3,-1]

let cont=0

sables.forEach(sable=>{
    if (sable<0) {
        cont ++
        console.log("El sable de luz está defectuoso"+sable)
    }
   /*  else {
        console.log("El sable de luz está en buenas condiciones"+sable)
    } */
})
console.log("la cantidad de sables defectuosos con energía son: "+cont)