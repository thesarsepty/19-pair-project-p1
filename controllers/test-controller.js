const express = require('express')

class MBTI {
  static testPage(req, res) {
    res.render('test-personality-page')
  }
}

module.exports = MBTI