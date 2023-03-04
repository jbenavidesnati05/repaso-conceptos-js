let miarrayA = Array.from({length:25}, () => Math.floor(Math.random() * 100));
miarrayA.forEach(function(item,index,arr){
});
let miarrayB = Array.from({length:25}, () => Math.floor(Math.random() * -100));
miarrayB.forEach(function(item,index,arr){
});

miarray = miarrayA.concat(miarrayB)

console.log(miarray);

miarray2 = []
element = 0 

 console.log(miarray);
for (let i = 0; i < miarray.length; i++) {
    if(miarray[i]<0){
        const element = miarray[i]*-1
        console.log("Es menor que cero    =>  "+element);
        miarray2.push(element)
    }else{
        const element = miarray[i]
        console.log("No es menor que cero =>  "+element);
        miarray2.push(element)
    }
}
console.log(miarray2);

miarray2Ordenado = miarray2.sort((a,b)=>{
    return a-b
})

console.log(miarray2Ordenado);