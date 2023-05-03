const { databaseQuery } = require ("../middlewares/databaseQuery")

const Team = require("../models/Team")

module.exports.createTeamforSpecificCompanyIdService = async(team_name, team_leader, company_id) => {
    try{
        const team = new Team (null, team_name, team_leader, company_id, null, null, false)

        const result = await databaseQuery(`INSERT INTO team (team_name, team_leader, company_id, created_at, modified_at, archived) VALUES ('${team_name}', '${team_leader}', ${company_id}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

        return{
            result: JSON.stringify({result: result}),
            statusCode: 200
        }
    } catch (error){
        console.log(error)
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}