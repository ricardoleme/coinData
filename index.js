import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 3000 


app.use(express.json()) // irá fazer o parse de arquivos JSON
//Rotas de conteúdo público
app.use('/', express.static('public'))

app.get('/api', (req, res) => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    
    fetch(url, options)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err));
})
//Rotas de Exceção - deve ser a última!
app.use(function (req, res) {
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe nesta API!`,
            param: 'invalid route'
        }]
    })
})
app.listen(port, function(){
    console.log(`🖥 Servidor rodando na porta ${port}`)
})



