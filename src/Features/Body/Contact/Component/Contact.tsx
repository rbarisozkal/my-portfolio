import React, { RefObject, useRef } from "react";
import ContactSC from "./ContactSC";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef({}) as React.RefObject<any>;
  let error = false;
  let regexError=false;
  const sendEmail = (e: any) => {
    e.preventDefault();
    let emailInput = (document.getElementById("email") as HTMLInputElement)
      .value;
    let nameInput = (document.getElementById("name") as HTMLInputElement).value;
    let messageInput = (document.getElementById("message") as HTMLInputElement)
      .value;

      let areInputsEmpty = emailInput.trim().length <= 0 || messageInput.trim().length <= 0 || nameInput.trim().length <= 0
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      const isRegexValid = emailRegex.test(emailInput)
    if (areInputsEmpty) error = true;
    if (!isRegexValid) regexError = true

      console.log("it works!");
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
    
    
  };
  return (
    <ContactSC>
      <form ref={form} onSubmit={sendEmail}>
        
        <input type="text" name="name" id="name" placeholder="Name"  />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          
        />

        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Message"></textarea>
        {!error ?
          <p>One or more fields are empty. You may want to check your inputs</p>
         : (
          null
        )}
        <button type="submit" value="Send Message" className="primary-button">
          <span>Send Message</span>
        </button>
      </form>
    </ContactSC>
  );
};

export default Contact;
