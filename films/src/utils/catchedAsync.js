module.exports = (fn) => {
    return function(req,res,next) {
        fn(req,res).catch((err) => {
            next(err) // salto al manejador de errores de express
        })
    }
}