const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../erorr/ApiError')
const {User, Personal_information} = require("../models/models")
const { where } = require("sequelize")
class UserController {
    async registration(req, res, next){
        const {nickname, email, password} = req.body
        if ( !nickname || !email || !password){ 
            return next(ApiError.baderquest("Некорректный имейл или пароль"))
        }
        let condidate = await User.findOne({where : {nickname}})
        if (condidate){
            return next(ApiError.baderquest("Имя пользователя уже занято"))

        }
        condidate = await User.findOne({where : {email}})
        if (condidate) {
            return next(ApiError.baderquest("Почта уже занята"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({nickname, email, password: hashPassword})
        const personal_information = await Personal_information.create({userId : user.id})
        const token = jwt.sign({id : user.id, nickname, email, }, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})

    }
    async login(req, res){

    }
    async check(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.baderquest("Не задан ID"))
        }
        res.json(id);
    }
}

module.exports = new UserController()