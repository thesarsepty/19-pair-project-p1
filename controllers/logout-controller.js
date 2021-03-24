const express = require('express')

class Logout {
  static logout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }
}

module.exports = Logout