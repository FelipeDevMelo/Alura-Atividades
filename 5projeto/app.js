function olaMundo() {
  return console.log("ola mundo!");
}

olaMundo();


///////////////////////

function bemVindo(nome){
    return console.log(`Bem vindo ${nome}`)

}

bemVindo(felipe);



/////////////////


function dobro(numero){
    return console.log(`${numero*2}`);
}

dobro(2);


//////////////////////////


function Media(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(1, 10, 32);
  console.log(media);

//////////////////////////

function numeroMaior(a,b){
    media =  a>b ? a : b;
    return console.log(media);
}
numeroMaior(2, 3);

//////////////////////////

function quadrado(numero){
    return console.log(`${numero*numero}`);
}

quadrado(2);