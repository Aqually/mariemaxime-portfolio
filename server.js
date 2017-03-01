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

app.post('/contact', function(req, res) {

    console.log(req.body);
    var data = req.body;
    console.log(data);
    smtpTransport.sendMail({
        from: "Sender Name <sender@gmail.com>",
        to: "Receiver Name <reciver@gmail.com>",
        subject: "Confirmation Mail",
        text: "Messege From "
    }, function(error, response) { //callback
        if (error) {
            console.log(error);
        } else {
            console.log(" Message sent");
        }
        smtpTransport.close(); // shut down the connection pool, no more messages. Comment this line out to continue sending emails.
    });
    res.json(data);
});

app.listen(port);
