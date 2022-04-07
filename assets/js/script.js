class Propietario{
    #nombrePropietario;
    constructor(nombrePropietario, direccion, telefono){
        this.#nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    get nombre(){
        return this.#nombrePropietario;
    }
    set nombre(nombreNuevoPropietario){
        return 
        this.#nombrePropietario = nombreNuevoPropietario;
    }
    datosPropietario(){
        return{
            nombre: this.#nombrePropietario,
            direccion: this.direccion,
            telefono: this.telefono,
       
     
         };
    }
}

class Animal extends Propietario{
    constructor(tipoAnimal, nombrePropietario, direccion,telefono){
        super(nombrePropietario, direccion, telefono);
        this.tipoAnimal= tipoAnimal;
    }
    
}

class Mascota extends Animal{
    constructor(nombreMascota, enfermedad,tipoAnimal, nombrePropietario, direccion,telefono){
        super(tipoAnimal, nombrePropietario, direccion,telefono);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }

}



    botonAgregar.addEventListener("click", function(event){
        event.preventDefault()

        const propietario    = document.getElementById('propietario').value;
        const telefono       = document.getElementById('telefono').value;
        const direccion      = document.getElementById('direccion').value;
        const nombreMascota  = document.getElementById('nombreMascota').value;
        const tipo           = document.getElementById('tipo').value;
        const enfermedad     = document.getElementById('enfermedad').value;
        const botonAgregar   = document.getElementById('botonAgregar');
        const resultado      = document.getElementById('resultado');
        
        

        const mascotaAgregada = new Mascota(nombreMascota,enfermedad,tipo,propietario,direccion,telefono);
        console.log(mascotaAgregada.tipoAnimal);
        const datosFinales  = mascotaAgregada.datosPropietario();
        
        resultado.innerHTML = (`

        <ul>
             <li> El nombre del propietario es: ${datosFinales.nombre}. El domicilio es: ${datosFinales.direccion}, y el numero telefono de contacto: ${datosFinales.telefono}</li>
             <li> El tipo de animal es: ${mascotaAgregada.tipoAnimal}, y el nombre de la mascota es: ${mascotaAgregada.nombre}, y el motivo de la consulta es: ${mascotaAgregada.enfermedad}</li>
         <ul/>

        `);
    
        });

       
        

        



    
  



 
 

