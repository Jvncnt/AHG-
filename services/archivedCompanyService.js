const { databaseQuery } = require ("../middlewares/databaseQuery")

const Company = require("../models/Company")

module.exports.archivedCompanyService = async(company_id) => {

    try{
        await databaseQuery (`UPDATE companies SET archived = true WHERE company_id = ${company_id}`)
        await databaseQuery(`SELECT company_name FROM companies WHERE company_id = ${company_id}`)
        await databaseQuery(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE company_id = ${company_id}`)
        await databaseQuery(`UPDATE employee SET archived = TRUE, modified_at = CURRENT_TIMESTAMP WHERE team_id IN (SELECT id FROM team WHERE company_id = ${company_id})`)

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