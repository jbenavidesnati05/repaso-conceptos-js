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

let encontrarMasCercanoCero = () =>{ 
    miarray.forEach(item=>{
        if(item < 0){
            const element = item*-1
            miarray2.push(element)

        }else{
            const element = item
            miarray2.push(element)
        }
    })
    miarray2Ordenado = miarray2.sort((a,b)=>{
        return a-b
    })
    console.log(miarray2);
    console.log(`El mas cercano a cero es: ${miarray2Ordenado[0]}`);
}

encontrarMasCercanoCero()