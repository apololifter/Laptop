//Definición de una clase (Prototipo)
class Persona{
    //Constructor y atributos
    constructor(rut, nombre, apellido, edad, estatura, peso){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad,
        this._estatura = estatura;
        this._peso = peso;
        this._imc = 0;
        this.estado = 0 ;
    }

    //Definición de métodos especificos.(GET)
    get getRut(){
        return this._rut;
    }
    get getNombre(){
        return this._nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    get getEdad(){
        return this._edad;
    }
    get getPeso(){
        return this._peso;
    }
    get getEstatura(){
        return this._estatura;
    }
    get getIMC(){
        return this._imc;
    }
    
    get getEstado(){
        return this._estado;
    }
    //Definición de métodos especificos.(SET)

    
    //Definición de métodos (OTROS)
    presentarse(){
        alert("Hola, soy "+this._nombre+" "+this._apellido);
    }
    calcIMC(){
        this._imc = (this._peso / Math.pow(this._estatura,2)).toFixed(2);
    }

    detEstado(){
        if(this._imc < 18.5){
            this._estado = "Bajo peso";
        }else if(this._imc >= 18.5 && this._imc < 25){
            this._estado = "Peso normal";
        }else{
            this._estado = "Sobrepeso";
        }
    }
}
//Fin definición de clase

//Crear listado de personas (Arreglo)
let personas = [];

//Función agregar
let agregar = function(){

    let r = document.getElementById("i-rut").value;
    let n = document.getElementById("i-name").value;
    let a = document.getElementById("i-apellido").value;
    let e = parseInt(document.getElementById("i-edad").value);
    let p = parseFloat(document.getElementById("i-peso").value);
    let es = parseFloat(document.getElementById("i-estatura").value); 

    let per = new Persona(r,n,a,e,es,p);
    per.calcIMC();
    per.detEstado();
    personas.push(per);
    //personas.push(new Persona(r,n,a,e));
    console.log(personas);//Verificar por consola.
    alert("Persona agregada correctamente.");
}

let buscar = function(){

    let buscarRut = document.getElementById("b-rut").value;
    let personaEncontrada = personas.find( persona => persona.getRut === buscarRut); 
    if(personaEncontrada != undefined){
        alert("Encontrado: "+personaEncontrada.getNombre+" "+personaEncontrada.getApellido);
        personaEncontrada.calcIMC();
        document.getElementById("info-rut").innerHTML = personaEncontrada.getRut;
        document.getElementById("info-nombre").innerHTML = personaEncontrada.getNombre+" "+personaEncontrada.getApellido;
        document.getElementById("info-edad").innerHTML = personaEncontrada.getEdad+" Años.";
        document.getElementById("info-peso").innerHTML = personaEncontrada.getPeso+" Kg.";
        document.getElementById("info-estatura").innerHTML = personaEncontrada.getEstatura+" Mt.";
        document.getElementById("info-imc").innerHTML = personaEncontrada.getIMC;
        document.getElementById("info-estado").innerHTML = personaEncontrada.getEstado;
    }else{
        alert("No Encontrado");
    }

    
}




