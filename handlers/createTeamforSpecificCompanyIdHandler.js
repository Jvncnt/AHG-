const { createTeamforSpecificCompanyIdService } = require("../services/createTeamforSpecificCompanyIdService")

module.exports.createTeamforSpecificCompanyId = async (event, context, callback) => 
{
    const { company_id } = event.pathParameters
    const{ team_name, team_leader } = JSON.parse(event.body)

    const{ result, statusCode } = await createTeamforSpecificCompanyIdService( team_name, team_leader, company_id )

  return {
    body: result,
    statusCode: statusCode
 
  }
}
