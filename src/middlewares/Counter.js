module.exports = (req, res, next) =>{
    Counter ++;
    console.log(Counter);
    next();
}