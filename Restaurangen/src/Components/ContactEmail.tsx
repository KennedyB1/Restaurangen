
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './styled/formContact.css'

export const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
   //ID kopplad till Emailjs-konto

    const serviceID = 'service_i5xww1e';
    const templateID = 'template_ln6bgli';
    //Public key
    const accountKey = 'WuAyGMJjxK86sHJtq'


    const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      emailjs.send(serviceID, templateID, templateParams, accountKey)
      .then((response) => {
        console.log('E-posten har skickats:', response);
        setIsEmailSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('E-post error:', error);
      });
  
  };

  return (
    <form onSubmit={sendEmail} className='contactForm'>
  <span>Kontaktformulär</span>
  <label>Namn: <br />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </label>
  
  <label>E-post:<br />
    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  
  <label>Meddelande:<br />
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
  </label>
  
  <input type="submit" value="Send" />
  {isEmailSent && <span>Meddelandet har skickats!</span>}
</form>

  );
};