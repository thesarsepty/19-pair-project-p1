'use strict';
let component = require('../datasets/komponen.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    component.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Components', component, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Components', null, {})
  }
};