const express = require('express')

class MBTI {
  static testPage(req, res) {
    res.render('test-personality-page')
  }

  static testResult(req, res) {
    console.log(req.body)
  }
}

module.exports = MBTI