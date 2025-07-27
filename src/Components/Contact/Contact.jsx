import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_ubxpk8j",
        "template_3cd2mls", 
        form.current,
        "8jYkaCYGLE9L-LBfs"
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
    setStatus("Failed to send. " + error.text);
        }
      );
  };

  return (
    <section id="contact" 
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20"
    >
      {/* ----------------Section start---------------- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-36 h-1 bg-[#00FFFF] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          Have a question or opportunity? I'd love to hear from you!
        </p>
      </div>

      {/* -----------------form start-------------------- */}
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-[#00ffff] outline-none"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-[#00ffff] outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-[#00ffff] outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full p-3 bg-transparent border border-gray-600 text-white rounded-md focus:border-[#00ffff] outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-[#00ffff] text-black font-semibold p-3 rounded-md hover:bg-[#00cccc] transition-all duration-300"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-[#00ffff] text-center">{status}</p>}
    </section>
  );
};

export default Contact;
