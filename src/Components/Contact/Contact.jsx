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
    <section
      id="contact"
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20 bg-[#02010A]"
    >
      {/* ----------------Section start---------------- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#E0F1FF]">CONTACT</h2>
        <div className="w-36 h-1 bg-[#0077B6] mx-auto mt-4"></div>
        <p className="text-[#ADE8F4] mt-4 text-lg font-semibold">
          Have a question or opportunity? I'd love to hear from you!
        </p>
      </div>

      {/* -----------------form start-------------------- */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-transparent border border-[#0077B6] text-[#E0F1FF] rounded-md focus:border-[#48CAE4] outline-none"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-transparent border border-[#0077B6] text-[#E0F1FF] rounded-md focus:border-[#48CAE4] outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 bg-transparent border border-[#0077B6] text-[#E0F1FF] rounded-md focus:border-[#48CAE4] outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full p-3 bg-transparent border border-[#0077B6] text-[#E0F1FF] rounded-md focus:border-[#48CAE4] outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-[#0077B6] text-black font-semibold p-3 rounded-md hover:bg-[#48CAE4] transition-all duration-300"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-[#48CAE4] text-center">{status}</p>
      )}
    </section>
  );
};

export default Contact;