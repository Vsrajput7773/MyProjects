//Third party email APi
import nodemailer from 'nodemailer';

const sendMail=(email,password)=>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yuvigurjar121pc@gmail.com',
          pass:'caiyqnvuvzuzckkc'
        }
    });

    var mailOptions ={
        from : 'yuvigurjar121pc@gmail.com',
        to: email,
        subject:"Verification Mail E-Commerce.com",
        html:"<h1>Welcome to E-Commerce.com</h1><p>you have successfully register to our site , your login credentails are attached below</p> <h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h1>Click on the link below to verify your account</h1> http://localhost:3000/verifyuser/"+email
    };

    transporter.sendMail(mailOptions, function (error, info){
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: '+ info.response);
        }
    });
}

export default sendMail;