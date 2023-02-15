function separarNombre(palabraClave){
    let separarClave = palabraClave.split(":")
    return separarClave
}
let arregloSplit = separarNombre("ARQ2555: Sara Bel-Sun")
let nombre = arregloSplit[1]
console.log(nombre);