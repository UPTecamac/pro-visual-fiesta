class Fiesta{
    personasFiesta = []
    personasFuera = []
    boletos = 0
    cantidadRecolectada = 0;
    precioEntrada = 100

    // -- Variables deconfiguracion y control
    shotBienvenidaHombre = 2
    shotBienvenidaMujer = 1
    shotBienvenidaMenor23 = 2
    shotBienvenidaMenor28 = 3
    shotBienvenidaMayor28 = 1

    registrarPersona (nombre, apellido, edad, sexo)
    {
        if(edad >= 18){            
            // -- Verificar si es hombre o mujer para cobrar la cuota de entrada
            this.verificarCuotaEntrada(sexo)
            let persona = new Persona(nombre, apellido, edad, sexo)
            this.iniciarBienvenida(persona)
            this.personasFiesta.push(persona)
            this.boletos++
            this.crearGifPersona(sexo)
        }
        else
        {
            console.log('No se puede registrar a la persona, es menor de edad')
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
        console.log("%c¡Bienvenido! "+persona.nombre,"background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
        if(persona.sexo == true)
        {            
            persona.tomarAlcohol(this.shotBienvenidaHombre)
        }
        else
        {
            persona.tomarAlcohol(this.shotBienvenidaMujer)
        }
        // -- shot de bienvenida por edad
        persona.tomarAlcohol(this.verificarShotBienvenidaEdad(persona.edad))
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

    crearGifPersona(sexo)
    {
        // -- insertar imagen en body
        let img = document.createElement('img') 
        if(sexo){
            img.src = './img/person/man_1.gif'
            img.style.width = '150px'
            img.style.height = '150px'
        }            
        else
        {
            img.src = './img/person/woman_1.gif'
            img.style.width = '100px'
            img.style.height = '100px'
        }                    
        img.style.position = 'absolute'
        let posicion = this.posicionAleatoria()
        img.style.top = posicion[0] + 'px'
        img.style.left = posicion[1] + 'px'
                
        document.body.appendChild(img)
    }


    // -- Método para obtener x, y aleatorios a la resolución de la pantalla
    posicionAleatoria()
    {
        let x = Math.floor(Math.random() * (window.innerWidth - 100))
        let y = Math.floor(Math.random() * (window.innerHeight - 100))
        return [x, y]
    }

}
