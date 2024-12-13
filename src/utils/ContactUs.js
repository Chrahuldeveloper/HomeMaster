import { db } from "../Firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

class ContactFunc {
  async saveData(data, userID) {
    try {
      const userDocRef = doc(db, "USERS", userID);
      await updateDoc(userDocRef, {
        contactusers: arrayUnion(data),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default ContactFunc;
