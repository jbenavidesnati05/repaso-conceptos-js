let crearEstudiante = (nombre,planeta,edad,estatura,clasificarEstudiante) =>{
    setTimeout(() => {
        let estudiante = { nombre:nombre, edad:edad, planeta:planeta, estatura:estatura}
        clasificarEstudiante(estudiante.edad)
    }, 1000);
}

crearEstudiante("pedro", "marte", 18, 1.86, (edad)=>{
    edad>15? console.log("fuerza"): console.log("sable");
})