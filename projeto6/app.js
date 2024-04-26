function imc(altura, peso) {
  return peso / (altura * altura);
}

//////////////////////////

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }

//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }

//     return fatorial;
//   }

//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);

/////////////////////////////////////////

// function converterDolar(dolar){
//     return dolar*4.80;
// }

//////////////////////////////

function dado(numeroDado) {
  let numero = Math.floor(Math.random() * numeroDado+1);
  return console.log(numero);
}

dado(6);
