const databaseQuery = require ("../middlewares/databaseQuery").databaseQuery

const Company = require("../models/Company")

module.exports.getCompanyService = async () => {

    try{
        const result  = await databaseQuery(`SELECT * FROM companies WHERE archived = false`)

        const companies = result.rows.map(item => {
            const company = new Company(item.company_id, item.company_name, item.company_address, item.year_founded, item.created_at, item.modified_at, item.archived)

            return company
        })  

        return{
            result: JSON.stringify({result: companies}),
            statusCode: 200
        }
    } catch (error){
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}