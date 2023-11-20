import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {Snackbar} from '@mui/material';

import {Container, Wrapper, Title, Desc, ContactForm, ContactTitle, 
  ContactInput, ContactInputMessage, ContactButton} from './StyledComponents';




export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_xn0nd1d', 'template_d2c2gh8', form.current, 'HSAusG45DANhtDaje');
      setOpen(true);
      form.current.reset();
    } 
    catch(err) {
      console.log(err.text);
    }; 
  };

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Contact me if placeholder text!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder='Your Email' name='from_email' />
          <ContactInput placeholder='Your Name' name='from_name' />
          <ContactInput placeholder='Subject' name='subject' />
          <ContactInputMessage placeholder='Message' rows='4' name='message' />
          <ContactButton type='submit' value='Send' />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message='Email sent successfully!'
          severity='success'
          anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        />
      </Wrapper>
    </Container>
  );
};

