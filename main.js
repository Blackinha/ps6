// Giovanna Martins Soares - 23214290130
const A = [2, 3, 5, 7, 11, 13];
const k = 17;

function multiplicarArray(array, k) {
    const resultado = [];
    for (let num of array) {
        resultado.push(num * k)
    }
    return resultado;
}

const B = multiplicarArray(A, k);

B.pop();
B.unshift(1);
B.shift();
B.splice(1, 1);
B.splice(1, 1, 10, 20, 30);

function impar(x) {
    return x % 2 === 0;
}
const C = B.filter(impar);
console.log(`${B} \n`);
console.log(`${C} \n`);

console.log(`O indice do 20 eh ${C.indexOf(20)}`);