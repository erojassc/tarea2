const middleware = {
    logger: function(re,res,next){
        console.log(req.method+''+req.originalUrl);
        next();
    }
}

module.exports = middleware