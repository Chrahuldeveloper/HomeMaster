import { db } from "../Firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

class ProductCart {
  async addToCart(userID, product) {
    try {
      const userDocRef = doc(db, "USERS", userID);
      await updateDoc(userDocRef, {
        products: arrayUnion(product),
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }

  async fetchProducts(userID) {
    try {
      const userDocRef = doc(db, "USERS", userID);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return data.products || [];
      } else {
        console.log("No such document!");
        return [];
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
}

export default ProductCart;
