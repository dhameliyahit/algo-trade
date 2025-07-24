const express = require('express');
const bodyParser = require('body-parser');
const emailRoute = require("./Route/emailRoute.js")
const cors = require("cors")
const connectdb = require("./DB/connectdb.js")
const unlinkUserRoute = require("./Route/unlinkUserRoute.js")
const dotenv = require("dotenv")
const imgRoute = require("./Route/imgRoute.js")

dotenv.config()
const app = express();
const port = 8000;

connectdb(process.env.DB_URL)
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/auth",emailRoute)
app.use("/user",unlinkUserRoute)
app.use("/profile",imgRoute)
// Configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook'
//   auth: {
//     user: 'heetdhameliya59@gmail.com',
//     pass: 'gvsaggsbhbsouwql'
//   }
// });
// app.get("/",(req,res)=>{
//     res.end("<h1>mail send</h1>")
// })
// Endpoint to send email
// app.post('/send-email', (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     from: 'heetdhameliya59@gmail.com',
//     to: to,
//     subject: subject,
//     text: text
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

app.get("/",async(req,res)=>{
  try {
      res.status(200).json({
        message:"fine All right"
      })
  } catch (error) {
    console.log(`Error ${error.message}`);
    return res.status(500).json({
      message:"Error while / route"
    })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
