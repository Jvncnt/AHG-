const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.getAllEmployeeByIdService = async (id) => {

    try{
        const [ result ]   = (await databaseQuery(`SELECT * FROM employee WHERE id = ${id}`)).rows

        const employee = new Employee(result.id, result.employee_name, result.company_title, result.year_hired, result.birthdate, result.salary, result.image_url, result.team_id, result.created_at, result.modified_at, result.archived)

        return{
            result: JSON.stringify({result: employee}),
            statusCode: 200
        }
    } catch (error){
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}