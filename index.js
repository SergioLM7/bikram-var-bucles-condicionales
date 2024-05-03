let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2*PI;

let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));


const incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

const incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

let contarHasta10_2 = 0;

for (let i = 0; i <= 10; i++) {
    contarHasta10_2++;
};

console.log(contarHasta10_2);

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI += postJ++;
}

console.log(postI);

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i%2 === 0) {
        sumaPares += i;
    } 
};

console.log(sumaPares);


