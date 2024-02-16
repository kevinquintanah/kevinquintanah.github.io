var a = '';
var b = '';
var operacion = '';
var resultado = '';

function agregarNumero(numero) {
    if (operacion === '') {
        a += numero;
    } else {
        b += numero;
    }
    actualizarPantalla();
}

function operar(op) {
    operacion = op;
    actualizarPantalla();
}

function borrar() {
    a = '';
    b = '';
    operacion = '';
    actualizarPantalla();
}

function calcular() {
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '^':
            resultado = Math.pow(num1, num2);
            break;
    }
    a = resultado.toString();
    b = '';
    operacion = '';
    actualizarPantalla();
}

function cuadrado() {
    var num = parseFloat(a);
    resultado = Math.pow(num, 2);
    a = resultado.toString();
    actualizarPantalla();
}

function raizCuadrada() {
    var num = parseFloat(a);
    resultado = Math.sqrt(num);
    a = resultado.toString();
    actualizarPantalla();
}

function actualizarPantalla() {
    var pantalla = document.getElementById('resultadoSpan');
    pantalla.textContent = a + (operacion !== '' ? '' + operacion : '') + (b !== '' ? '' + b : '');
}
