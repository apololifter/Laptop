let l1 = 0;
let l2 = 0;
let l3 = 0;

l1 = parseInt(prompt("Ingrese el lado 1 del triangulo: "));
l2 = parseInt(prompt("Ingrese el lado 2 del triangulo: "));
l3 = parseInt(prompt("Ingrese el lado 3 del triangulo: "));


if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l2 <= l1){
    alert("No es un triangulo");
}
    else if (l1 === l2 || l1 === l3 || l2 === l3){
        alert("Es un triangulo isósceles");
    }else if (l1 === l2 && l2 === l3){
        alert("Es un triangulo equilátero");
    }else if(l1 != l2 && l1 != l3 && l2 != l3)
    {alert("Es un triangulo escaleno");}
    else{
        alert("No es un triangulo");
    }
