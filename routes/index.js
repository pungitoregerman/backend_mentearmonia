let router = require('express').Router()
let user = require('./user')
let notas = require('./notas')

router.use('/auth', user)
router.use('/notas', notas) 

module.exports = router


