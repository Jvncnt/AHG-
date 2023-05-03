const getCompanyService = require("../services/getCompanyService").getCompanyService

module.exports.getCompany = async (event, context, callback) => 
{   
    const{ result, statusCode } = await getCompanyService()

  return {
    body: result,
    statusCode: statusCode
  }
}