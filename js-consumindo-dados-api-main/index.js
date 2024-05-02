async function buscaEndereco() {
	const consultaCep = await fetch("https://viacep.com.br/ws/01001000/json/");
	const consultaCepConvertida = await consultaCep.json();
	console.log(consultaCepConvertida);
}
buscaEndereco();
