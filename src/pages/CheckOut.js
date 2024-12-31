import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Footer, Navbar, TermsConditions } from "../components";
import { RxCross2 } from "react-icons/rx";
import { BsCashStack } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { MdMyLocation } from "react-icons/md";
import CheckOUT from "../utils/CheckOut";
import useAuth from "../hooks/CheckUser";
import Loader from "../components/Loader";
import ProductCart from "../utils/Cart";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../Firebase";

export default function CheckOut() {
  const checkout = useMemo(() => new CheckOUT(), []);

  const { user, loading } = useAuth();

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (method) => {
    setSelectedPayment(selectedPayment === method ? null : method);
  };

  const [toggle, settoggle] = useState(false);

  const data = useLocation();

  const [Email, setEmail] = useState();

  const [toggleaddress, settoggleaddress] = useState(false);

  const [address, setaddress] = useState();

  const [EnteredOTP, setEnteredOTP] = useState();

  const [genOTP, setgenOTP] = useState();

  const [otpsent, setotpsent] = useState();

  const [toogleemail, settoogleemail] = useState(false);

  const [toogleterms, settoogleterms] = useState(false);

  function generateOTP() {
    let otp = "";
    const characters = "0123456789";
    for (let i = 0; i < 5; i++) {
      otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
  }

  const SendEmail = async () => {
    try {
      const OTP = generateOTP();
      setgenOTP(OTP);
      await checkout.SendEmail(Email, OTP, user.uid);
      setotpsent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const Verify = () => {
    if (genOTP === EnteredOTP) {
      alert("Verifed");
    } else {
      alert("Not Verifed");
    }
  };

  // const oncaptachaVerify = () => {
  //   if (window.recaptchaVerifier) return;

  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     auth,
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: () => {
  //         console.log("recaptcha resolved..");
  //       },
  //     },
  //     auth
  //   );
  // };

  // const onSignInSubmit = () => {
  //   try {
  //     oncaptachaVerify();
  //     const appVerifier = window.recaptchaVerifier;
  //     const phoneformat = `+91 8317-680-338`;
  //     signInWithPhoneNumber(auth, phoneformat, appVerifier)
  //       .then((confirmationResult) => {
  //         window.confirmationResult = confirmationResult;
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getlocation = async () => {
    try {
      await checkout.getLocation(user.uid);
    } catch (error) {
      console.log(error);
    }
  };

  const products = useMemo(() => new ProductCart(), []);

  const getdetails = useCallback(async () => {
    try {
      const data = await checkout.fetchdetails(user.uid);
      setaddress(data.address);
      setEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  }, [checkout, user?.uid]);

  useEffect(() => {
    getdetails();
  }, [getdetails]);

  const [count, setcount] = useState(0);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;
    const fetchCartProducts = async () => {
      try {
        const data = await products.fetchProducts(user.uid);
        console.log(data);
        setcount(data.length);
        setisloading(false);
      } catch (error) {
        console.error(error);
        setisloading(false);
      }
    };
    fetchCartProducts();
  }, [products, user?.uid]);

  return (
    <>
      {loading ? <Loader /> : ""}
      {isloading ? <Loader /> : <Navbar explore={false} newcount={count} />}
      <div className="flex flex-col justify-center gap-8 p-5 my-14 md:flex-row lg:justify-evenly md:gap-0">
        {data.state.updatedcount}
        <div className="border-[1px] border-gray-300 md:w-[60vw] lg:w-[30vw] rounded-lg shadow-sm">
          <div className="flex gap-4 p-5 border-b-[1px] border-gray-300 cursor-pointer">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="font-bold">Send booking details to</h1>
              {Email?.length === undefined ? (
                <button
                  onClick={() => {
                    settoogleemail(true);
                  }}
                  className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer"
                >
                  +Add
                </button>
              ) : (
                <h1 className="text-sm ">{Email}</h1>
              )}
            </div>
          </div>
          <div className="flex gap-4 p-5 border-b-[1px] border-gray-300 cursor-pointer">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="font-bold">Address</h1>
              {address === undefined ? (
                <button
                  onClick={() => {
                    settoggleaddress(true);
                  }}
                  className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer"
                >
                  +Add
                </button>
              ) : (
                <h1 className="text-sm ">{address}</h1>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 cursor-pointer">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278185297-2bf0c3.jpeg"
              alt=""
            />
            <div
              className="space-y-2"
              onClick={() => {
                settoggle(true);
              }}
            >
              <h1 className="font-bold">Payment Method</h1>
              {selectedPayment === null ? (
                <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full px-36 mx-auto py-2.5 mt-4 text-center cursor-pointer">
                  +Add
                </button>
              ) : (
                <h1 className="text-sm">{selectedPayment}</h1>
              )}
            </div>
          </div>
        </div>

        <div className="border-[1px] border-gray-300 md:w-[60vw] lg:w-[30vw] p-6 rounded-lg shadow-sm">
          <h1 className="mt-5 text-lg font-bold">Payment summary</h1>

          <div className="flex justify-between mt-5">
            <h1>Item Price</h1>
            <p>{data.state.Price}</p>
          </div>
          <div className="flex justify-between mt-5">
            <h1>Additional Cost</h1>
            <p>0</p>
          </div>

          <div className="flex justify-between mt-8">
            <h1 className="font-semibold">Total</h1>
            <p>{Number(data.state.Price) + 0}</p>
          </div>

          <div>
            <button className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4">
              {selectedPayment === "Cash" ? "Book" : "Pay"}
            </button>
          </div>
          <div className="mt-5">
            <h1
              onClick={() => {
                settoogleterms(true);
              }}
              className="text-sm font-semibold text-center cursor-pointer"
            >
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
      <Footer />

      {toogleterms ? <TermsConditions settoogleterms={settoogleterms} /> : null}

      {toggle ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
            <div className="flex justify-end translate-x-4 -translate-y-16">
              <RxCross2
                size={18}
                color="black"
                className="w-8 h-8 p-1 bg-white rounded-full"
                cursor={"pointer"}
                onClick={() => {
                  settoggle(false);
                }}
              />
            </div>
            <h1 className="text-lg font-semibold -mt-7 ">
              Select Payment Method
            </h1>
            <div className="border-b-[1px] border-gray-300 mt-3"></div>
            <div className="flex justify-between ">
              <div
                className="flex items-center gap-4 my-5 cursor-pointer"
                onClick={() => handlePaymentSelection("Cash")}
              >
                <BsCashStack size={20} color="black" />
                <h1 className="text-sm ">Cash On Delivery</h1>
              </div>
              <input
                type="radio"
                checked={selectedPayment === "Cash"}
                readOnly
                onClick={() => handlePaymentSelection("Cash")}
                className="accent-violet-500"
              />
            </div>
            <div className="flex justify-between ">
              <div
                className="flex items-center gap-4 my-5 cursor-pointer"
                onClick={() => handlePaymentSelection("Online")}
              >
                <IoIosPhonePortrait size={20} color="black" />
                <h1 className="text-sm ">Online Payment</h1>
              </div>
              <input
                type="radio"
                checked={selectedPayment === "Online"}
                readOnly
                onClick={() => handlePaymentSelection("Online")}
                className="accent-violet-500"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {toggleaddress ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
            <div className="flex justify-end translate-x-4 -translate-y-16">
              <RxCross2
                size={18}
                color="black"
                className="w-8 h-8 p-1 bg-white rounded-full"
                cursor={"pointer"}
                onClick={() => {
                  settoggleaddress(false);
                }}
              />
            </div>
            <h1 className="text-lg font-semibold -mt-7">Enter Your Address</h1>
            <div>
              <button
                onClick={getlocation}
                className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4 flex items-center gap-3  justify-center"
              >
                <MdMyLocation size={24} color={"white"} />
                <h1>Use Location</h1>
              </button>
            </div>
            <p className="mt-3 text-xs font-semibold text-center text-gray-500">
              Powered By HomeMaster
            </p>
          </div>
        </div>
      ) : null}

      {toogleemail ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
            <div id="recaptcha-container"></div>
            <div className="flex justify-end translate-x-4 -translate-y-16">
              <RxCross2
                size={18}
                color="black"
                className="w-8 h-8 p-1 bg-white rounded-full"
                cursor={"pointer"}
                onClick={() => {
                  settoogleemail(false);
                }}
              />
            </div>
            <h1 className="text-lg font-semibold -mt-7">Enter Your Email</h1>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="outline-none border-[1px] px-3 py-2 w-full border-gray-300 rounded-lg mt-3"
              />
            </div>
            <button
              onClick={SendEmail}
              className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4"
            >
              Send OTP
            </button>
            {otpsent ? (
              <>
                <h1 className="mt-3.5 text-lg font-semibold ">Enter OTP</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Enter 5 digit OTP"
                    value={EnteredOTP}
                    onChange={(e) => {
                      setEnteredOTP(e.target.value);
                    }}
                    className="outline-none border-[1px] px-3 py-2 w-full border-gray-300 rounded-lg mt-3"
                  />
                </div>
              </>
            ) : null}

            {EnteredOTP?.length === 5 ? (
              <button
                onClick={Verify}
                className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full mx-auto py-2.5 mt-4"
              >
                Verify OTP
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
