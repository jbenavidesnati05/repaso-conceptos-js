let miarrayA = Array.from({length:25}, () => Math.floor(Math.random() * 100));
miarrayA.forEach(function(item,index,arr){
});
let miarrayB = Array.from({length:25}, () => Math.floor(Math.random() * -100));
miarrayB.forEach(function(item,index,arr){
});

let miarray = miarrayA.concat(miarrayB)
console.log(miarray);
let miarray2 = []
element = 0 

function EncontrarMasCercanoCero(){
    for (let i = 0; i < miarray.length; i++) {
        if(miarray[i] < 0){
            const element = miarray[i]*-1
            miarray2.push(element)
        }else{
            const element = miarray[i]
            miarray2.push(element)
        }
    }
    
    miarray2Ordenado = miarray2.sort((a,b)=>{
        return a-b
    })
    console.log(miarray2);
    console.log(miarray2Ordenado);
    console.log(`El mas cercano a cero es: ${miarray2Ordenado[0]}`);
}
EncontrarMasCercanoCero()