const express = require('express')
const {
  Profile,
  Component,
  ComponentProfile
} = require('../models')

class ProfileController {
  static profilePage(req, res) {
    res.render('profile')
  }
}

module.exports = ProfileController