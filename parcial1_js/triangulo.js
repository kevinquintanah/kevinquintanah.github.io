var base;
var altura;
var area;

function calcularArea() {
    base = parseFloat(document.getElementById("base").value);
    altura = parseFloat(document.getElementById("altura").value);
    area = (base * altura) / 2;
    document.getElementById("resultado").innerText = "El área es: " + area;
}

