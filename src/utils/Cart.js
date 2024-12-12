import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

class ProductCart {
  async addToCart(userID, product) {
    try {
      const userDocRef = doc(db, "USERS", userID);
      await setDoc(userDocRef, { product });
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductCart;
