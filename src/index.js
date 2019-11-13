/* 
 Query params = ?parametro={valor}
    req.query
 Route params = /users/{valor}
    req.params
 Request body = { "post": "true", 
                  "put": "true", 
                  "get": "false", 
                  "delete": "false" }
*/

const express = require('express');
const server = express();

server.use(express.json());

let data = [{
}]

server.post('/projects', (req, res) =>{
    const new_data = {id, title, tasks} = req.body;
    data.push(new_data);
    res.json({status: "Tarefa armazenada com sucesso!!!"})
})


server.get('/projects', (req, res) =>{
    res.send("teste");
})

server.listen(3003, () => console.log("Server on!!!"));