const nodemailer = require('nodemailer');
const loginModel = require('../Model/loginModel.js');


//email send ocnfigraution

let deshEmail = ''

const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook'
    auth: {
      user: 'heetdhameliya59@gmail.com',
      pass: 'gvsaggsbhbsouwql'
    }
});

const authEmailController = async(req,res)=>{
    const {email} = req.body;
  
    var digits = '0123456789';
    let OTP=''
    for(let i=0;i<4;i++){
        OTP+=digits[Math.floor(Math.random() * 10)];
    }
    console.log("OTP Genrate successfully")
    console.log(OTP)

    const mailOptions = {
      from: 'heetdhameliya59@gmail.com',
      to: email,
      subject: "Algo-Trading | OTP varification",
      text: `Algo-trading email varification ${OTP} for varification`
    };
    deshEmail = email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(200).send({
            success:true,
            message:"Email send Failed",
            error
        });
      } else {
        // const loginInfo = loginModel.create({email})
        res.status(200).send({
            success:true,
            message:"Email send successfully",
            OTP
            // loginInfo,
        });
      }
    });
}

//profile details route
const getUserNameController =async(req,res)=>{
  try {
    const email = deshEmail;
    const rowName = email.replace(/[0-9]/g, '');
    const userName = rowName.split("@")[0]
  
    res.send({
      message:"profile name and email get",
      email,
      userName
    })
  } catch (error) {
    console.log(error)
    res.status("Error while getting profile details")
  }
}

module.exports = {
    authEmailController,
    getUserNameController
}