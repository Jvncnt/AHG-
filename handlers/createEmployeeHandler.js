const { createEmployeeService } = require("../services/createEmployeeService")

module.exports.createEmployee = async (event, context, callback) => 
{
    const{ employee_name, company_title, year_hired, birthdate, salary, image_url, team_id } = JSON.parse(event.body)

    const{ result, statusCode } = await createEmployeeService(employee_name, company_title, year_hired, birthdate, salary, image_url, team_id)

  return {
    body: result,
    statusCode: statusCode
 
  }
}
