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

  async deleteItem(userId, itemId) {
    try {
      const userDocRef = doc(db, "USERS", userId);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const updatedProducts = data.products.filter(
          (product, i) => i !== itemId
        );

        await updateDoc(userDocRef, {
          products: updatedProducts,
        });

        console.log("Item deleted successfully.");
      } else {
        console.log("No such document!");
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductCart;
