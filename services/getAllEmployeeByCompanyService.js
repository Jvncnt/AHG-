const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.getAllEmployeeByCompanyService = async (employee_id) => {
    try{
        const [ result ] = (await databaseQuery(`SELECT * FROM employee WHERE team_id IN (SELECT team_id FROM team WHERE company_id = ${employee_id} )`)).rows

        const employee = new Employee(result.employee_id, result.employee_name, result.company_title, result.year_hired, result.birthdate, result.salary, result.image_url, result.team_id, result.created_at, result.modified_at, result.archived)

        return{
            result: JSON.stringify({result: employee}),
            statusCode: 200
        }
    } catch (error){
        console.log(error)
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}