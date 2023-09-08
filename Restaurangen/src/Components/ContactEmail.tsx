
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './styled/formContact.css'
import { H2centered } from './style/Title';
import { Form, Input, Textarea } from './style/Form';
import { LightPSmall } from './style/P';
import { ButtonYellow } from './style/Buttons';

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
    <Form onSubmit={sendEmail} className='contactForm'>
  <H2centered>Kontaktformulär</H2centered>
  
    <Input type="text" placeholder="Namn" value={name} onChange={(e) => setName(e.target.value)} />
  
  
  
    <Input type="email" placeholder="E-post" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
    <LightPSmall>Meddelande:</LightPSmall>
    
    <Textarea value={message}  onChange={(e) => setMessage(e.target.value)} />
  
  
  <ButtonYellow type="submit" value="Send">Skicka</ButtonYellow>
  {isEmailSent && <span>Meddelandet har skickats!</span>}
</Form>

  );
};