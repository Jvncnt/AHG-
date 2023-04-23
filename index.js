const ServerlessClient = require('serverless-postgres');

const client = new ServerlessClient({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "vincent0621",
  port: 5432,
  debug: true,
  delayMs: 3000,
})

module.exports.getCompanies = async (event, context, callback) => 
{ 
  await client.connect()

  const {rows} = await client.query(`SELECT * FROM companies WHERE archived = false`)

  await client.clean();

  return {
    statusCode: 200,
    body: JSON.stringify({result: rows})
  }
}

module.exports.getCompaniesByID = async (event, context, callback) => 
{ 
  const {id} = event.pathParameters

  await client.connect()

  const {rows} = await client.query(`SELECT team_name FROM team WHERE archived = false AND id = ${id} `)

  await client.clean();

  return {
    statusCode: 200,
    body: JSON.stringify({result: rows})
  }
}

module.exports.createCompany = async (event, context, callback) =>
{
  const {company_name, company_address, year_founded, created_at, modified_at, archived} = JSON.parse(event.body)

  await client.connect()

  const {rows} = await client.query(`INSERT INTO companies (company_name, company_address, year_founded, created_at, modified_at, archived) VALUES ('${company_name}', '${company_address}', '${year_founded}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

  await client.clean()

  return{
    statusCode: 200
  }
}

module.exports.editCompanyDetails = async (event, context, callback) =>
{
  const {id} = event.pathParameters
  const {company_name, company_address, year_founded, modified_at, archived} = JSON.parse(event.body)

  await client.connect()

  const {rows} = await client.query(`UPDATE companies SET company_name = '${company_name}', company_address = '${company_address}', year_founded = '${year_founded}', modified_at = CURRENT_TIMESTAMP, archived = '${archived}' WHERE id = ${id}`)

  await client.clean()

  return{
    statusCode: 200
  }
}

module.exports.archivedCompanies = async (event, context, callback) =>
{
  const {id} = event.pathParameters

  await client.connect()

  const archive_company = client.query(`UPDATE companies SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = ${id}`)
  const select_company = await client.query(`SELECT company_name FROM companies WHERE id = ${id}`)
  const selected_company = select_company.rows[0].company_name
  const archive_team = await client.query(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = ${id}`)
  const archive_emp = await client.query(`UPDATE employee SET archived = TRUE, modified_at = CURRENT_TIMESTAMP WHERE id = ${id}`)

  await client.clean()

  return{
    statusCode: 200
  }
}

module.exports.getTeamByCompany = async (event, context, callback) =>
{
 const {id} = event.pathParameters
 
 await client.connect()
 
 const {rows} = await client.query(`SELECT team_name FROM team JOIN companies ON team.id = companies.id WHERE companies.id = ${id}`)

 await client.clean()

 return{
  statusCode: 200,
  body: JSON.stringify({result: rows})
 }

}

module.exports.getTeamByID = async (event, context, callback) =>
{
  const{id} = event.pathParameters

  await client.connect()

  const{rows} = await client.query(`SELECT team_name FROM team WHERE id = ${id}`)

  await client.clean()

  return{
    statusCode: 200,
    body: JSON.stringify({result: rows})
  }
}

module.exports.createTeamforSpecificCompanyID = async (event, context, callback) =>
{
  const {id} = event.pathParameters
  const {team_name, team_leader, company_id, created_at, modified_at, archived} = JSON.parse(event.body)

  await client.connect()

  const {rows} = await client.query(`INSERT INTO team (team_name, team_leader, company_id, created_at, modified_at, archived) VALUES ('${team_name}', '${team_leader}', ${company_id}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

  await client.clean()

  return{
    statusCode: 200
  }
}

module.exports.editTeamDetails = async (event, context, callback) =>
{
  const {id} = event.pathParameters
  const {team_name, team_leader, modified_at, archived} = JSON.parse(event.body)

  await client.connect()

  const {rows} = await client.query(`UPDATE team SET team_name = '${team_name}', team_leader = '${team_leader}', modified_at = CURRENT_TIMESTAMP, archived = '${archived}' WHERE id = ${id}`)

  await client.clean()

  return{
    statusCode: 200
  } 
}

module.exports.archiveTeam = async (event, context, callback) =>
{
  const {id} = event.pathParameters

  await client.connect()

  const archive_team = await client.query(`UPDATE team SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = ${id}`)
  const select_team = await client.query(`SELECT team_name FROM team WHERE id = ${id}`)
  const selected_team = select_team.rows[0].team_name
  const archive_emp = await client.query(`UPDATE employee SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = ${id}`)

  await client.clean()

  return{
    statusCode: 200
  }

}

module.exports.getAllEmployeeByCompany = async (event, context, callback) =>
{
  const {id} = event.pathParameters

  await client.connect()

  const employee = await client.query (`SELECT employee_name FROM employee WHERE team_id = (SELECT id FROM team WHERE company_id = ${id})`)

  await client.clean()

  return{
    statusCode: 200,
    body: JSON.stringify({result: employee})
  }
}

module.exports.getAllEmployeeByTeam = async (event, context, callback) =>
{
  const {team_name} = event.pathParameters

  await client.connect()

  const employee = await client.query (`SELECT employee_name FROM employee WHERE team_id = (SELECT id FROM team WHERE team_name = '${team_name}')` )

  await client.clean()

  return{
    statusCode: 200,
    body: JSON.stringify({result: employee})
  }
}

module.exports.getAllEmployeeByID = async (event, context, callback) =>
{
  const {id} = event.pathParameters

  await client.connect()

  const employee = await client.query (`SELECT employee_name FROM employee WHERE id = ${id}`)

  await client.clean()

  return{
    statusCode: 200,
    body: JSON.stringify({result: employee})
  }
}

module.exports.createEmployee = async (event, context, callback) =>
{
  const {employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, created_at, modified_at, archived} = JSON.parse(event.body)

  await client.connect()

  const {rows} = await client.query (`INSERT INTO employee(employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, created_at, modified_at, archived) VALUES ('${employee_name}', '${company_title}', ${year_hired}, '${birthdate}', ${salary}, '${image_url}', ${team_id}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, false)`)

  await client.clean()

  return{
    statusCode: 200
  }
}

module.exports.editEmployeeDetails = async (event, context, callback) =>
{
  const {id} = event.pathParameters
  const{employee_name, company_title, year_hired, birthdate, salary, image_url, team_id, modified_at, archived} = JSON.parse(event.body)

  await client.connect()

  const {rows} = await client.query (`UPDATE employee SET employee_name = '${employee_name}', company_title = '${company_title}', year_hired = ${year_hired}, birthdate = '${birthdate}', salary = ${salary}, image_url = '${image_url}', team_id = ${team_id}, modified_at = CURRENT_TIMESTAMP, archived = '${archived}' WHERE id = '${id}'`)

  await client.clean()

  return{
    statusCode: 200
  }

}

module.exports.archiveEmployee = async (event, context, callback) =>
{
  const {id} = event.pathParameters

  await client.connect()

  const archive_employee = await client.query(`UPDATE employee SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = '${id}'`)

  await client.clean()
  
  return{
    statusCode: 200
  }
}