const { getAllEmployeeByIdService }  = require("../services/getAllEmployeeByIdService")

module.exports.getAllEmployeeById = async (event, context, callback) => 
{   
    const { id } = event.pathParameters

    const{ result, statusCode } = await getAllEmployeeByIdService(id)

  return {
    body: result,
    statusCode: statusCode
  }
}