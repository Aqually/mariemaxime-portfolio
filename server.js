const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')


// parse application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/dist", "index.html"));
})


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

    }
});

function mailOptions(nom, email, message){
    let msg = {
        from: nom + '<' + email + '>', // sender address
        to: 'mariemaximetanguay@gmail.com', // list of receivers
        subject: nom + ' a envoyé un message de MarieMaxime.me ✔', // Subject line
        text: message, // plain text body
        html: '<p>' + message + '</p> <p>email: ' + email + ' </p> <p>nom: ' + nom + ' </p>' // html body
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
