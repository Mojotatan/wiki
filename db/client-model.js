const Sequelize = require('sequelize')

module.exports = db => db.define('Client', {
  name: {
    type: Sequelize.STRING
  },
  designer: {
    type: Sequelize.STRING
  },
  accountManager: {
    type: Sequelize.STRING
  },
  sshUrl: {
    type: Sequelize.STRING
  },
  sshPw: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.TEXT
  }
})