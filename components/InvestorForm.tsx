"use client";

import { useState } from "react";


export default function InvestorForm() {

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");



  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    setLoading(true);

    setStatus("");



    const form = e.currentTarget;


    const formData = new FormData(form);



    const data = {

      name:
        formData.get("name"),

      email:
        formData.get("email"),

      company:
        formData.get("company"),

      subject:
        formData.get("subject"),

      message:
        formData.get("message"),

    };



    try {


      const response = await fetch(
        "/api/contact",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },


          body:
            JSON.stringify(data),

        }
      );



      const text =
        await response.text();



      let result;



      try {

        result =
          JSON.parse(text);

      }

      catch {

        console.error(
          "SERVER RESPONSE:",
          text
        );


        throw new Error(
          "Server returned invalid response"
        );

      }




      if (!response.ok) {

        throw new Error(
          result.error ||
          "Failed to send message"
        );

      }



      setStatus(
        "Thank you. Your inquiry has been sent successfully."
      );


      form.reset();



    }

    catch(error:any) {


      console.error(
        error
      );


      setStatus(
        error.message ||
        "Unable to send message"
      );


    }

    finally {

      setLoading(false);

    }

  }





  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >


      <input

        name="name"

        required

        placeholder="Full Name"

        className="
        w-full
        rounded-lg
        bg-black/40
        border
        border-yellow-500/20
        px-4
        py-3
        text-white
        outline-none
        focus:border-yellow-500
        "

      />



      <input

        name="email"

        type="email"

        required

        placeholder="Email Address"

        className="
        w-full
        rounded-lg
        bg-black/40
        border
        border-yellow-500/20
        px-4
        py-3
        text-white
        outline-none
        focus:border-yellow-500
        "

      />



      <input

        name="company"

        placeholder="Company / Organization"

        className="
        w-full
        rounded-lg
        bg-black/40
        border
        border-yellow-500/20
        px-4
        py-3
        text-white
        outline-none
        focus:border-yellow-500
        "

      />



      <input

        name="subject"

        required

        placeholder="Subject"

        className="
        w-full
        rounded-lg
        bg-black/40
        border
        border-yellow-500/20
        px-4
        py-3
        text-white
        outline-none
        focus:border-yellow-500
        "

      />



      <textarea

        name="message"

        required

        rows={5}

        placeholder="Your Message"

        className="
        w-full
        rounded-lg
        bg-black/40
        border
        border-yellow-500/20
        px-4
        py-3
        text-white
        outline-none
        focus:border-yellow-500
        "

      />



      <button

        type="submit"

        disabled={loading}

        className="
        w-full
        rounded-lg
        bg-yellow-500
        px-6
        py-4
        font-semibold
        text-black
        hover:bg-yellow-400
        transition
        disabled:opacity-50
        "

      >

        {loading
          ? "Sending..."
          : "Send Inquiry"
        }


      </button>




      {status && (

        <p
          className="
          text-sm
          text-yellow-400
          mt-4
          "
        >

          {status}

        </p>

      )}


    </form>

  );

}