const { getTeamByCompanyService } = require("../services/getTeamByCompanyService")

module.exports.getTeamByCompany = async (event, context, callback) => 
{   
    const { company_id } = event.pathParameters

    const{ result, statusCode } = await getTeamByCompanyService(company_id)

  return {
    body: result,
    statusCode: statusCode
  }
}