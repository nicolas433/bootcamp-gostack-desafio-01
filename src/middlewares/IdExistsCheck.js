module.exports = (req, res, next) =>{
    const id = req.params.id;

    if(data.findIndex((item) => item.id == id)== -1){
        res.json({"error": `O projeto de id '${id}' não existe`});
        return 0;
    }
    next();
}