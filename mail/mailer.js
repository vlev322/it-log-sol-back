"use strict";
require('dotenv').config();
const nodemailer = require("nodemailer");
const { template } = require("./templates");
// async..await is not allowed in global scope, must use a wrapper
async function main(data) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.HOST_PORT,
    secure: process.env.SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
    logger: true,
  });

  transporter.sendMail(template(data), (error, _info) => {
    if (error) {
      console.log("Error occurred");
      console.log(error.message);
      return process.exit(1);
    }
    console.log("Message sent successfully!");
    transporter.close();
  });
}
exports.main = main;
