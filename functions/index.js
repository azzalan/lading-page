const functions = require('firebase-functions')
// import { nodemailer } from 'nodemailer'
const nodemailer = require('nodemailer')

exports.sendTestEmail = functions.database.ref('messages/{id}').onWrite(event => {
  const value = event.data.val()
    // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'azzlandingpage@gmail.com',
      pass: 'azz031189'
    }
  })
  const mailOptions = {
    from: '"Minha lading page" <azzlandingpage@gmail.com>', // sender address
    to: 'azz_alan@hotmail.com', // list of receivers
    subject: value.subject, // Subject line
    text: 'Nome: ' + value.name + '\n' + value.message // plain text body
    // html: '<p>Nome: ' + value.name + '</p>' + value.message // html body
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
  })
  return value
})
// [END onWrite]

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
