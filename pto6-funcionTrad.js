let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
miarray.forEach(function(item,index,arr){
});

function encontrarMayor(){
    miarrayOrdenado = miarray.sort((a,b)=> -a+b)
    edadMasAlta = miarrayOrdenado[0]
    cont = 0; 
    for (let i = 0; i < miarrayOrdenado.length; i++) {
        if(miarrayOrdenado[i] === edadMasAlta){
            cont = cont +1
        }    
    }
    console.log(miarrayOrdenado);
    console.log(miarrayOrdenado[0]);
    console.log(cont);
}
encontrarMayor()