/*
3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día 
*/

let temperaturas_dias = [
    {minima: 5, maxima: 14, dia:1},
    {minima: 2, maxima: 15, dia:2},
    {minima: 1, maxima: 13, dia:3},
    {minima: 7, maxima: 19, dia:4},
    {minima: 5, maxima: 20, dia:5},
    {minima: 4, maxima: 11, dia:6},
    {minima: 2, maxima: 10, dia:7},
]
temperaturas_dias.forEach(temperatura=>{console.log(`el promedio del dia ${temperatura.dia}, es: ${(temperatura.minima+temperatura.maxima)/2}`);})

