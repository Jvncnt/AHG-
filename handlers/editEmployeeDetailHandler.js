const { editEmployeeDetailService } = require("../services/editEmployeeDetailService")

module.exports.editEmployeeDetail = async (event, context, callback) => 
{   
    const {employee_id} = event.pathParameters

    const{employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, archived } = JSON.parse(event.body)

    const{ result, statusCode } = await editEmployeeDetailService( employee_id, employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, archived)

  return {
    result: result ? JSON.stringify({ result: result }) : null,
    statusCode: statusCode
 
  }
}