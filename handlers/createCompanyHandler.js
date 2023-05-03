const { createCompanyService } = require("../services/createCompanyService")

module.exports.createCompany = async (event, context, callback) => 
{   
  const{ company_name, company_address, year_founded } = JSON.parse(event.body)

  const{ result, statusCode } = await createCompanyService(company_name, company_address, year_founded)

  return {
    body: result,
    statusCode: statusCode
 
  }
}