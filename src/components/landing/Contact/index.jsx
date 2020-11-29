import React, { useRef, useState, useEffect } from 'react';
import './styles.scss';

function Contact() {
  let url = 'https://api.sendinblue.com/v3/smtp/email';
  let name = useRef(''),
    email = useRef(''),
    message = useRef(''),
    subject = useRef('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      sender: {
        name: name.current.value,
        email: email.current.value,
      },
      subject: subject.current.value,
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
    const res = await fetch(url, options)
    console.log(await res.json());
    setIsLoading(false);
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <header className="text-center">
              <h2>Contact</h2>
              <p>Like my work? please let me know.</p>
            </header>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name-input">Name</label>
                <input
                  className="form-control"
                  disabled={isLoading}
                  id="name-input"
                  ref={name}
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject-input">Subject</label>
                <input
                  className="form-control"
                  disabled={isLoading}
                  id="subject-input"
                  ref={subject}
                  required
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input
                  aria-describedby="emailHelp"
                  className="form-control"
                  disabled={isLoading}
                  id="email-input"
                  ref={email}
                  required
                  type="email"
                />
                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea
                  className="form-control"
                  disabled={isLoading}
                  id="message-input"
                  ref={message}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark py-2 px-3 rounded-0 font-weight-bold">
                { isLoading ? 'Sending ...' : 'SEND MESSAGE' }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
