import React, { useEffect, useMemo, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import ProductCart from "../utils/Cart";
import useAuth from "../hooks/CheckUser";
import Loader from "../components/Loader";
export default function Cart() {
  const navigate = useNavigate();

  const products = useMemo(() => new ProductCart(), []);

  const { user, loading } = useAuth();

  const [Products, setProducts] = useState([]);

  const [Loading, setLoading] = useState(false);

  console.log(loading);


  useEffect(() => {
    if (!user?.uid) return;
    const fetchCartProducts = async () => {
      try {
        setLoading(true);
        const data = await products.fetchProducts(user.uid);
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartProducts();
  }, [products, user?.uid]);

  const handleRemove = (id) => {
    products.deleteItem(user.uid, id);
    setProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== id)
    );
  };

  const handleCheckout = (i, id) => {
    products.deleteItem(user.uid, id);
    setProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== id)
    );

    navigate("/checkout", {
      state: {
        Price: i.Price,
        Name: i.Name,
      },
    });
  };

  return (
    <div className="">
      {Loading ? <Loader /> : null}
      <div className="px-8 mt-4 lg:px-96">
        <Link to="/">
          <FaArrowLeftLong size={25} className="cursor-pointer" />
        </Link>
      </div>
      {Products.length > 0 ? (
        <div className="lg:w-[30vw] mx-auto my-6 p-6 lg:p-0">
          <div className="flex flex-col items-center justify-center -mt-7">
            <div>
              <img
                className="max-w-xs mx-auto md:max-w-md"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1683529632526-fb310a.jpeg"
                alt=""
              />
            </div>

            {Products.map((i, id) => {
              return (
                <React.Fragment key={id}>
                  <>
                    <div className="flex w-full gap-5 p-5 mt-4 cursor-pointer">
                      <div>
                        <img
                          src={i.img}
                          alt=""
                          className="duration-500 ease-in-out rounded-lg w-36 hover:brightness-75"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-lg font-semibold">{i.Name}</h1>
                        <p className="text-gray-500">
                          1 service •{" "}
                          <span className="font-semibold ">{i.Price}</span>
                        </p>
                        <p className="text-xs font-semibold text-gray-500">
                          • {i.Name} x 1
                        </p>
                      </div>
                    </div>
                    <div className="border-[0.1px] border-dashed border-gray-200 w-full"></div>

                    <div className="flex items-center w-full gap-3">
                      <div
                        to={"/"}
                        onClick={() => handleRemove(id)}
                        className="border-black border-[1px] text-sm rounded-lg text-black font-semibold w-full mx-auto py-2 mt-4 text-center"
                      >
                        <button>Remove</button>
                      </div>
                      <div
                        onClick={() => handleCheckout(i, id)}
                        className=" bg-[#6e42e5] ease-in-out duration-300 border-violet-500 border-[1px] text-sm rounded-lg text-white font-semibold w-full  mx-auto py-2.5 mt-4 text-center cursor-pointer  "
                      >
                        <button>CheckOut</button>
                      </div>
                    </div>
                  </>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-48">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 128 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.5 34a.5.5 0 01-.5.5h-2.5V30a.5.5 0 011 0v3.5H77a.5.5 0 01.5.5z"
                fill="#FFD47F"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M79.5 34a.5.5 0 01-.5.5h-2.5V30a.5.5 0 011 0v3.5H79a.5.5 0 01.5.5z"
                fill="#FFD47F"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73 69a1 1 0 011 1v1H61a1 1 0 00-1 1v7h-2v-7a3 3 0 013-3h12zm3 2h9a1 1 0 011 1v7h2v-7a3 3 0 00-3-3h-9.17c.11.313.17.65.17 1v1z"
                fill="#E2E2E2"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60 60v10h-2V60h2z"
                fill="#E2E2E2"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M72 72a1 1 0 00-1-1H47a1 1 0 00-1 1v7h-2v-7a3 3 0 013-3h24a3 3 0 013 3v7h-2v-7z"
                fill="#E2E2E2"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M74 70v9h-2v-9h2z"
                fill="#E2E2E2"
              ></path>
              <path
                d="M50 79a5 5 0 11-10 0 5 5 0 0110 0zM64 79a5 5 0 11-10 0 5 5 0 0110 0zM78 79a5 5 0 11-10 0 5 5 0 0110 0zM92 79a5 5 0 11-10 0 5 5 0 0110 0z"
                fill="#757575"
              ></path>
              <path
                d="M48 79a3 3 0 11-6 0 3 3 0 016 0zM62 79a3 3 0 11-6 0 3 3 0 016 0zM76 79a3 3 0 11-6 0 3 3 0 016 0zM90 79a3 3 0 11-6 0 3 3 0 016 0z"
                fill="#EEE"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M74 60v10h-2V60h2z"
                fill="#E2E2E2"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.832 25.445l8 12-1.664 1.11-8-12 1.664-1.11zm16 0l8 12-1.664 1.11-8-12 1.664-1.11z"
                fill="#CBCBCB"
              ></path>
              <path
                d="M44 34h52l-5.694 30.369A2 2 0 0188.34 66H53.32a4 4 0 01-3.932-3.263L44 34z"
                fill="#CBCBCB"
              ></path>
              <path
                d="M34 34h48l-6 32H41.66a2 2 0 01-1.966-1.631L34 34z"
                fill="#E2E2E2"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46 40h-2v7.059h2V40zm0 12.941h-2V60h2v-7.059zM50 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059zM56 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059zM62 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059zM68 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059z"
                fill="#fff"
              ></path>
              <path d="M24 24h28v4H24v-4z" fill="#97674E"></path>
              <path
                d="M78 20h6v4a6 6 0 01-6 6V20zM78 15a3 3 0 116 0v5h-6v-5zM78 30V18L66 30h12z"
                fill="#997BED"
              ></path>
              <path d="M88 16l-4-1v2l4-1z" fill="#FFD47F"></path>
              <path d="M81 15a1 1 0 112 0 1 1 0 01-2 0z" fill="#0F0F0F"></path>
              <path d="M72 30h-6l12-12v6a6 6 0 01-6 6z" fill="#6E42E5"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-lg font-semibold">Your cart is empty</h1>
            <p className="text-sm text-gray-600">Lets add some services</p>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="border-violet-500 border-[1px] rounded-lg text-violet-500 font-semibold text-sm  mx-auto py-2 mt-4 w-48"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
