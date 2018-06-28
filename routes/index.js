const users = require('./user')

module.exports = (app) => {
    //Registro de rutas
    app.use('/users', users)
}