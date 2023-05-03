const { databaseQuery } = require ("../middlewares/databaseQuery")

const Team = require("../models/Team")

module.exports.archiveTeamService = async(team_id) => {

    try{
        await databaseQuery(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE team_id = ${team_id}`)
        await databaseQuery(`SELECT team_name FROM team WHERE team_id = ${team_id}`)
        await databaseQuery(`UPDATE employee SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE team_id = ${team_id}`)


        return{
            result: null,
            statusCode: 204
        }
    }catch(error){
        console.log(error)
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}
