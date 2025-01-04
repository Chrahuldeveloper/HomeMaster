import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function Privacy({ settogglePrivacy }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="bg-white w-[89vw] md:w-[60vw] lg:w-[40vw] xl:w-[50vw] p-5 rounded-xl h-[75vh] overflow-y-scroll">
        <div className="flex justify-end translate-x-4">
          <RxCross2
            size={18}
            color="black"
            className="w-8 h-8 p-1 bg-white rounded-full"
            cursor={"pointer"}
            onClick={() => {
              settogglePrivacy(false);
            }}
          />
        </div>

        <div className="p-4 -mt-10">
          <h1 className="mb-4 text-lg font-semibold">Privacy Policy</h1>
          <p className="text-sm leading-relaxed">
            Welcome to Homemaster’s Privacy Policy (“Privacy Policy” or
            “Policy”).
            <br />
            <br />
            Homemaster Technologies Private Limited and its affiliates
            (collectively, “Homemaster,” “we,” or “us”) are engaged in providing
            web-based solutions to connect customers seeking home services with
            skilled service professionals. This Policy outlines our practices
            regarding the collection, storage, usage, processing, and disclosure
            of personal data that you consent to share with us when you access,
            use, or interact with our website,
            **[https://jaladseva.com/](https://jaladseva.com/)**, or the
            Homemaster mobile application (collectively, “Platform”), or avail
            products or services offered by Homemaster (collectively, the
            “Services”). Services offered by service professionals through the
            Platform are referred to as “Professional Services.”
            <br />
            <br />
            At Homemaster, we are committed to safeguarding your personal data
            and respecting your privacy. To provide access to our Services and
            Professional Services, we collect and process certain data about
            you. This Policy explains how we collect, use, and manage your
            personal data.
            <br />
            <br />
            By using the Services, you confirm that you have read and agreed to
            this Policy and consent to the processing activities described
            herein.
            <br />
            <br />
          </p>

          <h2 className="mt-6 font-semibold text-md">
            1. Personal Data We Collect
          </h2>
          <p className="text-sm leading-relaxed">
            We collect various types of personal data, including but not limited
            to:
            <ul className="mt-2 ml-5 list-disc">
              <li>
                Contact Data: Name, phone number, email address, mailing
                address, and location.
              </li>
              <li>
                Identity and Profile Data: Name, profile picture, gender, and
                account details.
              </li>
              <li>
                Technical Data: IP address, browser type, device ID, operating
                system, access times, page views, and usage data.
              </li>
              <li>
                Transaction Data: Payment details (e.g., partial card numbers,
                UPI IDs) and transaction history.
              </li>
              <li>
                Usage Data: Booking history, preferences, interactions with the
                Platform, and session details.
              </li>
              <li>
                Marketing Data: Communication preferences, feedback, survey
                responses, and promotional interactions.
              </li>
            </ul>
          </p>

          <h2 className="mt-6 font-semibold text-md">
            2. How We Use Your Personal Data
          </h2>
          <p className="text-sm leading-relaxed">
            We use your data to:
            <ul className="mt-2 ml-5 list-disc">
              <li>Verify your identity and register your account.</li>
              <li>Provide the Services and Professional Services.</li>
              <li>Process payments and track transactions.</li>
              <li>
                Communicate updates, promotions, or service-related
                notifications.
              </li>
              <li>Enhance the Platform’s functionality and user experience.</li>
              <li>
                Ensure compliance with legal obligations and resolve disputes.
              </li>
            </ul>
          </p>

          <h2 className="mt-6 font-semibold text-md">3. Your Rights</h2>
          <p className="text-sm leading-relaxed">
            You have the right to:
            <ul className="mt-2 ml-5 list-disc">
              <li>
                Access and update your personal data by contacting us at
                jaladseva@gmail.com.
              </li>
              <li>
                Opt-out of marketing communications by following the
                instructions in our emails or contacting us.
              </li>
            </ul>
          </p>

          <p className="mt-4 text-sm leading-relaxed">
            For the full details of our Privacy Policy, visit our{" "}
            <a href="https://jaladseva.com/" className="text-blue-600">
              website
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
