const Router = require('express')
const router = new Router()

const leaderboardRouter = require('./leaderboardRouter')
const personal_informationRouter = require('./personal_informationRouter')
const user_of_courseRouter = require('./user_of_courseRouter')
const userRouter = require('./userRouter')




router.use('/user', userRouter)
// router.use('/personal_information', personal_informationRouter)
router.use('/user', personal_informationRouter)
router.use('/leaderboard', leaderboardRouter)
router.use(user_of_courseRouter)
module.exports = router