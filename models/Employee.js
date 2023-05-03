class Employee{
    constructor(id, employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, created_at, modified_at, archived){
        this.id = id
        this.employee_name = employee_name
        this.company_title = company_title
        this.year_hired = year_hired
        this.birthdate = birthdate
        this.salary = salary
        this.image_url = image_url
        this.team_id = team_id
        this.created_at = created_at
        this.modified_at = modified_at
        this.archived = archived
    }

    get getId(){
        return this.id
    }

    get getEmployeeName() {
        return this.employee_name
    }

    get getCompanyTitle() {
        return this.company_title
    }

    get getYearHired(){
        return this.year_hired
    }

    get getSalary(){
        return this.salary
    }

    get getImageUrl(){
        return this.image_url
    }

    get getTeamId(){
        return this.team_id
    }
    
    get getYearHired(){
        return this.year_hired
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

    set setTeamName(team_name) {
        return this.team_name
    }

    set setTeamLeader(team_leader) {
        return this.team_leader
    }

    set company_id(company_id){
        return this.year_founded
    }
}

module.exports = Employee