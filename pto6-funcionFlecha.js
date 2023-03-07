let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
miarray.forEach(function(item,index,arr){
});

let encontrarMayor = () => {
    miarrayOrdenado = miarray.sort((a,b)=> -a+b)
    edadMasAlta = miarrayOrdenado[0]
    cont = 0; 

    miarrayOrdenado.forEach(element => {
        if(element == edadMasAlta) 
        cont = cont + 1 
    });

    console.log(miarrayOrdenado);
    console.log(miarrayOrdenado[0]);
    console.log(cont);
}

encontrarMayor()