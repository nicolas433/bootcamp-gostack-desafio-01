module.exports = (req, res, next) =>{
    if(!req.body.title){
        res.json({"error": "A title is required!"});
        return 0;
    }
    if(!req.body.tasks){
        req.body.tasks = [];
    }

    next();
}