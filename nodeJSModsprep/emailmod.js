const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
   service:'gmail',
    auth:{
        user:'hushock@gmail.com',
        pass:'xxxx'
    }
})

const mailOptions={
    from:"hushock@gmail.com",
    to:"hushock@gmail.com",
    subject:"test nodejs",
    text:"this is a test email for nodemailer"
}

transporter.sendMail(mailOptions,(err,data)=>{
    err?console.log("error"):console.log("email sent")
})
