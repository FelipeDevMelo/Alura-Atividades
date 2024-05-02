const consultaCep = fetch("https://viacep.com.br/ws/01001000/json/")
	.then((res) => res.json())
	.then((res) => console.log(res.localidade))
	.catch((err) => console.log(err));
console.log(consultaCep);
