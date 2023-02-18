let licVendidas = 0 
let salarioBruto =3500000 
let comisiones = 1500000 

function calcularSalario(licVendidas){
    salario = (salarioBruto+comisiones*licVendidas)*0.95
    return salario
}
let salarioPagar=  calcularSalario(1)
console.log(`El vendedor gano este mes = $${salarioPagar}`);
