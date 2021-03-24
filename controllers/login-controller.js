const express = require('express')
const {
  Profile
} = require('../models')
const BcryptPassword = require('../helpers/hash-password')

class Login {
  static loginPage(req, res) {
    res.render('login-page')
  }

  static loginCheck(req, res) {

    Profile.findOne({
        where: {
          email: req.body.email,
        }
      })
      .then((data) => {
        let password = BcryptPassword.checkHash(req.body.password, data.password)
        if (password) {
          res.send('sukses')
        } else {
          res.redirect('/login')
        }
      })
      .catch(err => res.send(err))
  }
}

module.exports = Login