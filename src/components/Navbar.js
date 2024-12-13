import React, { useEffect, useMemo, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import ModelLogin from "./ModelLogin";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../src/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaRegCompass } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/CheckUser";
import ProductCart from "../utils/Cart";
import Loader from "./Loader";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

export default function Navbar({ showmenu, setshowmenu, explore, page }) {
  const notify = () => toast.success("Login Successfully!");
  const notify1 = () => toast.success("Logout Successfully!");
  const products = useMemo(() => new ProductCart(), []);

  const { user, loading } = useAuth();

  const [Loading, setLoading] = useState(false);

  const [count, setcount] = useState();

  useEffect(() => {
    if (!user?.uid) return;
    const fetchCartProducts = async () => {
      try {
        setLoading(true);
        const data = await products.fetchProducts(user.uid);
        console.log(data);
        setcount(data.length);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartProducts();
  }, [products, user?.uid]);

  const [istoggle, setistoggle] = useState(false);

  const [logintoggle, setlogintoggle] = useState(false);

  const [logouttoggle, setlogouttoggle] = useState(false);

  console.log(loading);

  const logout = async () => {
    try {
      await signOut(auth);
      notify1();
      setlogouttoggle(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      {Loading ? <Loader /> : null}
      <nav className="border-b-[1px] border-gray-300 p-4">
        <div className="flex items-center justify-between gap-5 px-6 md:justify-around">
          <div className="flex items-center gap-8">
            <div>
              <img src={logo} alt="" className="w-20 h-20 " />
            </div>
            <ul className="text-[#545454] text-sm  md:flex items-center gap-6 hidden ">
              <li
                className={`cursor-pointer  ${
                  page === "About" ? "text-violet-500  font-semibold" : null
                } `}
              >
                <Link to={"/about"}>About</Link>
              </li>
              <li
                className={`cursor-pointer  ${
                  page === "contact" ? "text-violet-500  font-semibold" : null
                } `}
              >
                <Link to={"/contact"}>Contact</Link>
              </li>
              {explore ? <li className="cursor-pointer ">Explore</li> : null}
            </ul>
            <div className="flex items-center gap-2">
              <IoLocationOutline size={23} color="gray" />
              <p className="text-sm text-[#545454]">Pune</p>
            </div>
          </div>
          <div className="lg:hidden">
            <CiMenuFries
              onClick={() => {
                setshowmenu(true);
              }}
              size={23}
              color="black"
              className="cursor-pointer"
            />
          </div>
          <div className="items-center hidden gap-5 lg:flex">
            <Link to="/cart">
              {count && user ? (
                <div className="absolute flex items-center justify-center w-4 h-4 p-3 text-center text-white translate-x-3 bg-red-500 rounded-full top-7">
                  <h1 className="text-[11px]">{count}</h1>
                </div>
              ) : null}
              <MdOutlineShoppingCart
                size={25}
                color="black"
                cursor={"pointer"}
              />
            </Link>
            <CgProfile
              onClick={() => {
                setistoggle(!istoggle);
              }}
              size={25}
              color="black"
              cursor={"pointer"}
            />
          </div>
        </div>
        {istoggle ? (
          <div className="absolute z-10 hidden w-48 mt-2 bg-white rounded-md shadow-lg lg:block right-44 ring-1 top-20 ring-black ring-opacity-5">
            <div className="flex justify-end p-2">
              <RxCross2
                size={23}
                color="black"
                className="bg-white rounded-full cursor-pointer "
                cursor={"pointer"}
                onClick={() => {
                  setistoggle(false);
                }}
              />
            </div>

            {user ? (
              <button
                onClick={() => {
                  setlogouttoggle(true);
                }}
                className="block w-full px-4 py-2 mb-5 -mt-3 text-sm font-semibold text-left text-gray-700 hover:bg-violet-100"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setlogintoggle(true);
                }}
                className="block w-full px-4 py-2 mb-5 -mt-3 text-sm font-semibold text-left text-gray-700 hover:bg-violet-100"
              >
                Login
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </nav>
      {showmenu ? (
        <aside className="fixed inset-0 z-50 h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="text-[#545454] text-sm w-[68vw] h-screen fixed top-0 bg-white  border-r-[1px] border-gray-300">
            <div className="flex justify-end mt-5 px-7">
              <RxCross2
                size={33}
                color="black"
                className="p-1 bg-white rounded-full cursor-pointer w-7 h-7"
                cursor={"pointer"}
                onClick={() => {
                  setshowmenu(false);
                }}
              />
            </div>
            <div className="flex flex-col pl-8">
              <img src={logo} alt="" className="w-20 h-20 " />
            </div>
            <ul className="pl-8 space-y-10 font-semibold text-center mt-7">
              {explore ? (
                <li className="flex items-center justify-between gap-6 cursor-pointer w-28">
                  <FaRegCompass size={23} color="black" />
                  <h1>Explore</h1>
                </li>
              ) : null}
              <li>
                <Link
                  to={"/cart"}
                  className="flex items-center justify-between gap-6 cursor-pointer w-28"
                >
                  <MdOutlineShoppingCart size={23} color="black" />
                  <h1>Your Cart</h1>
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-between gap-6 rsor-pointer mx w-28"
                >
                  <FcAbout size={25} color="black" />
                  <h1>About</h1>
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="flex items-center justify-between gap-6 cursor-pointer w-28"
                >
                  <CiPhone size={23} color="black" />
                  <h1>Contact</h1>
                </Link>
              </li>
              {user ? (
                <li
                  onClick={() => {
                    setlogouttoggle(true);
                  }}
                  className="flex items-center justify-between gap-6 cursor-pointer w-28"
                >
                  <CgProfile size={23} color="black" />
                  <h1>Logout</h1>
                </li>
              ) : (
                <li
                  onClick={() => {
                    setlogintoggle(true);
                  }}
                  className="flex items-center justify-between gap-6 cursor-pointer w-28"
                >
                  <CgProfile size={23} color="black" />
                  <h1>Login</h1>
                </li>
              )}
            </ul>
            <footer className="flex items-center justify-center">
              <div className="fixed bottom-4">
                <div className="">
                  <h1 className="text-sm text-center">All Rights Reserved</h1>
                </div>
              </div>
            </footer>
          </div>
        </aside>
      ) : null}
      {logintoggle ? (
        <ModelLogin setlogintoggle={setlogintoggle} notify={notify} />
      ) : null}

      {logouttoggle ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl">
            <div className="flex justify-end translate-x-4 -translate-y-16">
              <RxCross2
                size={18}
                color="black"
                className="w-8 h-8 p-1 bg-white rounded-full"
                cursor={"pointer"}
                onClick={() => {
                  setlogouttoggle(false);
                }}
              />
            </div>
            <div className="-mt-6">
              <h1 className="text-xl font-semibold">Logout Account</h1>
              <div className="border-b-[1px] w-full border-gray-300 mt-4"></div>
              <div className="my-5">
                <button
                  onClick={logout}
                  className="flex items-center justify-center w-full gap-3 py-3 font-semibold text-center text-white rounded-md bg-[#6e42e5]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
