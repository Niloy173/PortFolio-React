import React from 'react'

import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

// css files
import './contact.css'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {

  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60znhnj', 'template_qe9v3yt', formRef.current, 'tOgdsvzE_VoEqjDa3')
      .then((result) => {
        
        console.log(result.text);
        // console.log(formRef.current['name'].value)
        formRef.current.reset();
        // e.target.reset();
        alertMessage('success')

      }, (error) => {
          
          console.log(error.text);
          alertMessage('error')
      });
  };

  const alertMessage = (msg) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <strong>Email Notification</strong>,
      html: <i>{msg === 'success'? 'Email Sent': 'Error Occured'}</i>,
      icon: msg === 'success'? 'success': 'error'
    })
  }

  return (
   
    <section  id="contact">
    
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
    
      <div className="contact_options">

        <article className='contact_option'>
        
          <MdOutlineEmail className='contact_option_icon'/>
          <h4>Email</h4>
          <h5>niloysaha173@gmail.com</h5>
          <a target={"_blank"} rel="noreferrer" href='mailto:niloysaha173@gmail.com'>Send a message</a>
        
        </article>

        
        <article className='contact_option'>
        
          <RiMessengerLine className='contact_option_icon' />
          <h4>Messenger</h4>
          <h5>Niloy Saha</h5>
          <a target={"_blank"} rel="noreferrer" href='https://m.me/profile.php?id=100007341856783'>Send a message</a>
        
        </article>


        
        <article className='contact_option'>
        
          <BsWhatsapp className='contact_option_icon' />
          <h4>WhatsApp</h4>
          <h5>+8801681184315</h5>
          <a target={"_blank"} rel="noreferrer" href='https://wa.me/8801681184315'>Send a message</a>
        
        </article>
      
      </div>

      <form onSubmit={sendEmail} ref={formRef}>
      
        <input type={"text"} name="name" placeholder='Your Full Name' required />
        <input type={"text"} name="email" placeholder='Your Email' required />
        <textarea name='message' rows={7} placeholder="Your Message" required />
        <button  type='submit' className='btn btn-primary'>Send Message</button>
      
      </form>



    
    </div>

   

    
    </section>
  )
}

export default Contact;