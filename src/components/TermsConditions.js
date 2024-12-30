import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function TermsConditions({ settoogleterms }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
        <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-xl h-[75vh] overflow-y-scroll">
          <div className="flex justify-end translate-x-4 ">
            <RxCross2
              size={18}
              color="black"
              className="w-8 h-8 p-1 bg-white rounded-full"
              cursor={"pointer"}
              onClick={() => {
                settoogleterms(false);
              }}
            />
          </div>
          <div className="p-4 -mt-10">
            <div>
              <h1 className="text-lg font-semibold">Terms and Conditions</h1>
              <ul className="mt-3 space-y-3">
                <li className="list-disc">
                  The content of the pages of this website is subject to change
                  without notice.
                </li>
                <li className="list-disc">
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </li>
                <li className="list-disc">
                  Your use of any information or materials on our website and/or
                  product pages is entirely at your own risk, for which we shall
                  not be liable. It shall be your own responsibility to ensure
                  that any products, services or information available through
                  our website and/or product pages meet your specific
                  requirements.
                </li>
                <li className="list-disc">
                  Our website contains material which is owned by or licensed to
                  us. This material includes, but are not limited to, the
                  design, layout, look, appearance and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these terms and conditions.
                </li>
                <li className="list-disc">
                  All trademarks reproduced in our website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </li>
                <li className="list-disc">
                  Unauthorized use of information provided by us shall give rise
                  to a claim for damages and/or be a criminal offense.
                </li>
                <li className="list-disc">
                  From time to time our website may also include links to other
                  websites. These links are provided for your convenience to
                  provide further information.
                </li>
                <li className="list-disc">
                  You may not create a link to our website from another website
                  or document without SACHIN VILAS KADAM’s prior written
                  consent.
                </li>
                <li className="list-disc">
                  Any dispute arising out of use of our website and/or purchase
                  with us and/or any engagement with us is subject to the laws
                  of India .
                </li>
                <li className="list-disc">
                  We, shall be under no liability whatsoever in respect of any
                  loss or damage arising directly or indirectly out of the
                  decline of authorization for any Transaction, on Account of
                  the Cardholder having exceeded the preset limit mutually
                  agreed by us with our acquiring bank from time to time
                </li>
              </ul>

              <div className="mt-5">
                <h1 className="text-lg font-semibold">
                  Cancellation and Refund
                </h1>
                <ul className="mt-3">
                  <li className="list-disc">
                    No cancellations & Refunds are entertained
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <h1 className="text-lg font-semibold">
                  Shipping and Delivery{" "}
                </h1>
                <ul className="mt-3">
                  <li className="list-disc">
                    For International buyers, orders are shipped and delivered
                    through registered international courier companies and/or
                    International speed post only. For domestic buyers, orders
                    are shipped through registered domestic courier companies
                    and /or speed post only. Orders are shipped within 0-7 days
                    or as per the delivery date agreed at the time of order
                    confirmation and delivering of the shipment subject to
                    Courier Company / post office norms. SACHIN VILAS KADAM is
                    not liable for any delay in delivery by the courier company
                    / postal authorities and only guarantees to hand over the
                    consignment to the courier company or postal authorities
                    within 0-7 days rom the date of the order and payment or as
                    per the delivery date agreed at the time of order
                    confirmation. Delivery of all orders will be to the address
                    provided by the buyer. Delivery of our services will be
                    confirmed on your mail ID as specified during registration.
                    For any issues in utilizing our services you may contact our
                    helpdesk on 9822667624 or{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
