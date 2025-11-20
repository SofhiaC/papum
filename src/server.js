import http from 'node:http'

const server = http.createServer((req, res) => {
    res.end("servidor node rodando yayyyy")

    
})
server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});