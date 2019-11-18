module.exports = (req, res, next) =>{
    if(!req.body.title){
        res.json({"error": "A title is required!"});
        return 0;
    }
    if(!req.body.tasks){
        res.json({"error": "Tasks are required!"});
        return 0;
    }

    next();
}