const { databaseQuery } = require ("../middlewares/databaseQuery")

const Company = require("../models/Company")

module.exports.createCompanyService = async(company_name, company_address, year_founded) => {
    const company = new Company (null, company_name, company_address, year_founded, null, null, false)

    try{
        const result = await databaseQuery (`INSERT INTO companies (company_name, company_address, year_founded) VALUES ('${company.getCompanyName}', '${company.getCompanyAddress}', ${company.getYearFounded} )`)

        return{
            result: JSON.stringify({ result: result }),
            statusCode: 200
        }
    }catch(error){
        console.log(error)
        return{
            body: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}
