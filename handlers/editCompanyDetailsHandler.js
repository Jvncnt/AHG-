const { editCompanyDetailService } = require("../services/editCompanyDetailService")

module.exports.editCompanyDetail = async (event, context, callback) => 
{   
    const {company_id} = event.pathParameters

    const{ company_name, company_address, year_founded, archived } = JSON.parse(event.body)

    const{ result, statusCode } = await editCompanyDetailService( company_id, company_name, company_address, year_founded, archived)

  return {
    result: result ? JSON.stringify({ result: result }) : null,
    statusCode: statusCode
 
  }
}