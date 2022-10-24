<h1 align="center">Desafio 01 - TODO</h1>

<p>Neste primeiro desafio foi criado uma API para criação, atualização e deleção de Tarefas.</p>

## Rotas

URL base: ```http://localhost:3333```

### 👤 User

POST ```/users```

A rota deve receber ```name``` e ```username``` no corpo da requisição para criar um usuário.

```json
{
	"name": "John Doe",
	"username": "john_doe"
}
```

---

### 📝 TODOs

GET ```/todos```

Essa rota irá retornar uma lista com todas as tarefas desse usuário.

> Deve ser encaminhado a propriedade ```username``` no header da requisição.

POST ```/todos```

A rota deve receber ```title``` e ```deadline``` no corpo da requisição para criar uma nova Tarefa.

```json
{
	"title": "Criar um todo",
	"deadline": "2022-05-25"
}
```

PUT ```/todos/:id```

Com essa rota será possível alterar o ```title``` e ```deadline``` da tarefa, que devem ser enviados no corpo da requisição. Deve ser enviado também o ```id``` através da rota da requisição.

> Deve ser encaminhado a propriedade ```username``` no header da requisição.

```json
{
	"title": "Todo atualizado",
	"deadline": "2022-05-26"
}
```

> Deve ser encaminhado a propriedade ```username``` no header da requisição.

PATCH ```/todos/:id/done```

Essa rota marca a Tarefa como concluída, para isso, deve ser enviado o ```id``` através da rota.

> Deve ser encaminhado a propriedade ```username``` no header da requisição.

DELETE ```/todos/:id```

Essa rota apaga a tarefa com id correspondente a propriedade ```id``` que deve ser enviada na rota da requisição.

> Deve ser encaminhado a propriedade ```username``` no header da requisição.

## Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/jordane-chaves" width="100px;" alt=""/>
<br />

Feito com 💜 por Jordane Chaves