const { archiveTeamService } = require("../services/archiveTeamService")

module.exports.archiveTeam = async (event, context, callback) => 
{   
    const {id} = event.pathParameters

    const{ result, statusCode } = await archiveTeamService(id)

  return {
    body: result,
    statusCode: statusCode
 
  }
}