const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.getAllEmployeeByTeamService = async (team_name) => {
    try{
        const  result = (await databaseQuery(`SELECT * FROM employee WHERE team_id IN (SELECT id FROM team WHERE team_name = '${team_name}')`))

        const employee = result.rows.map(item => {
            const employees = new Employee(item.id, item.employee_name, item.company_title, item.year_hired, item.birthdate, item.salary, item.image_url, item.team_id, item.created_at, item.modified_at, item.archived)

            return employees
        })  
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