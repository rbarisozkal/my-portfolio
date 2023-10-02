import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { toast } from "react-toastify";
function Form() {
  const form = useRef();
  const toastContainer = useRef(null);
  const [isToastVisible, setToastVisible] = useState(false);
  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4000);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9x281mg",
        "template_x4ekcw5",
        form.current,
        "_3AlCXhxng5At7Na0"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            showToast();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="You can send message for various reasons. Either a job offer or a project or just a hello. I will try to reply as soon as possible."
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={sendEmail}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
      {isToastVisible && (
        <div
          id="toast-simple"
          className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 toast-enter"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="pl-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
