
function calcularDistancia(x2,x1,y2,y1){
return Math.sqrt( Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
}

let distanciaMedida=calcularDistancia(2,1,2,1)
console.log(distanciaMedida);