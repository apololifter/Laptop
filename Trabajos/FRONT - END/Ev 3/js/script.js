class Usuario {
    constructor(id, nombre, apellido, correoElectronico, contraseña, fechaRegistro, fotoPerfil) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._correoElectronico = correoElectronico;
        this._contraseña = contraseña;
        this._fechaRegistro = fechaRegistro;
        this._fotoPerfil = fotoPerfil;
    }
    getContraseña() {
        return this._contraseña;
    }
    getCorreo() {
        return this._correoElectronico;
    }
    getNombre() {
        return this._nombre;
    }
    getApellido() {
        return this._apellido;
    }
}

let userIdCounter = 0;
let usuariosLogin = [];

function registrarUsuario() {
    let recibirNombre = document.getElementById("exampleInputName").value;
    let recibirApellido = document.getElementById("exampleInputLastName").value;
    let recibirEmail = document.getElementById("exampleInputEmail2").value;
    let recibirContraseña = document.getElementById("exampleInputPassword2").value;
    
    if (usuariosLogin.some(usuario => usuario.getCorreo() === recibirEmail)) {
        alert("Este usuario ya ha sido registrado");
        return;
    }
    userIdCounter++;
    let fechaRegistro = new Date().toLocaleString();
    let usuario = new Usuario(userIdCounter, recibirNombre, recibirApellido, recibirEmail, recibirContraseña, fechaRegistro, null);

    usuariosLogin.push(usuario);
    alert("Usuario registrado con éxito");
}

function validarUsuario() {
    let recibirEmail = document.getElementById("exampleInputEmail1").value; 
    let recibirContraseña = document.getElementById("exampleInputPassword1").value;

    let usuario = usuariosLogin.find(e => e.getCorreo() === recibirEmail);

    if (usuario != undefined && usuario.getContraseña() === recibirContraseña) {
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
        console.log("Usuario logueado:", usuario); // Agregamos esta línea para verificar si el usuario se guarda correctamente
        window.location.href = "./site/carga.html";
    } else {
        alert("Correo o contraseña mal ingresada");
    }
}

function inyectarNombreUsuario() {
    let usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
    if (usuarioLogueado) {
        document.getElementById("inyectar-nombre").innerText = `${usuarioLogueado._nombre} ${usuarioLogueado._apellido}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    inyectarNombreUsuario();
});


class Archivo {
    constructor(id, nombre, tipo, tamaño, contenido, fechaCreacion, fechaModificacion, propietario, carpetaPadre, permisos) {
        this._id = id;
        this._nombre = nombre;
        this._tipo = tipo;
        this._tamaño = tamaño;
        this._contenido = contenido;
        this._fechaCreacion = fechaCreacion;
        this._fechaModificacion = fechaModificacion;
        this._propietario = propietario;
        this._carpetaPadre = carpetaPadre;
        this._permisos = permisos;
    }
}

class Carpeta {
    constructor(id, nombre, fechaCreacion, fechaModificacion, propietario, carpetaPadre, permisos) {
        this._id = id;
        this._nombre = nombre;
        this._fechaCreacion = fechaCreacion;
        this._fechaModificacion = fechaModificacion;
        this._propietario = propietario;
        this._carpetaPadre = carpetaPadre;
        this._permisos = permisos;
        this._archivos = [];
        this._subcarpetas = [];
    }
    getNombre() {
        return this._nombre;
    }
}

let folderIdCounter = 0;
let fileIdCounter = 0;
let listacarpetas = [];
let listaarchivos = [];

function agregarCarpeta() {
    let recibirNombre = document.getElementById("nombre-carpeta").value;

    if (!recibirNombre) {
        alert("Por favor ingresa un nombre para la carpeta");
        return;
    }

    folderIdCounter++;
    let fechaActual = new Date().toLocaleString();
    let carpetaNueva = new Carpeta(folderIdCounter, recibirNombre, fechaActual, fechaActual, null, null, null);
    listacarpetas.push(carpetaNueva);

    let carpetasContenedor = document.getElementById("carpetas-contenedor");
    carpetasContenedor.innerHTML += `<div class="col"></div>
                                        <div class="card-body" style="margin-top:20px;">
                                            <a href="">
                                                <button class="btn btn-light"><i class="bi bi-folder2-open" style="font-size: 60px;"></i><br>${recibirNombre}</button>
                                            </a>
                                        </div>`;
}

function agregarArchivo() {
    let recibirNombre = document.getElementById("nombre-archivo").value;

    if (!recibirNombre) {
        alert("Por favor ingresa un nombre para el archivo");
        return;
    }

    fileIdCounter++;
    let fechaActual = new Date().toLocaleString();
    let archivoNuevo = new Archivo(fileIdCounter, recibirNombre, null, null, null, fechaActual, fechaActual, null, null, null);
    listaarchivos.push(archivoNuevo);

    let carpetasContenedor = document.getElementById("carpetas-contenedor");
    carpetasContenedor.innerHTML += `<div class="col"></div>
                                        <div class="card-body" style="margin-top:20px;">
                                            <a href="">
                                                <button class="btn btn-light"><i class="bi bi-file-earmark" style="font-size: 60px;"></i><br>${recibirNombre}</button>
                                            </a>
                                        </div>`;
}

