import { RazorpayOrderOptions } from "react-razorpay";

type PaymentProps = {
  amount: number;
  orderId: string;
};

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOrderOptions): RazorpayInstance;
    };
  }
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, callback: () => void) => void;
}

const initiatePayment = async ({ amount, orderId }: PaymentProps) => {
  const options: RazorpayOrderOptions = {
    key: "rzp_live_i2gDh0i5XmpOAi",
    amount: amount * 100,
    currency: "INR",
    name: "JaladSeva",
    description: "Home services at your doorstep",
    order_id: orderId,
    handler: async (response) => {
      try {
        console.log("Payment is successful", response);
      } catch (error) {
        console.error("Error processing payment:", error);
      }
    },
    prefill: {
      name: "Rahul",
      email: "chrahulofficial@gmail.com",
      contact: "8317680338",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

export default initiatePayment;
