class Persona
{
    nombre = ''
    apellido = ''
    edad = 0
    sexo = true
    limiteAlcohol = 0;
    estadoAnimo = 'Tranquilo'
    actividad = ''

    Actividades = {
        Bailar : 'Bailar',
        Cantar : 'Cantar',
        Tomar : 'Tomar',
        Comer : 'Comer',
        Jugar : 'Jugar',
    }

    constructor(name, surname, age, sex) {
        this.nombre = name
        this.apellido = surname
        this.edad = age
        this.sexo = sex
    }

    verificarAlcohol() {
        if (this.limiteAlcohol <= 2)
            this.estadoAnimo = 'Tranquilo'
        else if (this.limiteAlcohol >= 3 && this.limiteAlcohol <= 3)
            this.estadoAnimo = 'Feliz'
        else
            this.estadoAnimo = 'Borracho'
    }

    tomarAlcohol(nShots)
    {
        this.limiteAlcohol += nShots
        this.verificarAlcohol();
    }

    realizarActividad(actividad)
    {
        switch (actividad) {
            case this.Actividades.Bailar:
                this.actividad = this.Actividades.Bailar
                break;
            case this.Actividades.Cantar:
                this.actividad = this.Actividades.Cantar
                break;
            case this.Actividades.Tomar:
                this.actividad = this.Actividades.Tomar
                break;
            case this.Actividades.Comer:
                this.actividad = this.Actividades.Comer
                break;
            case this.Actividades.Jugar:
                this.actividad = this.Actividades.Jugar
                break;
            default:
                this.actividad = ''
                break;
        }
    }

}
