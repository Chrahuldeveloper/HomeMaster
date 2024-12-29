import EmailJS from "../emailjs/Email";

const email = new EmailJS();

class CheckOUT {
  async SendEmail(UserEmail, Message) {
    try {
      await email.sendLoginEmail(UserEmail, Message);
    } catch (error) {
      console.log(error);
    }
  }

  async getLocation() {
    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser.");
      }

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch location data from Nominatim.");
      }

      const data = await response.json();
      console.log("User's address:", data.display_name);

      return { address: data.display_name };
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  }
}

export default CheckOUT;
