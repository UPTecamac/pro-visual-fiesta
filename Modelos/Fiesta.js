class Fiesta{
    personasFiesta = []
    personasFuera = []
    boletos = 0
    cantidadRecolectada = 0;
    precioEntrada = 100
    resolucionX = 0
    resolucionY = 0
    coordenadasPersonas = []

    // -- Variables deconfiguracion y control
    shotBienvenidaHombre = 2
    shotBienvenidaMujer = 1
    shotBienvenidaMenor23 = 2
    shotBienvenidaMenor28 = 3
    shotBienvenidaMayor28 = 1

    constructor()
    {
        this.obtenerResolucion()
    }

    registrarPersona (nombre, apellido, edad, sexo)
    {
        if(edad >= 18){            
            // -- Verificar si es hombre o mujer para cobrar la cuota de entrada
            this.verificarCuotaEntrada(sexo)
            let persona = new Persona(nombre, apellido, edad, sexo, this.personasFiesta.length + 1, this.resolucionX, this.resolucionY)
            this.iniciarBienvenida(persona)            
            this.personasFiesta.push(persona)
            this.boletos++            
        }
        else
        {
            console.log('No se puede registrar a la persona, es menor de edad')
            alert('No se puede registrar a la persona, es menor de edad')
        }            
    }

    // -- Sacar a una persona de la fiesta
    sacarPersona(posicion)
    {
        if(posicion < this.personasFiesta.length)
        {
            this.personasFuera.push(this.personasFiesta[posicion])
            this.personasFiesta.splice(posicion, 1)
        }
    }

    mostrarPersonasFiesta(){
        console.log(this.personasFiesta)
    }

    obtenerPersona(posicion)
    {
        if(posicion < this.personasFiesta.length)
        {
            return this.personasFiesta[posicion]
        }
    }

    verificarCuotaEntrada(sexo){
        if(sexo)
        {
            this.cantidadRecolectada += this.precioEntrada
        }
    }

    iniciarBienvenida(persona){
        // -- shot de bienvenida por sexo
        //console.log("%c¡Bienvenido! "+persona.nombre,"background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
        if(persona.sexo == true)
        {            
            persona.tomarAlcohol(this.shotBienvenidaHombre)
        }
        else
        {
            persona.tomarAlcohol(this.shotBienvenidaMujer)
        }
        // -- shot de bienvenida por edad
        //persona.tomarAlcohol(this.verificarShotBienvenidaEdad(persona.edad))
    }

    // -- Metodo para verificar los shot de bienvenida por edad
    verificarShotBienvenidaEdad(edad)
    {
        if(edad <= 23)
        {
            return this.shotBienvenidaMenor23
        }
        else if(edad >= 24 && edad <= 28)
        {
            return this.shotBienvenidaMenor28
        }
        else
        {
            return this.shotBienvenidaMayor28
        }
    }

    // -- Método para saber los boletos vendidos
    boletosVendidos()
    {
        return this.boletos
    }

    // -- Método para saber la cantidad recolectada
    cantidadRecolectada()
    {
        return this.cantidadRecolectada
    }

    // -- Método para saber la cantidad de hombres en la fiesta
    cantidadPorSexo(sexo)
    {
        let personas = 0
        for(let i = 0; i < this.personasFiesta.length; i++)
        {
            if(this.personasFiesta[i].sexo == sexo)
            {
                personas++
            }
        }
        return personas
    }

    // -- Método para obtener las personas por sexo
    obtenerPersonasPorSexo(sexo)
    {
        let personas = []
        for(let i = 0; i < this.personasFiesta.length; i++)
        {
            if(this.personasFiesta[i].sexo == sexo)
            {
                personas.push(this.personasFiesta[i])
            }
        }
        return personas
    }

    // -- Método para obtener resolucion de pantalla
    obtenerResolucion()
    {
        this.resolucionX = window.innerWidth
        this.resolucionY = window.innerHeight        
    }

    // -- Método par|a obtener x, y sin salirse de la resolucion
    


}
