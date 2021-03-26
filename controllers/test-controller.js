const express = require('express')
const {
  Profile,
  ComponentProfile
} = require('../models')
const sendMail = require('../helpers/send-email.js')

class MBTI {
  static chooseTestType(req, res) {
    res.render('choose-test')
  }

  static firstTestPage(req, res) {
    ComponentProfile.findOne({
        where: {
          ProfileId: req.session.dataId
        }
      })
      .then((data) => {
        if (data) {
          res.send('udah pernah tes lu bos')
        } else {
          throw err
        }
      })
      .catch(err => res.render('test-personality-page'))

  }

  static firstTestResult(req, res) {
    let mbti = new Profile()
    let id1;
    let id2;
    let id3;
    let id4;

    Profile.scoring(req.body)
      .then((data) => {
        sendMail(req.session.dataName, data, req.session.dataEmail)
        id1 = mbti.getIE(data)
        id2 = mbti.getSN(data)
        id3 = mbti.getTF(data)
        id4 = mbti.getPJ(data)

        let obj = {
          ComponentId: id1,
          ProfileId: req.session.dataId
        }

        return ComponentProfile.create(obj)
      })
      .then(() => {
        let obj = {
          ComponentId: id2,
          ProfileId: req.session.dataId
        }

        return ComponentProfile.create(obj)
      })
      .then(() => {
        let obj = {
          ComponentId: id3,
          ProfileId: req.session.dataId
        }

        return ComponentProfile.create(obj)
      })
      .then(() => {
        let obj = {
          ComponentId: id4,
          ProfileId: req.session.dataId
        }

        return ComponentProfile.create(obj)
      })
      .then(() => res.redirect('/profile'))
      .catch(err => res.send(err))
  }

  static retestPage(req, res) {
    ComponentProfile.findOne({
        where: {
          ProfileId: req.session.dataId
        }
      })
      .then((data) => {
        if (data) {
          res.render('test-personality-page-retest')
        } else {
          throw err
        }
      })
      .catch(err => res.send('belom pernah test lu bos'))
  }

  static retestResult(req, res) {
    let mbti = new Profile()
    let id1;
    let id2;
    let id3;
    let id4;

    Profile.scoring(req.body)
      .then((data) => {
        sendMail(req.session.dataName, data, req.session.dataEmail)
        id1 = mbti.getIE(data)
        id2 = mbti.getSN(data)
        id3 = mbti.getTF(data)
        id4 = mbti.getPJ(data)
        let idComp = [1, 2]
        let obj = {
          ComponentId: id1,
          ProfileId: req.session.dataId
        }

        return ComponentProfile.update(obj, {
          where: {
            ProfileId: req.session.dataId,
            ComponentId: idComp
          }
        })
      })
      .then(() => {
        let obj = {
          ComponentId: id2,
          ProfileId: req.session.dataId
        }
        let idComp = [3, 4]
        return ComponentProfile.update(obj, {
          where: {
            ProfileId: req.session.dataId,
            ComponentId: idComp
          }
        })
      })
      .then(() => {
        let obj = {
          ComponentId: id3,
          ProfileId: req.session.dataId
        }
        let idComp = [5, 6]
        return ComponentProfile.update(obj, {
          where: {
            ProfileId: req.session.dataId,
            ComponentId: idComp
          }
        })
      })
      .then(() => {
        let obj = {
          ComponentId: id4,
          ProfileId: req.session.dataId
        }
        let idComp = [7, 8]
        return ComponentProfile.update(obj, {
          where: {
            ProfileId: req.session.dataId,
            ComponentId: idComp
          }
        })
      })
      .then(() => res.redirect('/profile'))
      .catch(err => res.send(err))
  }
}

module.exports = MBTI