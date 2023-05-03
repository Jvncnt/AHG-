const { archiveEmployeeService } = require("../services/archiveEmployeeService")

module.exports.archiveEmployee = async (event, context, callback) => 
{   
    const { id } = event.pathParameters

    const{ result, statusCode } = await archiveEmployeeService(id)

  return {
    body: result,
    statusCode: statusCode
 
  }
}