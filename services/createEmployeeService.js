const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.createEmployeeService = async (employee_name, company_title, year_hired, birthdate, salary, image_url, team_id) => {

    try{
        const employee = new Employee (null, employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, null, null, false)

        const result  = await databaseQuery (`INSERT INTO employee(employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, created_at, modified_at, archived) VALUES ('${employee_name}', '${company_title}', ${year_hired}, '${birthdate}', ${salary}, '${image_url}', ${team_id}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

        return{
            result: JSON.stringify({result: result}),
            statusCode: 200
        }
    } catch (error){
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}