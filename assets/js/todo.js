
let data = []

function renderTodo(){

	// Limpar a lista senao quando essa funcao for chamada irá re-colocar os ítens novamente
	document.querySelector('.todo').innerHTML = ''


	data.forEach(task => {
		
		let li = document.createElement('li')

		li.innerHTML = `
			<input type="checkbox" id="task-${task.id}">
			<label for="task-${task.id}" >${task.title}</label>
			<button type="button">X</button>
		`

		li.querySelector('input').addEventListener('change', e=>{
			// Dentrou de 'e' temos a propriedade target
			// o e.target é o input, e dentro temos o checked, para verificar
			if(e.target.checked){
				// Vamos adicionar a classe complete ao li
				li.classList.add('complete')
			} else {
				li.classList.remove('complete')
			}

		})	

		// Dentro do li, procure um button
		li.querySelector('button').addEventListener('click', e=>{

			// Colocando usso verificamos tudo que podemos fazer
			// com o botao. o console.dir lista as posibilidades de atributos
			// console.dir(e.target) 

			// com ajuda do dir, verificamos que temos uma propriedade chamada
			// parentNode, que a gente vi até o pai desse nosso elemento, que é o li
			// e.target.parentNode

			// conseguido isso, podemos agora usar o querySelecto nesse li para saber o input dele e assim pedar o id desse input

			// Isso é muito interessante, a gente tá num filho, vai até o pai, e o a partir do pai podemos pesquisar seus filhos 

			// agora, temos o valor do id como : task-1 ou task-2, por exemplo
			// vamos mandar ele passar a faca (split) assim ele vai virar um array com duas posicoes
			// uma com [task, valor], ex: [task,2], vamo pegar na posicao numero 1
			
			// Trasnformando em algo legível
			let button = e.target
			let li = button.parentNode		
			let input = li.querySelector('input')
			let id = input.id
			let idArrqy = id.split('-')
			let todoId = idArrqy[1]
		

			// ao invés de label.textContent ele usou label.innerText
			let label = li.querySelector('label')
			// perguntar se quer excluir
			if(confirm(`Deseja realmente excluir a tarefa '${label.textContent}'`)){

				// essa funcao parece o forEach, um parâmetro que é o elemento que está
				// naquela vez 
				// RETORNA UM ARRAY FILTRADO, e vamos apenas sobrescrever
				data = data.filter(task =>{

					// precisamos desse returna para a funcao
					// Esse return vai retornar verdaeiro ou false, se você quer que o item atual
					// seja composto em um novo array, um array filtrado
					// true ele retorna, se for false ele ignora
					
					// Entendido isso, agora queremos ignorar apeanas que tiver o id o mesmo valor do todoId

					return (task.id !== parseInt(todoId)) 
				})

			renderTodo()

			}
			

		})


		// Adicionando
		document.querySelector('.todo').append(li)

	})
}

// para o evento do botao
let btAdicionar = document.querySelector('#new-task');

// Isso também funciona, contudo, vamos pegar a tela que ele pressionou
// btAdicionar.addEventListener('change', e=>{
// 	console.log('Adicionar tarefa agora')
// })

// Pegando a tecla que ele pressionou após ter entrado no campo
btAdicionar.addEventListener('keyup', e=>{
	//console.log(e) //com essa linha e indo ver no console vc consegue ver o que pode fazer, é muita coisa
	// o bom disso é que você consegue perceber que o ENTER normal é diferente do ENTER do teclado numérico

	if(e.key === 'Enter'){
		console.log(e.target.value)

		// inserir em um array
		data.push({
			id: data.length+1,
			title: e.target.value
		})


		// limpar o campo para nova insercao
		e.target.value = ''

		// mandar fazer renderizar novamente para vermos o ítem adicionado
		renderTodo()

	}
})


// A primeira vez que iniciar já tá chamando e mostrando os elementos que já existe
renderTodo()

