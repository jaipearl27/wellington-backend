import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PWD,
  },
});

// Inquiry mail

export const sendMail = async (userData, img) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Inquiry</title>
    <style>
        body {
            background-color: #ffffff;
            color: #000000;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: 'Oswald', sans-serif;
        }
    
        .container {
            width: 650px;
            border: 5px solid #000000;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 15px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        td {
            padding: 10px;
            color: #000000;
        }
        .bd {
            border-bottom: 3px solid #ffffff;
        }
        .total {
            font-size: 24px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #000000;
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="header"></div>
        <table>
            <tr>
                <td><strong>Name:</strong></td>
                <td>${userData.name}</td>
            </tr>
            <tr>
                <td><strong>E-Mail:</strong></td>
                <td>${userData.email}</td>
            </tr>
            <tr>
                <td><strong>Your Image:</strong></td>
                <td>${img[0].url}</td>
            </tr>
        </table>
    </div>
</body>
</html>`;

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.MAIL_ID, // sender address
    to: userData.email, // list of receivers
    subject: "Wellington Sign Image Generated", // Subject line
    html: htmlContent, // html body
  });

};

