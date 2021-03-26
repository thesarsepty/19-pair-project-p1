const express = require('express')
const {
  Profile
} = require('../models')
const BcryptPassword = require('../helpers/hash-password')

class Login {
  static loginPage(req, res) {
    res.render('login-page')
  }

  static loginCheck(req, res, next) {
    Profile.findOne({
        where: {
          email: req.body.email,
        }
      })
      .then((data) => {
        let password = BcryptPassword.checkHash(req.body.password, data.password)
        if (password) {
          req.session.dataId = data.id
          req.session.dataName = data.name
          req.session.dataEmail = data.email
          req.session.isAdmin = data.isAdmin
          req.session.isLogin = true
          res.redirect('/')
        } else {
          res.redirect('/login')
        }
      })
      .catch(err => res.send(err))
        
  }
}

module.exports = Login