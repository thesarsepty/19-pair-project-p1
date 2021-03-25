const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pairproject123@gmail.com',
    pass: 'p4irpr0ject@123'
  }
});

let mailOptions = {
  from: 'pairproject123@gmail.com',
  to: 'emailtujuan@gmail.com',
  subject: 'Sending Email using Nodejs',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log('Email sent: ' + info.response);
});