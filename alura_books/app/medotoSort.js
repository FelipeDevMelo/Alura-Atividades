const btnOrdenar = document.querySelector("#btnOrdenarPorPreco");

btnOrdenar.addEventListener("click", () => {
	let livrosOrdenador = livros.sort((a, b) => a.preco - b.preco);
	exibirOsLivrosNaTela(livrosOrdenador);
});
