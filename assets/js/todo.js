
let data = [
	{
		id: 1,
		title: "Estudar HTML"
	},
	{
		id: 2,
		title: "Estudar CSS"
	},
	{
		id: 3,
		title: "Estudar JavaScript"
	},
	{
		id: 4,
		title: "Estudar PHP"
	},
]
data.forEach(task => {
	
	let li = document.createElement('li')

	li.innerHTML = `
		<input type="checkbox" id="task-${task.id}">
		<label for="task-${task.id}">${task.title}</label>
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

	// Adicionando
	document.querySelector('.todo').append(li)

})

