const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.archiveEmployeeService = async(employee_id) => {

    try{
        await databaseQuery(`UPDATE employee SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE employee_id = ${employee_id}`)

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
