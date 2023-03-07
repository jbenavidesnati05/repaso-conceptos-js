infoPlanetas = [
    {nombrePlaneta:"mercurio",  lat:99, long:11,  oxigeno:120,  agua:1125},
    {nombrePlaneta:"venus",     lat:78, long:17,  oxigeno:758,  agua:1563},
    {nombrePlaneta:"tierra",    lat:34, long:20,  oxigeno:145,  agua:6354},
    {nombrePlaneta:"marte",     lat:22, long:14,  oxigeno:786,  agua:4589},
    {nombrePlaneta:"jupiter",   lat:89, long:16,  oxigeno:-48,  agua:3179},
    {nombrePlaneta:"saturno",   lat:21, long:40,  oxigeno:563,  agua:1597},
    {nombrePlaneta:"urano",     lat:11, long:66,  oxigeno:452,  agua:0},
    {nombrePlaneta:"neptuno",   lat:87, long:78,  oxigeno:856,  agua:5379},
    {nombrePlaneta:"pluton",    lat:45, long:19,  oxigeno:741,  agua:9157},
]

let suma = 0 
let calcularAgua = () => infoPlanetas.forEach(element => suma += element.agua)
let cantidadAgua = calcularAgua()
console.log(suma);

let sumaPor100 = 0 
let calcularAgua100 = () =>infoPlanetas.forEach(element => sumaPor100 += element.agua*100);
let cantidadAgua100 = calcularAgua100()
console.log(sumaPor100);

let encontrarNegativo = () =>encontrado = infoPlanetas.find(item => item.oxigeno < 0)
let negativo =  encontrarNegativo()
console.log(negativo);

let encontrarCeroH2O = () => ceroH2O = infoPlanetas.find(item => item.agua == 0)
let cero = encontrarCeroH2O()
console.log(cero);