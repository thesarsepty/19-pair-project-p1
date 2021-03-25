const nodemailer = require('nodemailer');

function sendMail(name, mbtiResult, email) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pairproject123@gmail.com',
      pass: 'p4irpr0ject@123'
    }
  });

  let mailOptions = {
    from: 'pairproject123@gmail.com',
    to: email,
    subject: 'Sending Email using Nodejs',
    text: `Halo ${name}! Hasil tes MBTI kamu adalah ${mbtiResult}`
  };

  return transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
  });
}

module.exports = sendMail