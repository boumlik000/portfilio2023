import React, { useRef,useState  } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';
import "../styles/form.css"
import BtnBlue from './btn_blue';
function FormContact() {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    emailjs.sendForm(
      'service_vhw6j1c',
       'template_95d3gzo',
        form.current,
         'Cyto1GuESZZMVR7ay')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent succesfuly");
          form.current.reset();
          setShowSuccess(true);
          setShowError(false);
        }, (error) => {
          console.log(error.text);
          console.log("message mamchach");
          setShowSuccess(false);
          setShowError(true);
      });
  };

 
  return (
    <>

        
          <form ref={form} onSubmit={sendEmail}>
            {showError && (
              <Alert variant="danger">
                There was an error sending your message. Please try again later.
              </Alert>
            )}
            {showSuccess && (
              <Alert variant="success">
                Your message has been sent succewssfully.
              </Alert>
            )}
            
            <input type="text" name="user_name" required placeholder='Your Name'/>
            
            <input type="email" name="user_email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required placeholder='Your Email'/>
            
            <textarea name="message" required placeholder='How can I Help you?'  />
            <BtnBlue text="Send" onClick={sendEmail} />
          </form>
          
    </>
  );
}

export default FormContact;

