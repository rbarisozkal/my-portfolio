import React, { useRef } from 'react';
import ContactSC from './ContactSC';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef() as React.MutableRefObject<any>;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_5rtuzy9', 'template_x4ekcw5', form.current, '_3AlCXhxng5At7Na0').then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
  };
  return (
    <ContactSC>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </ContactSC>
  );
};

export default Contact;
