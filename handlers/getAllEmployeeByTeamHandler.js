const { getAllEmployeeByTeamService } = require("../services/getAllEmployeeByTeamService")

module.exports.getAllEmployeeByTeam = async (event, context, callback) => 
{   
    const { team_name } = event.pathParameters

    const{ result, statusCode } = await getAllEmployeeByTeamService(team_name)

  return {
    body: result,
    statusCode: statusCode
  }
}