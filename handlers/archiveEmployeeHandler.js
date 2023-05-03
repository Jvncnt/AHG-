const { archiveEmployeeService } = require("../services/archiveEmployeeService")

module.exports.archiveEmployee = async (event, context, callback) => 
{   
    const { employee_id } = event.pathParameters

    const{ result, statusCode } = await archiveEmployeeService(employee_id)

  return {
    body: result,
    statusCode: statusCode
 
  }
}