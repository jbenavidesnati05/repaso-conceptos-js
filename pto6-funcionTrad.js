let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
miarray.forEach(function(item,index,arr){
});

miarrayOrdenado = miarray.sort((a,b)=>{
    return -a+b
})

edadmasAlta = miarrayOrdenado[0]
console.log("edad mas alta " + edadmasAlta);

cont = 0; 
for (let i = 0; i < miarrayOrdenado.length; i++) {
    if(miarrayOrdenado[i] === edadmasAlta){
        cont = cont +1
    }    
}

console.log(miarrayOrdenado);
console.log(cont);