const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const port = 4000;
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello from Server");
});
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "ansarisadaf666@gmail.com", // generated ethereal user
      pass: "sadafansari@1" // generated ethereal password
    }
  });

  let message = {
    }
app.post("/email", async (req, res) => {

  try {
    let info = await transporter.sendMail({
      from: "ansarisadaf666@gmail.com", // sender address
      to: "sadafbytewrap@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      attachments: [
        {   
            // filename: 'text1.txt',
            path: '/home/sadaf/Documents/mongoose.pdf'
        }]
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send({message:"Email Sent"})
  } catch (error) {
    console.log("in catch", error.message);
    res.status(400).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("server start");
});
