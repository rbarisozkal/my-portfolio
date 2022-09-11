import React, { RefObject, useRef, useState } from "react";
import ContactSC from "./ContactSC";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef({}) as React.RefObject<any>;
  const [error, setErrorState] = useState(false);
  const [regexError, setRegexErrorState] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    let emailInput = (document.getElementById("email") as HTMLInputElement)
      .value;
    let nameInput = (document.getElementById("name") as HTMLInputElement).value;
    let messageInput = (document.getElementById("message") as HTMLInputElement)
      .value;

    let areInputsEmpty =
      emailInput.trim().length <= 0 ||
      messageInput.trim().length <= 0 ||
      nameInput.trim().length <= 0;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isRegexValid = emailRegex.test(emailInput);
    if (areInputsEmpty) setErrorState(true);
    else setErrorState(false);
    if (!isRegexValid) setRegexErrorState(true);
    else setRegexErrorState(false);

    if (!areInputsEmpty || isRegexValid) {
      emailjs
        .sendForm(
          "service_5rtuzy9",
          "template_x4ekcw5",
          form.current,
          "_3AlCXhxng5At7Na0"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("name") as HTMLInputElement).value = "";
      (document.getElementById("subject") as HTMLInputElement).value = "";
      (document.getElementById("message") as HTMLInputElement).value = "";
    }
  };
  return (
    
    <ContactSC>
      <form ref={form}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />

        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Message"></textarea>

        <p className={error ? "error-text" : "valid-text"}>
          One or more fields are empty. You may want to check your inputs
        </p>
        <p className={regexError ? "error-text" : "valid-text"}>
          Not a valid email type.
        </p>
        <button type="submit" value="Send Message" className="primary-button">
          <span onClick={sendEmail}>Send Message</span>
        </button>
        
      </form>
    </ContactSC>
  );
};

export default Contact;
