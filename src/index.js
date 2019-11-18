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
//const IdExistsCheck = require('./middlewares/IdExistsCheck');

port = 3003;
server.use(express.json());

let data = [];

server.post('/projects', ReqExistsCheck, (req, res) =>{
    let {title, tasks} = req.body;
    let id = AutoIncrement(data);
    new_data = {
        "id": id,
        "title": title,
        "tasks": tasks
    }
    data.push(new_data);
    res.json({status: 'Tarefa armazenada com sucesso!!!'});
});

server.get('/projects', (req, res) =>{
    res.json(data);
});

server.put('/projects/:id', (req, res) =>{
    let id = req.params.id;
    if(!data[id]){
        res.json({status: 'Tarefa não existe!'});    
    }else{
        const title = req.body.title;
        data[id].title = title; 
        res.json({status: `Titulo da tarefa mudada com sucesso para '${title}'!`});
    }
});

server.delete('/projects/:id', (req, res) =>{
    let { id } = req.params.id;
    if(!data[id]){
        res.json({status: 'Tarefa não existe!'});
    }else{
        let title = data[id].title;
        data.splice(id, 1);
        res.json({status: `Tarefa de titulo '${title}', e id '${id}' deletada com sucesso!!!`});
    }
});

server.post('/projects/:id/tasks', (req, res) =>{
    let id = req.params.id;
    if(!data[id]){
        res.json({status: 'Tarefa não existe!'});
    }else{
        let title = req.body.title;
        data[id].tasks.push(title);
        res.json({status: `Tarefa '${title}', adicionada ao projeto '${data[id].title}'!`});
    }
})

server.listen(port, () => console.log(`Server up on port ${port}!!!`));