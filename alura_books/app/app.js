let livros = [];
const endPointApi =
	"https://guilhermeonrails.github.io/casadocodigo/livros.json";

const containerLivros = document.querySelector("#livros");

getBuscarLivrosDaApi();
async function getBuscarLivrosDaApi() {
	const res = await fetch(endPointApi);
	livros = await res.json();
	exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaLivros) {
	listaLivros.forEach((livro) => {
		containerLivros.innerHTML += `<div class="livro">
		<img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
		<h2 class="livro__titulo">
		${livro.titulo}
		</h2>
		<p class="livro__descricao">${livro.autor}</p>
		<p class="livro__preco" id="preco">R$${livro.preco}</p>
		<div class="tags">
		  <span class="tag">${livro.categoria}</span>
		</div>
	  </div>`;
	});
}

const desconto = 0.2;

const livrosComDesconto = livros.map((livro) => ({
	...livro,
	preco: (livro.preco - livro.preco * desconto).toFixed(2),
}));

for