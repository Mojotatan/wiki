const Sequelize = require('sequelize')
let dbUrl = 'postgres://localhost:5432/wiki'

let db = new Sequelize(dbUrl, {logging: false})

const models = [

]

models.forEach(model => {
  model(db)
})

// associations?

module.exports = {db}