import React, { useRef, useState, useEffect } from 'react';
import { ContactIllustration } from 'components/svg';
import './styles.scss';

function ContactForm() {
  let url = 'https://api.sendinblue.com/v3/smtp/email';
  let name = useRef(''),
    email = useRef(''),
    message = useRef('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      sender: {
        name: name.current.value,
        email: email.current.value,
      },
      subject: 'New message from ' + document.location.host,
      htmlContent: message.current.value,
      to: [
        {
          email: "madewahyudi0@gmail.com",
          name: "Yudi"
        }
      ],
    };

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify(body),
    };

    e.target.reset();
    await fetch(url, options)
    alert('Your message has been sent!');
    setIsLoading(false);
  }

  return (
    <>
      <header className="text-center">
        <h2>Contact</h2>
        <p>Like my work? please let me know.</p>
      </header>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name-input">Full Name</label>
          <input
            className="form-control rounded-0"
            disabled={isLoading}
            id="name-input"
            placeholder="Real Name"
            ref={name}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email address</label>
          <input
            aria-describedby="emailHelp"
            className="form-control rounded-0"
            disabled={isLoading}
            id="email-input"
            placeholder="Your Email"
            ref={email}
            required
            type="email"
          />
          <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="message-input">Message</label>
          <textarea
            className="form-control rounded-0"
            disabled={isLoading}
            id="message-input"
            placeholder="Say hi..."
            ref={message}
            required
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark py-2 px-3 rounded-0 font-weight-bold rounded-0">
          { isLoading ? 'Sending ...' : 'SEND MESSAGE' }
        </button>
      </form>
    </>
  );
}

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <ContactForm />
          </div>
          <div className="col-lg-7">
            <ContactIllustration className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
