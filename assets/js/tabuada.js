function calculaTabuada(){

	let tabuada = document.querySelector("#tabuada tbody")
	// perceba que na variável acima, estamos indo no id tabuada e dentro de tabuada pegando o tbody que é uma tag 
	// que tá lá no html


	// Quando executar o for uma vez, beleza
	// mas depois que executar várias vezes
	// vai ser várias tr's, por isso aqui estamos limpando a variável
	tabuada.innerHTML = ''

	// value retorna uma string
	let valorA = document.querySelector('#valorA').value

	// vamos converter - parseInt é um função nativa, tá no navegador
	valorA = parseInt(valorA)


	for (let valorB=0; valorB<=10; valorB++) {
		
		let resultado = valorA * valorB

		let template = `
			<td>${valorA}</td>
			<td>x</td>
			<td>${valorB}</td>
			<td>=</td>
			<td>${resultado}</td>
		`

		// creatElement cria um elemento que passar como parâmetro
		let tr = document.createElement('tr')

		// colonar uma string nesse elemento é usado o innerHTML
		// O que ele tá fazendo é adicionando os a variável template nesse tr 
		tr.innerHTML = template

		// agora vamos adicionar ao tbody
		tabuada.append(tr)

	}
}

// Adicionando evento - funciona com getElementById
/*document.getElementById('valorA').addEventListener('change', e=>{
	console.log('hello')
})*/

// change é quando muda o texto - dar enter no caso
// document.querySelector('#valorA').addEventListener('change', e=>{
// 	calculaTabuada()
// })
// Melhorando a funcao acima
document.querySelector('#valorA').addEventListener('change', calculaTabuada)


// chamado a funcao
calculaTabuada()
