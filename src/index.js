const express = require('express');
const server = express();

const ReqExistsCheck = require('./middlewares/ReqExistsCheck');
const Counter = require('./middlewares/Counter');
const IdExistsCheck = require('./middlewares/IdExistsCheck');
const GetIndex = require('./functions/GetIndex');
const port = 3003;

server.use(express.json());
server.use(Counter);

global.Counter = 0;
let new_id = 0;
global.data = [];

server.post('/projects', ReqExistsCheck, (req, res) =>{
    const {title, tasks} = req.body;
    const id = new_id;
    new_id++;
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

server.put('/projects/:id', IdExistsCheck, (req, res) =>{
    const id = req.params.id;
    const index = GetIndex(id);
    const new_title = req.body.title;
    data[index].title = new_title;
    res.json({status: `Titulo da tarefa mudada com sucesso para '${new_title}'!`});
});

server.delete('/projects/:id', IdExistsCheck, (req, res) =>{
    const id  = req.params.id;
    const index = GetIndex(id);
    const title = data[index].title;
    data.splice(index, 1);
    res.json({status: `Tarefa de titulo '${title}', e id '${id}' deletada com sucesso!!!`});
});

server.post('/projects/:id/tasks', IdExistsCheck, (req, res) =>{
    const id = req.params.id;
    const new_task = req.body.title;
    const index = GetIndex(id);
    const title = data[index].title;
    data[index].tasks.push(new_task);
    res.json({status: `Tarefa '${new_task}', adicionada ao projeto '${title}'!`});
})

server.listen(port, () => console.log(`Server up on port ${port}!!!`));