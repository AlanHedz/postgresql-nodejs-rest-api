const express = require('express')
const router = express.Router()
const db = require('../db')

// GET /users
router.get('/', (req, res) => {
    //Query para seleccionar todos los usuarios
    db.query('SELECT * FROM users').then((users) => {
        return res.json(users.rows)
    }).catch((err) => {
        console.log(err)
    })
})

//POST /users
router.post('/', (req, res) => {
    console.log(req.body)
    const { name, email } = req.body
    //Query para insertar datos en la tabla users
    db.query('INSERT INTO users(name, email) VALUES($1, $2) RETURNING id', [name, email]).then((user) => {
        return res.json({'message': 'Usuario creado correctamente'})
    }).catch((err) => {
        console.log(err)
    })
})

//PUT /users/:id
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    //Query para actualizar un usuario
    db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]).then((user) => {
        return res.json({'message': 'Usuario actualizado correctamente'})
    }).catch((err) => {
        console.log(err)
    })
})

// GET /users/:id
router.get('/:id', (req, res) => {
    const { id } = req.params
    //Query para seleccionar un usuario con id
    db.query('SELECT * FROM users WHERE id = $1', [id]).then((user) => {
        return res.json(user.rows[0])
    }).catch((err) => {
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.query('DELETE FROM users WHERE id = $1', [id]).then((user) => {
        return res.json({'message': 'Usuario eliminado correctamente'})
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router