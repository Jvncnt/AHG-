const { databaseQuery } = require ("../middlewares/databaseQuery")

const Employee = require("../models/Employee")

module.exports.archiveEmployeeService = async(id) => {

    try{
        await databaseQuery(`UPDATE employee SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = ${id}`)

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
