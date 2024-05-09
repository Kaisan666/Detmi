const Router = require('express')
const router = new Router()
const personal_informationController =  require('../controllers/personal_informationController')

router.post('/change_personal', personal_informationController.change_info)
router.get(':id/lk', personal_informationController.view_lk)

module.exports = router