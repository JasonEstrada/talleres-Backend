function convertidorTemp(temperaturaCelsius) {
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
return temperaturaFahrenheit;
}

// Ejemplo de uso
const temperaturaEnCelsius = 25; // Cambia este valor para probar con otras temperaturas
const resultado = convertidorTemp(temperaturaEnCelsius);

console.log(`La temperatura ${temperaturaEnCelsius}°C es igual a ${resultado}°F`);


function resolvedor(a, b, c, positivo = true) {
    // Calcular el discriminante
    const discriminante = Math.pow(b, 2) - 4 * a * c;

    // Verificar si el discriminante es negativo
    if (discriminante < 0) {
        return "No hay soluciones reales";
    }

    // Calcular el valor de x
    const raiz = Math.sqrt(discriminante);
    const resultado = positivo
        ? (-b + raiz) / (2 * a)
        : (-b - raiz) / (2 * a);

    return resultado;
}

// Ejemplos de uso:
console.log(resolvedor(1, 5, 4, true));  // Solución positiva
console.log(resolvedor(1, 5, 4, false)); // Solución negativa

function mejorParidad(numero) {
    // Retorna true si el número es par, false si es impar
    return numero % 2 === 0;
}

// Ejemplo de uso
const numero = 10;

if (mejorParidad(numero)) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}

