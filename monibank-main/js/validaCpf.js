export default function ehUmCpf(campo) {
	const cpf = campo.value.replace(/\.|-/g, "");
	console.log(cpf);
}
