const { getTeamByIdService } = require("../services/getTeamByIdService")

module.exports.getTeamById = async (event, context, callback) => 
{   
    const { id } = event.pathParameters

    const{ result, statusCode } = await getTeamByIdService(id)

  return {
    body: result,
    statusCode: statusCode
  }
}