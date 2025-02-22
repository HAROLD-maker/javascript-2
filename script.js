function ejercicio1() {
    let input = prompt("Ingrese el precio de su compra:");
    if (input === null) return;
    let precio = parseFloat(input) || 0;
    let total = precio * 0.75;
    alert("El total a pagar con descuento es: " + total);
}

function ejercicio2() {
    let input = prompt("Ingrese el capital a invertir:");
    if (input === null) return;
    let capital = parseFloat(input) || 0;
    let ganancia = capital * 1.02;
    alert("El monto total después de un mes es: " + ganancia);
}

function ejercicio3() {
    let nota1 = parseFloat(prompt("Nota 1:") ?? "0");
    let nota2 = parseFloat(prompt("Nota 2:") ?? "0");
    let nota3 = parseFloat(prompt("Nota 3:") ?? "0");
    let examen = parseFloat(prompt("Nota del examen final:") ?? "0");
    let trabajo = parseFloat(prompt("Nota del trabajo final:") ?? "0");
    let parciales = (nota1 + nota2 + nota3) / 3;
    let final = (parciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);
    alert("Calificación final: " + final);
}

function ejercicio4() {
    let input = prompt("Ingrese el costo del artículo:");
    if (input === null) return;
    let costo = parseFloat(input) || 0;
    let precioVenta = costo * 1.30;
    alert("El precio de venta debe ser: " + precioVenta);
}

function ejercicio5() {
    let km = parseFloat(prompt("Ingrese kilómetros recorridos:") ?? "0");
    let min = parseFloat(prompt("Ingrese minutos de recorrido:") ?? "0");
    let tarifa = (km * 15000) + (min * 2000);
    alert("El monto a pagar es: " + tarifa);
}

function ejercicio6() {
    let num1 = parseFloat(prompt("Ingrese el primer número:") ?? "0");
    let num2 = parseFloat(prompt("Ingrese el segundo número:") ?? "0");
    let num3 = parseFloat(prompt("Ingrese el tercer número:") ?? "0");
    alert(`Cuadrados: ${num1 ** 2}, ${num2 ** 2}, ${num3 ** 2}`);
}

function ejercicio7() {
    let input = prompt("Ingrese el presupuesto total:");
    if (input === null) return;
    let presupuesto = parseFloat(input) || 0;
    alert(`Ginecología: ${presupuesto * 0.40}\nTraumatología: ${presupuesto * 0.30}\nPediatría: ${presupuesto * 0.30}`);

}

function ejercicio8() {
    let input = prompt("Ingrese el costo del artículo:");
    if (input === null) return;
    let costo = parseFloat(input) || 0;
    let precioVenta = costo * 1.30;
    alert("El precio de venta debe ser: " + precioVenta.toFixed(2));
}

function ejercicio9() {
    let inv1 = parseFloat(prompt("Inversión persona 1:") ?? "0");
    let inv2 = parseFloat(prompt("Inversión persona 2:") ?? "0");
    let inv3 = parseFloat(prompt("Inversión persona 3:") ?? "0");
    let total = inv1 + inv2 + inv3;
    alert(`Porcentajes: ${(inv1 / total * 100).toFixed(2)}%, ${(inv2 / total * 100).toFixed(2)}%, ${(inv3 / total * 100).toFixed(2)}%`);
}

function ejercicio10() {
    let op = prompt("Ingrese operación (+, -, *, /):");
    if (op === null) return;
    let num1 = parseFloat(prompt("Número 1:") ?? "0");
    let num2 = parseFloat(prompt("Número 2:") ?? "0");
    let resultado;
    switch (op) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero"; break;
        default: resultado = "Operación inválida";
    }
    alert("Resultado: " + resultado);
}
