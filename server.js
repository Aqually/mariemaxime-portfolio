const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/dist", "index.html"));
})

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mariemaximeblog@gmail.com',
        pass: '@@allo123'
    }
});

function mailOptions(nom, email, message){
    let msg = {
        from: nom + '<' + email + '>', // sender address
        to: 'mariemaximetanguay@gmail.com', // list of receivers
        subject: nom + ' a envoyé un message via MarieMaxime.me ✔', // Subject line
        text: message, // plain text body
        html: '<p>' + message + '</p> <p>email: ' + email + '</p>' // html body
    }
    return msg;
};

app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body.nom);
    transporter.sendMail(mailOptions(req.body.nom,req.body.email,req.body.message), (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.end("fin");
});

app.listen(port);
