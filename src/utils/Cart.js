import { db } from "../Firebase";
import { doc, getDoc, setDoc} from "firebase/firestore";

class Cart {
  async addToCart(userID, product) {
    try {

        const userDocRef = doc(db, "USERS", userID);
        await setDoc(userDocRef, { product });
  


    } catch (error) {
      console.log(error);
    }
  }
}

export default Cart;
