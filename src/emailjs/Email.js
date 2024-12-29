import emailjs from "@emailjs/browser";
class EmailJS {
  async sendLoginEmail(userEmail, message) {
    try {
      await emailjs.send(
        "service_e0jwhmo",
        "template_jqe4nwi",
        {
          from_name: "HomeMaster",
          to_name: "HomeMaster",
          from_email: "jaladseva@gmail.com",
          to_email: userEmail,
          message: message,
        },
        "UOrD1_W9s2qaOe4rC"
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default EmailJS;
