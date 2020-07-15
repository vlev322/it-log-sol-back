const fs = require("fs");

// Message object
let message = ({ name, email, phone, region, nda, file, details }) => {
  return {
    // Comma separated list of recipients
    to: "vlev322@gmail.com, vlev322@ukr.net",
    from: "vlev322@ukr.net",
    // Subject of the message
    subject: "Contact us form logic.it.solution.com ",
    // HTML body
    html: `<!DOCTYPE html>
            <html>
              <head>
                <meta content='text/html; charset=UTF-8' http-equiv='Content-Type' />
              </head>
              <body>
                <h1>Mail send from ${name} </h1>
                <p>Email: ${email} </p>
                <p>Phone: ${phone} </p>
                <p>Region:  ${region} </p>
                <p>Details:  ${details} </p>
                ${nda ? "<p>Nda: I would like to receive an NDA </p>" : ""}
              </body>
            </html>`,

    // An array of attachments
    attachments: file
      ? [
          {
            filename: file.name,
            content: fs.createReadStream(file.path),
          },
        ]
      : [],
  };
};

exports.template = message;
