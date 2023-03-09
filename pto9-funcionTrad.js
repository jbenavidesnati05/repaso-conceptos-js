function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante){
    setTimeout(function(){
        let estudiante={nombre:nombre, edad:edad, planeta:planeta, estatura:estatura}
        clasificarEstudiante(estudiante.edad)
    },1000)
    }

    crearEstudiante("pedro","marte",18,1.86,function(edad){
        if(edad>15){
            console.log(` El padawan tiene ${edad} años; Su clase sera => Manejo de la fuerza`);
        }else{
            console.log(` El padawan tiene ${edad} años; Su clase sera => Manejo del sable`);
        }
    })