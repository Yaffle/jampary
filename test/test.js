import { add, sub, mul, div, vecSumErrBranch } from '../dist/jamapry.esm.js';

let pi = [ 3.141592653589793116e+00, 1.224646799147353207e-16, -2.994769809718339666e-33, 1.112454220863365282e-49 ];
let pi2 = [ 6.283185307179586232e+00, 2.449293598294706414e-16, -5.989539619436679332e-33, 2.224908441726730563e-49 ];
let e = [ 2.718281828459045091e+00, 1.445646891729250158e-16, -2.127717108038176765e-33, 1.515630159841218954e-49 ];

console.log(e);
//console.log(sub(pi2, pi));
//console.log(sub(add(e, pi), pi));
console.log(div(mul(pi, pi2), pi2));
//console.log(div(mul([2], pi2), pi2));