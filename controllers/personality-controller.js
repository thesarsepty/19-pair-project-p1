const express = require('express')

class Personality {
  static showAll(req, res) {
    res.render('explanation-page')
  }

  static enfj(req, res) {
    res.render('./personalities/enfj')
  }

  static enfp(req, res) {
    res.render('./personalities/enfp')
  }

  static entj(req, res) {
    res.render('./personalities/entj')
  }

  static entp(req, res) {
    res.render('./personalities/entp')
  }

  static esfj(req, res) {
    res.render('./personalities/esfj')
  }

  static esfp(req, res) {
    res.render('./personalities/esfp')
  }

  static estj(req, res) {
    res.render('./personalities/estj')
  }

  static estp(req, res) {
    res.render('./personalities/estp')
  }

  static infj(req, res) {
    res.render('./personalities/infj')
  }

  static infp(req, res) {
    res.render('./personalities/infp')
  }

  static intj(req, res) {
    res.render('./personalities/intj')
  }

  static intp(req, res) {
    res.render('./personalities/intp')
  }

  static isfj(req, res) {
    res.render('./personalities/isfj')
  }

  static isfp(req, res) {
    res.render('./personalities/isfp')
  }

  static istj(req, res) {
    res.render('./personalities/istj')
  }

  static istp(req, res) {
    res.render('./personalities/istp')
  }
}

module.exports = Personality