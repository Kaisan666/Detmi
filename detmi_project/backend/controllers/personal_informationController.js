const {Personal_information} = require("../models/models")
const ApiError = require('../erorr/ApiError')



class PersonalInformationController {
    async change_info(req, res){
        const {user_id, Firstname = " ", Surname = " ", Middlename = ' ', Place_of_study = " ", phone_number = " "} = req.body
        let user = await Type.findOne({where : {id : user_id }})

        if (user){
            user = await Type.update({ Firstname, Surname, Middlename, Place_of_study, phone_number})
        }
        else {
            user = Type.create({Firstname, Surname, Middlename, Place_of_study, phone_number})
        }
        return res.json(user)
    }
    async view_lk(req, res){

    }
}

module.exports = new PersonalInformationController()