function desglosarString(texto, tipo) {
    // Definir los conjuntos de vocales y consonantes
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);
    let contador = 0;
    
    for (let letra of texto.toLowerCase()) {
        if (tipo === "vocales" && vocales.has(letra)) {
            contador++;
        } else if (tipo === "consonantes" && /[b-df-hj-np-tv-z]/.test(letra)) {
            contador++;
        }
    }
    
    return contador;
}


console.log(desglosarString("tamarindo", "vocales")); 
console.log(desglosarString("tamarindo", "consonantes")); 

function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; // ninguna solución
}

console.log(twoSum([2, 7, 11, 15], 26));  
console.log(twoSum([3, 4, 2], 5));       


function conversionRomana(romano) {
    const romanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let resultado = 0;

    for (let i = 0; i < romano.length; i++) {
        const actual = romanos[romano[i]];
        const siguiente = romanos[romano[i + 1]];

        if (actual < siguiente) {
            resultado -= actual;
        } else {
            resultado += actual;
        }
    }

    return resultado;
}


console.log(conversionRomana("VI"));   
console.log(conversionRomana("XIV"));    
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MVIII")); 
