//Pair Programming

//Variables
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2*PI;

//Booleanos
let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//Operadores
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//Bucles
let contarHasta10_2 = 0;

for (let i = 0; i < 10; i++) {
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

//Proyecto individual 

//Variables
let variableValorNumerico = 77;
const MiNombre = "Sergio Lillo";
const MiNumeroFav = 7;

//Booleanos
let booleanoOr = (booleano1 || booleano2);
let booleanoMix1 = (booleano1 && (TAU/2 === PI) || variableValorNumerico >= MiNumeroFav);

let seisNoEsNueve = (6 !== 9);
let booleanoMix2 = (variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav*TAU));

//Operadores
let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta = MiNumeroFav - variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

//Bucles
let contarHasta10 = 0;

while (contarHasta10 < 10) {
  contarHasta10++;
}

console.log(contarHasta10);

/* 25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ*/

let preI = 0;
let preJ = 0;

for (let i= 0; i < 11; i++) {
  preI += ++preJ;
}

/* 26.- Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)*/

let sumaImpares = 0;

for (let i=0; i < 10; i++) {
  if (i%2 !== 0) {
    sumaImpares += i; 
  }
};

console.log(sumaImpares);

