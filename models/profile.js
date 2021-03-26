'use strict';
const {
  Model
} = require('sequelize');
const BcryptPassword = require('../helpers/hash-password')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

    getIE(string) {
      let id = 0
      string[0] === 'I' ? id = 1 : id = 2
      return id
    }
    getSN(string) {
      let id = 0
      string[1] === 'S' ? id = 3 : id = 4
      return id
    }
    getTF(string) {
      let id = 0
      string[2] === 'T' ? id = 5 : id = 6
      return id
    }
    getPJ(string) {
      let id = 0
      string[3] === 'P' ? id = 7 : id = 8
      return id
    }

    static scoring(obj) {
      return new Promise((resolve, reject) => {
        let result = ''
        let E = 0
        let I = 0
        let S = 0
        let N = 0
        let T = 0
        let F = 0
        let P = 0
        let J = 0

        for (let key in obj) {
          if (key == 'q1' || key == 'q2' || key == 'q3' || key == 'q4' || key == 'q5' || key == 'q6' || key == 'q7' || key == 'q8' || key == 'q9' || key == 'q10' || key == 'q11') {
            if (obj[key] === 'a') {
              E++
            } else {
              I++
            }
          }
          if (key == 'q12' || key == 'q13' || key == 'q14' || key == 'q15' || key == 'q16' || key == 'q17' || key == 'q18' || key == 'q19' || key == 'q20' || key == 'q21' || key == 'q22') {
            if (obj[key] === 'a') {
              S++
            } else {
              N++
            }
          }
          if (key == 'q23' || key == 'q24' || key == 'q25' || key == 'q26' || key == 'q27' || key == 'q28' || key == 'q29' || key == 'q30' || key == 'q31' || key == 'q32' || key == 'q33') {
            if (obj[key] === 'a') {
              T++
            } else {
              F++
            }
          }
          if (key == 'q34' || key == 'q35' || key == 'q36' || key == 'q37' || key == 'q38' || key == 'q39' || key == 'q40' || key == 'q41' || key == 'q42' || key == 'q43' || key == 'q44') {
            if (obj[key] === 'a') {
              P++
            } else {
              J++
            }
          }
        }

        E / 11 * 100
        I / 11 * 100
        S / 11 * 100
        N / 11 * 100
        T / 11 * 100
        F / 11 * 100
        P / 11 * 100
        J / 11 * 100

        E > I ? result += 'E' : result += 'I'
        S > N ? result += 'S' : result += 'N'
        T > F ? result += 'T' : result += 'F'
        P > J ? result += 'P' : result += 'J'

        if (result) {
          resolve(result)
        } else {
          reject('Semua pertanyaan harus terisi!')
        }
      })
    }


    static associate(models) {
      // define association here
      Profile.belongsToMany(models.Component, {
        through: 'ComponentProfile'
      })
    }
  };
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Nama tidak boleh kosong!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email tidak boleh kosong!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password tidak boleh kosong!'
        }
      }
    },
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        if (instance.password === 'admin123') {
          instance.isAdmin = true
        } else {
          instance.isAdmin = false
        }
        instance.password = BcryptPassword.hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};