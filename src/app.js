import express from 'express'

const app = express()

// Indicar para que o expressar leia o json
app.use(express.json())

const selecoes = [
  {id: 1, selecao: 'Brasil', grupo: 'G'},
  {id: 2, selecao: 'Suíça', grupo: 'G'},
  {id: 3, selecao: 'Camarões', grupo: 'G'},
  {id: 4, selecao: 'Sérvia', grupo: 'G'}
]

function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req, res) => {
  res.send('<h1>Curso de Node JS!</h1>')
})

app.get('/selecoes', (req, res) => {
  selecoes.push(req.body)
  res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
  res.json(buscarSelecoesPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body)
  res.status(201).send('Sucesso na criação!')
})

app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id)
  selecoes.slice(index,1)
  res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id)
  selecoes[index].selecao = req.body.selecao
  selecoes[index].grupo = req.body.grupo
  res.json(selecoes)
})

export default app
