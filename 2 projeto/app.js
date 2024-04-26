let dia = prompt("Qual o dia da semana?");

if (dia == "sabado" || dia == "domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}


let numero = prompt("informe um numero");

if(numero%2==0){
    alert("o numero é positivo");
}else{
    alert("o numero é negativo")
}



let pontos = 200;
if(pontos >=100){
    alert( "Parabéns, você venceu!")

}else{
    alert("Tente novamente para ganhar.")
}


saldo = 100;
alert(`seu saldo é de R$ ${saldo}`);


let nome = prompt("informe seu nome");
alert(`Boas vindas ${nome}`);