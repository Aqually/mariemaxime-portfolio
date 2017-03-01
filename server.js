const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/dist", "index.html"));
})


// create reusable transporter object using the default SMTP transport
var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mariemaximeblog@gmail.com',
        pass: '@@allo123'
    }
});

let mailOptions = {
    from: '"Fred Foo 👻" <mariemaximetanguay@gmail.com>', // sender address
    to: 'mariemaximetanguay@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

app.post('/contact', function(req, res) {

    console.log(req.body);
    var data = req.body;
    console.log(data);
    smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

app.listen(port);
