class Calculadora{
    constructor(primerNumero,segundoNumero){
    this._primerNumero = primerNumero;
    this._segundoNumero = segundoNumero;
}


get getPrimerNumero(){
    return this._primerNumero;
}

get getSegundoNumero(){
    return this._segundoNumero;
}

calcSum(){
    return this._primerNumero + this._segundoNumero;
}

calcResta(){
    return this._primerNumero - this._segundoNumero;
}

calcDiv(){
    if (this._segundoNumero === 0){
        alert("No se puede divir por 0");}
    else{
    return this._primerNumero / this._segundoNumero;}
}

calcMult(){
    return this._primerNumero * this._segundoNumero;
}
}

let numeros = [];

function mostrarCalculo(resultado,){
    document.getElementById("calculo").innerText = ;
}

function mostrarResultado(resultado){
    document.getElementById("resultado").innerText = resultado;
}

function sumar(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let calculadora = new Calculadora(num1,num2);
    let resultado = calculadora.calcSum();
    mostrarResultado(resultado);
}

function restar(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let calculadora = new Calculadora(num1,num2);
    let resultado = calculadora.calcResta();
    mostrarResultado(resultado);
}

function dividir(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let calculadora = new Calculadora(num1,num2);
    let resultado = calculadora.calcDiv();
    mostrarResultado(resultado);
}

function multiplicar(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let calculadora = new Calculadora(num1,num2);
    let resultado = calculadora.calcMult();
    mostrarResultado(resultado);
}


function agregarNumero(valor) {
    let campoActivo = document.activeElement;
    if (campoActivo && (campoActivo.id === 'number1' || campoActivo.id === 'number2')) {
        campoActivo.value += valor;
    }
}

function uno() { agregarNumero('1'); }
function dos() { agregarNumero('2'); }
function tres() { agregarNumero('3'); }
function cuatro() { agregarNumero('4'); }
function cinco() { agregarNumero('5'); }
function seis() { agregarNumero('6'); }
function siete() { agregarNumero('7'); }
function ocho() { agregarNumero('8'); }
function nueve() { agregarNumero('9'); }
function cero() { agregarNumero('0'); }



