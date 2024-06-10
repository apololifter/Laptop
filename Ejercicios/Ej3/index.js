class Mascota{
    constructor(id,nombre,tipo,edad,raza,dueño){
        this._id = id;
        this._nombre = nombre;
        this._tipo = tipo;
        this._edad = edad;
        this._raza = raza;
        this._dueño = dueño;
    }

    get getId(){
        return this._id;
    }
    get getNombre(){
        return this._nombre;
    }
    get getTipo(){
        return this._tipo;
    }
    get getEdad(){
        return this._edad;
    }
    get getRaza(){
        return this._raza;
    }
    get getDueño(){
        return this._dueño;
    }
}

class Veterinario{
    constructor(id,nombre,apellido,especialidad){
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._especialidad = especialidad;
    }
    get getId(){
        return this._id;
    }
    get getApellido(){
        return this._apellido;
    }
    get getNombre(){
        return this._nombre;
    }
    get getEspecialidad(){
        return this._especialidad;
    }
}

class consulta{
    constructor(id,mascota,veterinario,fecha,diagnostico,tratamiento,costo){
        this._id = id;
        this._mascota = mascota;
        this._veterinario = veterinario;
        this._fecha = fecha;
        this._diagnostico = diagnostico;
        this._tratamiento = tratamiento;
        this._costo = costo;
    }
    get getId(){
        return this._id;
    }
    get getMascota(){
        return this._mascota;
    }
    get getVeterinario(){
        return this._veterinario;
    }
    get getFecha(){
        return this._fecha;
    }
    get getDiagnostico(){
        return this._diagnostico;
    }
    get getTratamiento(){
        return this._tratamiento;
    }
    get getCosto(){
        return this._costo;
    }
}


let mascotas = [];
let veterinarios = [];

mascotas.push(new Mascota(1,"Max","Perro","3","Golden Retriever","Juan Pérez"));
mascotas.push(new Mascota(2,"Luna","Gata","1","Siamés","María Gómez"));
mascotas.push(new Mascota(3,"Toby","Hamster","2","Sirio Dorado","Pedro García"));
mascotas.push(new Mascota(4,"Lola","Lora","1","Jacinto","Ana López"));
mascotas.push(new Mascota(5,"Bella","Tortuga","10","Mar", "Carlos Herrera"));
mascotas.push(new Mascota(6,"Nemo","Pez Payaso","1","Mar", "Andrea Morales"));
  
veterinarios.push(new Veterinario(1,"Laura", "Gómez", "Cirugía"));
veterinarios.push(new Veterinario(2,"Carol", "Martínez", "General"));
veterinarios.push(new Veterinario(3,"Ana", "Rodríguez", "General"));
veterinarios.push(new Veterinario(4,"Ana", "Calcumil", "Odontología"));


function validarMascota(){
    let selecccionarMascota = document.getElementById("i-mascota").value;

    let mascotaEncontrada = mascotas.find(m => m.getNombre === selecccionarMascota);
    if (mascotaEncontrada != undefined){
        alert("Mascota con nombre "+mascotaEncontrada.getNombre+" y dueño "+mascotaEncontrada.getDueño);
    }else{
        alert("Mascota no encontrada");
    }
    document.getElementById("info-veterinaio").innerHTML = veterinarioEncontrado.getNombre;
}

function validarVeterinario(){
    let selecccionarVeterinario = document.getElementById("i-veterinario").value;

    let veterinarioEncontrado = veterinarios.find(v => v.getNombre === selecccionarVeterinario);
    if (veterinarioEncontrado != undefined){
        alert("Doctor "+veterinarioEncontrado.getNombre+" " +veterinarioEncontrado.getApellido +" con especialidad "+veterinarioEncontrado.getEspecialidad);
    }else{
        alert("Doctor no existente");
    }
    document.getElementById("info-veterinaio").innerHTML = veterinarioEncontrado.getNombre;
}


function descuentoUnAño(){
    let descuento = veterinarios.find(m => m.edad === selecccionarVeterinario);
    if (){}
}

function descuentoDiezAñoz(){}