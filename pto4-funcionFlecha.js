let energias = [2.4,-8.5,-6]
let cont = 0;

let calcularEnergia = () =>{
    for (const energia of energias) {
        if(energia<0){
            cont = cont+1
        }
    }
    return cont
}
let cantidadNegativas = calcularEnergia()
console.log(cantidadNegativas);
