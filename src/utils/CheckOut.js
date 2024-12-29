import EmailJS from "../emailjs/Email";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

const email = new EmailJS();

class CheckOUT {
  async SendEmail(UserEmail, Message, userId) {
    try {
      await email.sendLoginEmail(UserEmail, Message);
      const userDocRef = doc(db, "USERS", userId);
      await updateDoc(userDocRef, {
        UserEmail: UserEmail,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getLocation(userId) {
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

      const userDocRef = doc(db, "USERS", userId);
      await updateDoc(userDocRef, {
        latitude: latitude,
        longitude: longitude,
        address: data.display_name,
      });

      return { latitude, longitude, address: data.display_name };
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  }

  async fetchdetails(userID) {
    const userDocRef = doc(db, "USERS", userID);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const address = docSnap.data().address;
      const email = docSnap.data().UserEmail;
      return {
        address,
        email,
      };
    }
  }
}

export default CheckOUT;
