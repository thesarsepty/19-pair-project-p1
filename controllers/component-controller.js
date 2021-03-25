const express = require('express')
const {
  Component
} = require('../models')

class ComponentController {
  static addPage(req, res) {
    if (req.session.isAdmin) {
      res.render('add-component')
    } else {
      res.send('Anda bukan admin')
    }
  }

  static add(req, res) {
    let data = req.body.komponen.toUpperCase()
    let obj = {
      komponen: data
    }
    Component.create(obj)
      .then(() => res.redirect('/'))
      .catch(err => res.send(err))
  }

  static deletePage(req, res) {
    if (req.session.isAdmin) {
      Component.findAll()
        .then(data => res.render('delete-component', {
          data
        }))
        .catch(err => res.send(err))
    } else {
      res.send('Anda bukan admin')
    }
  }

  static delete(req, res) {
    Component.destroy({
        where: {
          id: +req.params.id
        }
      })
      .then(() => res.redirect('/'))
      .catch(err => res.send(err))
  }
}

module.exports = ComponentController