const { databaseQuery } = require ("../middlewares/databaseQuery")

const Team = require("../models/Team")

module.exports.getTeamByIdService = async (id) => {
    try{
        const [ result ] = (await databaseQuery(`SELECT * FROM team WHERE id = ${id}`)).rows

        const team = new Team(result.id, result.team_name, result.team_leader, result.company_id, result.created_at, result.modified_at, result.archived)

        return{
            result: JSON.stringify({result: team}),
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