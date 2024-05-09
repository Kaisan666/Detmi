const Router = require('express')
const router = new Router()
const user_of_courseController = require( '../controllers/user_of_courseController')

router.get('/promo', user_of_courseController.checkmemb)
router.post('/enter', user_of_courseController.enter)


module.exports = router