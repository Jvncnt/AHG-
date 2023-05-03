const { databaseQuery } = require ("../middlewares/databaseQuery")

const Team = require("../models/Team")

module.exports.editTeamDetailService = async( id, team_name, team_leader, company_id, archived) => {

    try{
        await databaseQuery (`UPDATE team SET team_name = '${team_name}', team_leader = '${team_leader}', company_id = ${company_id}, modified_at = CURRENT_TIMESTAMP, archived = ${archived} WHERE id = ${id}`)

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
