const http = require("http")
const porta = 3000

const rotas = {
    '/': 'Curso de node',
    '/livros':'pag of books',
    '/autores':'list of Autores',
    '/info':'Informações de copywriting',
}
    const server = http.createServer((req, res)=>{
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end(rotas[req.url])
    })

server.listen(porta, ()=>{
    console.log(`servidor escutando em http://localhost:${porta}`)
})
