const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
  	user: "email@hotmail.com",
  	pass: "senhaemail"
  },
  tls: { rejectUnauthorized: false }
});

const mailOptions = {
  from: 'emailFrom@hotmail.com',
  to: 'emailPara@hotmail.com',
  subject: 'E-mail enviado usando Node!',
  text: 'Bem fácil, não? ;)'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});