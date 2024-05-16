const { User, Leaderboard } = require("../models/models")

const Database = require('../db')
class LeaderboardController {
    async get_leaders(req, res){
        // const {}
    const leaders = await Database.query("SELECT leaderboards.rating, users.nickname FROM leaderboards join users ON leaderboards.userId = users.id order by leaderboards.rating DESC LIMIT 5")
    return res.json({leaders})
}
    
}

module.exports = new LeaderboardController()

