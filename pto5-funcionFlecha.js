let licVendidas = 0 
let salarioBruto =3500000 
let comisiones = 1500000 

let calcularSalario = licVendidas => (salarioBruto+comisiones*licVendidas)*0.95
let salarioPagar = calcularSalario(1)
console.log(`El vendedor gano este mes = $${salarioPagar}`);
