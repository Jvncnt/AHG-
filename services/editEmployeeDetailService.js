const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.editEmployeeDetailService = async (id, employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, archived) => {

    try{
        await databaseQuery (`UPDATE employee SET employee_name = '${employee_name}', company_title = '${company_title}', year_hired = ${year_hired}, birthdate = '${birthdate}', salary = ${salary}, image_url = '${image_url}', team_id = ${team_id}, modified_at = CURRENT_TIMESTAMP, archived = ${archived} WHERE id = ${id}`)

        return{
            result: null,
            statusCode: 204
        }
    }catch(error){
        console.log(error)
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}
