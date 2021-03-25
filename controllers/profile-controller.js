const express = require('express')
const {
  Profile,
  Component,
  ComponentProfile
} = require('../models')

class ProfileController {
  static profilePage(req, res) {
    Profile.findByPk(+req.session.dataId, {
        include: Component
      })
      .then(data => {
        res.render('profile', {
          data
        })
      })
      .catch(err => res.send(err))
  }
}

module.exports = ProfileController