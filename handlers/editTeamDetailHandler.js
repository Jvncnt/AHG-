const { editTeamDetailService } = require("../services/editTeamDetailService")

module.exports.editTeamDetail = async (event, context, callback) => 
{   
    const {team_id} = event.pathParameters

    const{ team_name, team_leader, company_id, archived } = JSON.parse(event.body)

    const{ result, statusCode } = await editTeamDetailService(team_id, team_name, team_leader, company_id, archived)

  return {
    result: result ? JSON.stringify({ result: result }) : null,
    statusCode: statusCode
 
  }
}