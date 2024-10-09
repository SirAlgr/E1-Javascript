// 1. Número es par o impar
function esParOImpar() {
    const numero = parseInt(document.getElementById('numParImpar').value);
    const output = numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`;
    document.getElementById('outputParImpar').innerText = output;
}

// 2. Comparar dos números
function compararNumeros() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let output = '';
    if (num1 > num2) {
        output = `${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
        output = `${num2} es mayor que ${num1}`;
    } else {
        output = `${num1} y ${num2} son iguales`;
    }
    document.getElementById('outputCompararNumeros').innerText = output;
}

// 3. Verificar si un número es múltiplo de 5
function esMultiploDe5() {
    const numero = parseInt(document.getElementById('numMultiplo').value);
    const output = numero % 5 === 0 ? `${numero} es múltiplo de 5` : `${numero} no es múltiplo de 5`;
    document.getElementById('outputMultiplo').innerText = output;
}

// 4. Imprimir números desde 0 hasta el número indicado
function imprimirNumerosHasta() {
    const numero = parseInt(document.getElementById('numHasta').value);
    let resultado = '';
    for (let i = 0; i <= numero; i++) {
        resultado += i + ' ';
    }
    document.getElementById('outputNumerosHasta').innerText = resultado;
}

// 5. Imprimir palabra N veces
function repetirPalabra() {
    const palabra = document.getElementById('palabra').value;
    const cantidad = parseInt(document.getElementById('numRepetir').value);
    let resultado = '';
    for (let i = 0; i < cantidad; i++) {
        resultado += palabra + ' ';
    }
    document.getElementById('outputRepetir').innerText = resultado;
}

// 6. Imprimir todos los valores de un array
function imprimirArray() {
    const arrayValores = document.getElementById('arrayValores').value.split(',');
    let resultado = '';
    for (let i = 0; i < arrayValores.length; i++) {
        resultado += arrayValores[i] + ' ';
    }
    document.getElementById('outputArrayValores').innerText = resultado;
}

// 7. Imprimir todos los valores de un array menos el de la 5ta posición
function imprimirArrayExcepto5() {
    const arrayExcepto5 = document.getElementById('arrayExcepto5').value.split(',');
    let resultado = '';
    for (let i = 0; i < arrayExcepto5.length; i++) {
        if (i !== 4) {
            resultado += arrayExcepto5[i] + ' ';
        }
    }
    document.getElementById('outputExcepto5').innerText = resultado;
}

// 8. Multiplica cada número de un array por un número dado
function multiplicarArray() {
    const arrayMultiplicar = document.getElementById('arrayMultiplicar').value.split(',').map(Number);
    const multiplicador = parseInt(document.getElementById('numMultiplicar').value);
    let resultado = '';
    for (let i = 0; i < arrayMultiplicar.length; i++) {
        resultado += arrayMultiplicar[i] * multiplicador + ' ';
    }
    document.getElementById('outputMultiplicar').innerText = resultado;
}
