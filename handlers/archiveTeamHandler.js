const { archiveTeamService } = require("../services/archiveTeamService")

module.exports.archiveTeam = async (event, context, callback) => 
{   
    const {team_id} = event.pathParameters

    const{ result, statusCode } = await archiveTeamService(team_id)

  return {
    body: result,
    statusCode: statusCode
 
  }
}