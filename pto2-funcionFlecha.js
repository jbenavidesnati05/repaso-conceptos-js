let separarNombre = palabraClave=> palabraClave.split(":")
let separarClave = separarNombre("ARQ2555: Sara Bel-Sun")
let nombre = separarClave[1]
console.log(nombre);