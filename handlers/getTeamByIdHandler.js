const { getTeamByIdService } = require("../services/getTeamByIdService")

module.exports.getTeamById = async (event, context, callback) => 
{   
    const { team_id } = event.pathParameters

    const{ result, statusCode } = await getTeamByIdService(team_id)

  return {
    body: result,
    statusCode: statusCode
  }
}