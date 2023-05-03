const { databaseQuery } = require ("../middlewares/databaseQuery")

const Company = require("../models/Company")

module.exports.editCompanyDetailService = async(company_id, company_name, company_address, year_founded, archived) => {

    try{
        await databaseQuery (`UPDATE companies SET company_name = '${company_name}', company_address = '${company_address}', year_founded = ${year_founded}, modified_at = CURRENT_TIMESTAMP, archived = ${archived} WHERE company_id = ${company_id}`)

        return{
            result: null,
            statusCode: 204
        }
    }catch(error){
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}
