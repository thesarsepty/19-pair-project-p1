const express = require('express')
const {
  Profile
} = require('../models')

class Register {
  static registerPage(req, res) {
    res.render('register-page')
  }

  static registerData(req, res) {
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    Profile.create(data)
      .then(() => res.redirect('/login'))
      .catch(err => res.send(err))
  }
}

module.exports = Register