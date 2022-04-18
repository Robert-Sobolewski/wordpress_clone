
import express from 'express';
import nodemailer from 'nodemailer'

const confirmRouter = express.Router();

confirmRouter.post('/', async(req:express.Request, res: express.Response)=>{

    // get body`
    console.log('cofirmRouter =',req.body)
    let testAccount = await nodemailer.createTestAccount();
    // send email ... with link to confirm
    let transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,//'smtp.ethereal.email',//service: 'gmail',// 'gmail', //host: "smtp.live.com",
        port: testAccount.smtp.port,//587,465- not ssl
        secure: testAccount.smtp.secure,
        auth:{
            user: testAccount.user,
            pass: testAccount.pass 
        },
        tls: {
          rejectUnauthorized: false
        }
    })
    console.log(`ta: user= ${testAccount.user}, pass= ${testAccount.pass}\n
    host= ${testAccount.smtp.host}, port= ${testAccount.smtp.port}, secure= ${testAccount.smtp.secure}`)
    let mail = {
        from: req.body.From,
        to: req.body.to,
        subject: req.body.subject,
        text:req.body.message,
    }
  await  transporter.sendMail(mail,function(err: any,info: any) {
        if(err){
            console.log(err)
        }else{
            console.log('Email sent successfully, '+info.response)
        }
    })

    // save results in db


})





export default confirmRouter;