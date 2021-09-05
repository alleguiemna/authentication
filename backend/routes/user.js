const express = require ('express')
const { register, login, getUser } = require('../controllers/user.controllers')
const isAuth = require('../middlewares/auth')
const { registerRules, validator } = require('../middlewares/validator')
const router = express.Router()



router.post('/register',registerRules(),validator, register)
router.post('/login', login)
router.get('/user',isAuth,getUser)


module.exports= router