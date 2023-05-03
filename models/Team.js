class Team{
    constructor(id, team_name, team_leader, company_id, created_at, modified_at, archived){
        this.id = id
        this.team_name = team_name
        this.team_leader = team_leader
        this.company_id = company_id
        this.created_at = created_at
        this.modified_at = modified_at
        this.archived = archived
    }

    get getId(){
        return this.id
    }

    get getTeamName() {
        return this.team_name
    }

    get getTeamLeader() {
        return this.team_leader
    }

    get getCompanyId(){
        return this.company_id
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

module.exports = Team