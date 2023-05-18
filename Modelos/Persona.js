class Persona
{
    nombre = ''
    apellido = ''
    edad = 0
    sexo = true
    limiteAlcohol = 0;
    estadoAnimo = 'Tranquilo'
    actividad = ''
    id = 0
    imagen = ''
    resolucionX = 0
    resolucionY = 0

    Actividades = {
        Bailar : 'Bailar',
        Cantar : 'Cantar',
        Tomar : 'Tomar',
        Comer : 'Comer',
        Jugar : 'Jugar',
    }

    constructor(name, surname, age, sex, id, resolucionX, resolucionY) {
        this.nombre = name
        this.apellido = surname
        this.edad = age
        this.sexo = sex
        this.id = id
        this.resolucionX = resolucionX
        this.resolucionY = resolucionY
        this.crearGifPersona()
    }

    verificarAlcohol() {
        if (this.limiteAlcohol <= 2)
            this.estadoAnimo = 'Tranquilo'
        else if (this.limiteAlcohol >= 3 && this.limiteAlcohol <= 3)
            this.estadoAnimo = 'Feliz'
        else
            this.estadoAnimo = 'Borracho'

        this.verificarImagenPersona()
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

    crearGifPersona(x, y)
    {
        let persona = this
        let posicion = this.posicionAleatoria()
        x = posicion[0]
        y = posicion[1]

        // -- crear div para imagen y label
        let div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.top = x + 'px'
        div.style.left = y + 'px'
        div.style.width = '150px'
        div.style.height = '150px'
        div.style.display = 'flex'
        div.style.flexDirection = 'column'
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'
        div.style.textAlign = 'center'
        div.style.color = 'White'
        div.style.fontSize = '18px'
        div.style.fontFamily = 'Comic Sans MS'
        div.style.zIndex = '1'
        div.id = 'div_' + this.id
        div.className = 'personas'
        div.onclick = function () {
            persona.informacionPersona()
            persona.acciones()
        }                        
        document.body.appendChild(div)
        // -- crear label para insertar en div
        let label = document.createElement('label')
        label.id = 'label_' + this.id
        label.innerHTML = this.nombre + ' ' + this.apellido
        div.appendChild(label)

        let labelEstado = document.createElement('label')
        labelEstado.id = 'label_estado' + this.id
        labelEstado.innerHTML = this.estadoAnimo
        labelEstado.style.fontSize = '12px'        
        div.appendChild(labelEstado)

        // -- insertar imagen en Label
        let img = document.createElement('img') 
        if(this.sexo){
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
        img.id = 'person_' + this.id
        this.imagen = img.id       
        div.appendChild(img)        
    }

        // -- Método para verificar imagen de persona por estado de animo
    verificarImagenPersona()
    {        
        let img = document.getElementById(this.imagen)       
        let label = document.getElementById('label_estado' + this.id)  
        label.innerHTML = this.estadoAnimo        
        if(this.estadoAnimo == 'Tranquilo')
        {            
            if(this.sexo)
            {
                img.src = './img/person/man_1.gif'
            }
            else
            {
                img.src = './img/person/woman_1.gif'
            }
        }
        else if(this.estadoAnimo == 'Feliz')
        {
            img.src = './img/person/feliz.gif'
        }
        else
        {
            img.src = './img/person/borracho.gif'
        }
    }

    posicionAleatoria()
    {
        let posicion = []
        posicion[0] = Math.floor(Math.random() * (this.resolucionY - 150))
        posicion[1] = Math.floor(Math.random() * (this.resolucionX - 150))
        return posicion        
    }

    // -- Método para obtener resolucion de pantalla
    obtenerResolucion()
    {
        this.resolucionX = window.innerWidth
        this.resolucionY = window.innerHeight        
    }

    informacionPersona(){
        console.log(this)
    }

    // -- Metodo para saber que quiere hacer la persona
    acciones()
    {
        // -- tomar
        this.tomarAlcohol(1)
    }
}
