let calculo  = function(){
    let d = 0.0;
    let t = 0.0;
    let v = 0.0;
    let m = 0.61;

d = parseFloat(document.getElementById("Ingrese la distancia (Km): ").value);
t = parseFloat(document.getElementById("Ingrese el tiempo (Horas): ").value);

v = d/t;
millas = v*m;

document.getElementById("velocidad").innerHTML = "Velocidad en km/h: "+v +" y " +millas+ " en millas terrestres";
}