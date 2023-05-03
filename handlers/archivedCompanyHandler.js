const { archivedCompanyService } = require("../services/archivedCompanyService")

module.exports.archivedCompany = async (event, context, callback) => 
{   
    const {company_id} = event.pathParameters

    const{ result, statusCode } = await archivedCompanyService( company_id)

  return {
    result: result ? JSON.stringify({ result: result }) : null,
    statusCode: statusCode
 
  }
}