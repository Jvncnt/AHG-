const { getAllEmployeeByIdService }  = require("../services/getAllEmployeeByIdService")

module.exports.getAllEmployeeById = async (event, context, callback) => 
{   
    const { employee_id } = event.pathParameters

    const{ result, statusCode } = await getAllEmployeeByIdService(employee_id)

  return {
    body: result,
    statusCode: statusCode
  }
}