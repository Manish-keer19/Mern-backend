import nodemailer from "nodemailer";
export const sendEmail = async (docs) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      // port: 587,
      // secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: "manish keer👻", // sender address
      to: docs.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<p>your image is saved succefully in cloudinary </p>
        <h1>click to view <a href="${docs.imageUrl}">veiw image</a></h1>`,
    });
    return info;
  } catch (error) {
    console.log("could not send the email");
    console.log("error", error.message);
  }
};
