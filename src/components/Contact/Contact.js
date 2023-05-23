import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css';





const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


const Contact = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };


  const handleSubmit = (values) => {
    const details = {
      "name": name,
      "comapny": company,
      "email": email,
      "budget": budget,
      "message": message
    }
    console.log(details)

    if (details) {
      window.location.reload(true);

    }
  };




  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [budget, setBudget] = useState("")
  const [message, setMessage] = useState("")

  const [alert, setAlert] = useState(false)




  return (
    <div className='body-con'>
      <div className="con-container">
        <div className="top-nav">
          <h4>
            Reach out for insightful conversation and reliable assistance. Get in touch with a versatile AI assistant for prompt answers and engaging interaction. I'm excited to hear from you!
          </h4>
        </div>
        <div className="marquee">
          <span>
            contact me / contact me / contact me / contact me / contact me /
            contact me / contact me / contact me / contact me / contact me
          </span>
        </div>
        <div className="contact-section">
          <div className="contact-details col">
            <p>
              Let's unlock together the next <br />
              level of possibilities! <br />
              Reach out.
            </p>

            <div className="social-media item">
              <h3>Social Media</h3>
              <span><a href="">TWITTER</a> — <a href="">INSTAGRAM</a> — <a href="">GITHUB</a> — <a href="">TWITCH</a></span>
            </div>

            <div className="contact-info">
              <div className="email item">
                <h3>Get in touch</h3>
                <h4 className='email-con'>asferali8384@gmail.com</h4>
              </div>
              <div className="address item">
                <h3>location</h3>
                <span>Chennai,TN - India</span>
              </div>
            </div>
          </div>
          <div className="contact-form col">
            <div className="wrapper">
              <div className="row">
                <input
                  onChange={((e) => setName(e.target.value))}
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={((e) => setCompany(e.target.value))}
                  type="text"
                  placeholder="Company" />
              </div>
              <div className="row">
                <input
                  onChange={((e) => setEmail(e.target.value))}
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={((e) => setBudget(e.target.value))}
                  type="text"
                  placeholder="Budget"
                />
              </div>
              <div className="row">
                <textarea
                  type="text"
                  placeholder="Message"
                  rows="5"
                  id="message"
                  onChange={((e) => setMessage(e.target.value))}
                ></textarea>
              </div>
              <div className="row submit">
                <a className='sub-btn' onClick={handleSubmit}>Submit</a>
                <div className="send-icon">
                  <ion-icon name="arrow-forward-sharp"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;
