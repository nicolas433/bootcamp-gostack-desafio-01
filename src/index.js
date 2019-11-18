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
const AutoIncrement = require('./functions/AutoIncrement');
const ReqExistsCheck = require('./middlewares/ReqExistsCheck');


server.use(express.json());

let data = [];


server.post('/projects', ReqExistsCheck, (req, res) =>{
    const {title, tasks} = req.body;
    const id = AutoIncrement(data);
    new_data = {
        "id": id,
        "title": title,
        "tasks": tasks
    }
    console.log(new_data);
    data.push(new_data);
    res.json({status: "Tarefa armazenada com sucesso!!!"});
})


server.listen(3003, () => console.log("Server on!!!"));


/*

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

server.post('/projects/:id/:title', (req, res) =>{
    const { id } = req.params;
    console.log(req.body);
    //const { task } = req.body;
    console.log(data[id].tasks);
    
    data[id].tasks.push(task);
    console.log(data);
    res.json(data);
    
    const new_data = {id, title, tasks} = req.body;
    data.push(new_data);
    res.json({status: "Tarefa armazenada com sucesso!!!"});
    
})

*/