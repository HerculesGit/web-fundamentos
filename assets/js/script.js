// pra ver é só ir no console
const email = "joao@hcode.com.br"

// concatenar
console.log('seu email é ' + email)


var variaVelGlobal = 'Var global'
let variavelLocal = 'Var local'


console.log('Var Glocal' + variaVelGlobal+ ' \n var local ' + variavelLocal)



// Na no meu documento procure o elemento que tenha esse botão
// depois adicione um evento listener
// (tipoElevento,funcaoQueQuerFazer)
document.getElementById('btn-submit').addEventListener('click', e=>{
	console.log('O botão foi clicado')
})

// Quando passar o mouse 
document.getElementById('form-login').addEventListener('mouseenter', e=>{
	console.log('O mouse está sobre o formulário')
})


// outro metodo, é mais poderoso que o getElementById
// a diferença, além do querySelector é que o id do elemento tem que tá com o # no começo, como 
// o exemplo abaixo | mouseleave - mouse estando fora
document.querySelector('#form-login').addEventListener('mouseleave', e=>{
	console.log('O mouse saiu do formulário')
})

// Para o comportamento normal do evento de click do formuládo, que é o submit do fomulário
// É a gente quebra o fluxo normal do botao do fomulário
document.querySelector('#form-login').addEventListener('submit', e=>{

	// o botao do formulário dispara o submit, e o que essa linha faz é para isso 
	e.preventDefault()

	//console.log('Formulário! enviado aqui vai o Ajax')

	// recuperando o email pelo id, lembrando que como é um querySelector coloca-se o # no começo 
	let email = document.querySelector('#email').value // assim ele pega o valor
	let password = document.querySelector('#password').value 

	/*
	console.log('o email é:'+ email + ', o password é:'+password)
	*/
	// JSON - JavaScritp Object Notation
	// chave, valor

	// podemos jogar ele em uma variável, ex:
	
	/*let json = {
		email: email,
		password: password
	}*/

	// No novo padrao do javaScript, como email e password são iguais
	// nao previsamos colocar chave e valor, apenas valor e ele vai entender que é
	// chave e valor. Ficando agora  
	let json = {
		email,
		password
	}

	// Se json for diferente de vazio
	/*if (json.email !== ""){
		console.log("O campo foi preenchido")
	}*/

	// forma mais facil de fazer
	// Se ele nao existir
	if(!json.email){
		console.error("O campo e-mail deve ser preenchido!")
	} else if (!json.password){
		console.error("O campo password deve ser preenchido!")
	} else {
		console.info('Dados validos com sucesso!')
	}



	/*
	// transformar em uma string
	// Esse Objeto JSON está no navegador, é algo do navegador
	let stringJSON = JSON.stringify(json)


	console.log(json)
	console.log('string=>>> '+stringJSON)

	// de string para json
	let jsonParse = JSON.parse(stringJSON)

	console.log(jsonParse)

	// Pegando apenas alguns valores no json
	console.log(jsonParse.email)
	console.log(jsonParse.password)

	*/
})
