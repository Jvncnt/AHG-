const { getAllEmployeeByCompanyService } = require("../services/getAllEmployeeByCompanyService")

module.exports.getAllEmployeeByCompany = async (event, context, callback) => 
{   
    const { employee_id } = event.pathParameters

    const{ result, statusCode } = await getAllEmployeeByCompanyService(employee_id)

  return {
    body: result,
    statusCode: statusCode
  }
}