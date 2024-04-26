console.log("Bem Vindo!");


///////////////////


let nome = "Felipe";

console.log(`Bem vindo ${nome}`);


////////////


let nome = "Felipe";

alert(`Bem vindo ${nome}`);

////////////////////


let linguagm = prompt("Qual linguagem de programacao voce mais gosta?");
console.log(linguagm);


///////////////////////////
 let valor1 = 3;
let valor2 = 6;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.` );



//////////////////////////////

let valor1 = 1;
let valor2 = 9;
let resultado = valor1 - valor2;

console.log(`A diferença  de ${valor1} e ${valor2} é igual a ${resultado}.` );


////////////////////////////


let idade = prompt("informe sua idade");

if(idade >=18){
    console.log("voce é maior de idade");
}else{
    console.log("ovce é menor de idade");
}

///////////////////////

numero = prompt("informe um numero");

if(numero > 0){
    alert("este numero é positivo");

}else if(numero < 0){
    alert("este numero é negativo");
}else{

    alert("este numero é um Zero");

}

////////////////////////////////////

let i = 1
while( i <=10){
    console.log(i);
    i++;
}

///////////////////////////////////

let nota = 2;

if(nota <=7){
    console.log("aprovado");
}else{
    console.log("reprovado")
}

////////////////////

console.log(Math.floor(Math.random() * 100));


////////////////////////////

console.log(Math.floor(Math.random() * 10));

////////////////////////////////

console.log(Math.floor(Math.random() * 1000));