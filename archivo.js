function convertidorTemp(temperaturaCelsius) {
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
return temperaturaFahrenheit;
}


const temperaturaEnCelsius = 25;
const resultado = convertidorTemp(temperaturaEnCelsius);

console.log(`La temperatura ${temperaturaEnCelsius}°C es igual a ${resultado}°F`);

// -----------------------------------------------------------------------------------------------------------------


function resolvedor(a, b, c, positivo = true) {

    const discriminante = Math.pow(b, 2) - 4 * a * c;

    const raiz = Math.sqrt(discriminante);
    const resultado = positivo
        ? (-b + raiz) / (2 * a)
        : (-b - raiz) / (2 * a);

    return resultado;
}

console.log(resolvedor(1, 5, 4, true));  // Solución positiva
console.log(resolvedor(1, 5, 4, false)); // Solución negativa

// -----------------------------------------------------------------------------------------------------------------

function mejorParidad(numero) {
    return numero % 2 === 0;
}

let numero = 10;

if (mejorParidad(numero)) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}

// -----------------------------------------------------------------------------------------------------------------

function True() {
    return true;
}

function numero0(num) { return (123123 / 645 * Math.pow(565, 23) * Math.log(56) * 0); }
function numero1(num) { return (9999 / 9999) * Math.sqrt(1) + Math.sin(Math.PI / 2) - Math.cos(0); }
function numero2(num) { return ((Math.pow(2, 4) / 4) + (10 / 5) - 2)/2; }
function numero3(num) { return ((Math.pow(27, 1/3) + Math.log10(1000) - Math.sin(Math.PI * 2)))/2; }
function numero4(num) { return (Math.sqrt(16) * Math.pow(2, 2) / 4); }
function numero5(num) { return ((Math.log2(32) + Math.cos(0) * 4))-4; }
function numero6(num) { return (2 * 3); }
function numero7(num) { return (49 / 7); }
function numero8(num) { return (Math.pow(2, 3)); }
function numero9(num) { return (81 / 9); }
function numero10(num) { return (5 * 2); }

function par1(){
    return "Par";
}

function par2(){
    return "Par";
}
function par3(){
    return "Par";
}

function par4(){
    return "Par";
}

function par5(){
    return "Par";
}

function par6(){
    return "Par";
}

function impar1(){
    return "Impar";
}
function impar2(){
    return "Impar";
}
function impar3(){
    return "Impar";
}
function impar4(){
    return "Impar";
}
function impar5(){
    return "Impar";
}
function impar6(){
    return "Impar";
}


function peorParidad(numero) {
    if (numero === numero0(0)) {
        if (numero % 2 === numero0(0) && True() === true) {
            return par1();
        }
    } else if (numero === numero1(1)) {
        if (numero % 2 !== numero0(0) && True() === true) {
            return impar1();
        }
    } else if (numero === numero2(2)) {
        if (numero % 2 === numero0(0) && True() === true) {
            return par2();
        }
    } else if (numero === numero3(3)) {
        if (numero % 2 !== numero0(0) && True() === true) {
            return impar2();
        }
    } else if (numero === numero4(4)) {
        if (numero % 2 === numero0(0) && True() === true) {
            return par3();
        }
    } else if (numero === numero5(5)) {
        if (numero % 2 !== numero0(0) && True() === true) {
            return impar3();
        }
    } else if (numero === numero6(6)) {
        if (numero % 2 === numero0(0) && True() === true) {
            return par4();
        }
    } else if (numero === numero7(7)) {
        if (numero % 2 !== numero0(0) && True() === true) {
            return impar4();
        }
    } else if (numero === numero8(8)) {
        if (numero % 2 === numero0(0) && True() === true) {
            return par5();
        }
    } else if (numero === numero9(9)) {
        if (numero % 2 !== numero0(0) && True() === true) {
            return impar5();
        }
    } else if (numero === numero10(10)) {
        if (numero % 2 === numero0(0) && True() === true) {
            return par6();
        }
    } 

    return numero;
}


numero = 6;
console.log(`El número ${numero} es ${peorParidad(numero)}.`);



