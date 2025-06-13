import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-9 w-full bg-gray text-white text-wrap">
      <section className="my-3  text-center">
        <h1 className="text-3xl ">
          PARTNER WITH <b className=" font-thin ">WECONETDATA</b>{" "}
        </h1>
        <p> We will contact you promptly</p>
      </section>
      <section className=" w-3/5 max-md:w-full max-md:px-5 ">
        <form
          action="https://formsubmit.co/contact@weconetdata.com"
          method="POST"
        >
          <input
            type="text"
            className="w-full mb-3  bg-gray-400/80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="full name"
          />
          <input
            type="email"
            className="w-full mb-3  bg-gray-400/80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="email address"
          />
          <PhoneInput
            country={"us"} // Default country (use 'ng' for Nigeria, 'gb' for UK, etc.)
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              color: "black",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              paddingLeft: "48px", // so flag & code don't overlap input
            }}
            buttonStyle={{
              border: "none",
              background: "black",
            }}
            containerStyle={{ width: "100%" }}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
          />
          <button
            type="submit"
            className="bg-primary text-white px-5 py-1.5 mt-3 hover:opacity-85 cursor-pointer"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
