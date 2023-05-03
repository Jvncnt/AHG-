class Company{
    constructor(company_id, company_name, company_address, year_founded, created_at, modified_at, archived){
        this.company_id = company_id
        this.company_name = company_name
        this.company_address = company_address
        this.year_founded = year_founded
        this.created_at = created_at
        this.modified_at = modified_at
        this.archived = archived
    }

    get getCompanyId(){
        return this.company_id
    }

    get getCompanyName() {
        return this.company_name
    }

    get getCompanyAddress() {
        return this.company_address
    }

    get getYearFounded(){
        return this.year_founded
    }
    
    get getCreatedAt() {
        return this.created_at
    }
    get getModifiedAt() {
        return this.modified_at
    }

    get getArchived() {
        return this.archived
    }

    set setCompanyName(company_name) {
        return this.company_name
    }

    set setCompanyAddress(company_address) {
        return this.company_address
    }

    set setYearFounded(year_founded){
        return this.year_founded
    }
}

module.exports = Company