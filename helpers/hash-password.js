const bcrypt = require('bcryptjs');

class BcryptPassword {
  static hashPassword(password) { //generate hash password to DB
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
  }

  static checkHash(password, hash) { //check input password and load hash from DB
    let check = bcrypt.compareSync(password, hash)
    return check
  }
}

module.exports = BcryptPassword