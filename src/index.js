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

port = 3003;
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
    data.push(new_data);
    res.json({status: "Tarefa armazenada com sucesso!!!"});
});

server.get('/projects', (req, res) =>{
    res.json(data);
});

server.put('/projects/:id', (req, res) =>{
    data[req.params.id].title = req.body.title;
    res.json({status: "Tarefa mudada com sucesso!!!"});
});

server.delete('/projects/:id', (req, res) =>{
    const { id } = req.params.id;
    if(!data[id]){
        res.json({status: `Tarefa não existe!`});
    }else{
        let title = data[id].title;
        data.splice(id, 1);
        res.json({status: `Tarefa de titulo "${title}", e id "${id}" deletada com sucesso!!!`});
    }
});

server.listen(port, () => console.log(`Server up on port ${port}!!!`));


/*

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