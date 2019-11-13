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
    "id": "id da tarefa",
    "title": "titulo da tarefa",
    "tasks": "vetor de tarefas"
}]

server.post('/projects', (req, res) =>{
    const new_data = {id, title, tasks} = req.body;
    data.push(new_data);
    res.json({status: "Tarefa armazenada com sucesso!!!"});
})

server.get('/projects', (req, res) =>{
    res.json(data);
})

server.put('/projects/:id', (req, res) =>{
    data[req.params.id].title = req.body.title;
    res.json({status: "Tarefa mudada com sucesso!!!"});
})

server.delete('/projects/:id', (req, res) =>{
    data.splice(req.params.id, 1);
    res.json({status: "Tarefa deletada com sucesso!!!"});
})


server.listen(3003, () => console.log("Server on!!!"));