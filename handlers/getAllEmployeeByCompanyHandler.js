const { getAllEmployeeByCompanyService } = require("../services/getAllEmployeeByCompanyService")

module.exports.getAllEmployeeByCompany = async (event, context, callback) => 
{   
    const { id } = event.pathParameters

    const{ result, statusCode } = await getAllEmployeeByCompanyService(id)

  return {
    body: result,
    statusCode: statusCode
  }
}