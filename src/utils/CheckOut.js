import EmailJS from "../emailjs/Email";

const email = new EmailJS();

class CheckOUT {
  async SendEmail( UserEmail, Message) {
    try {
      await email.sendLoginEmail( UserEmail, Message);
    } catch (error) {
      console.log(error);
    }
  }

  async getLocation() {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

export default CheckOUT;
