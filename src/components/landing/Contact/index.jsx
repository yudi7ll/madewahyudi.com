import React, { useRef, useState } from 'react';
import { ContactIllustration } from 'components/svg';
import './styles.scss';

function ContactForm() {
  const name = useRef('');
  const email = useRef('');
  const message = useRef('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const body = {
        sender: {
          name: name.current.value,
          email: email.current.value,
        },
        subject: `New message from ${document.location.host}`,
        htmlContent: message.current.value,
        to: [
          {
            email: 'madewahyudi0@gmail.com',
            name: 'Yudi',
          },
        ],
      };

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error();
      }

      const result = await res.json();

      if (!result.success) {
        throw new Error();
      }

      alert('Your message has been sent.');
      e.target.reset();
    } catch (_) {
      alert('Failed to send your message. Try again later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <p className="contact__header">Like my work? please let me know.</p>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            className="form-control rounded-0"
            disabled={isLoading}
            id="name-input"
            placeholder="Full Name"
            ref={name}
            type="text"
            required
          />
        </div>
        <div className="mb-3">
          <input
            aria-describedby="emailHelp"
            className="form-control rounded-0"
            disabled={isLoading}
            id="email-input"
            placeholder="Email"
            ref={email}
            required
            type="email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control rounded-0"
            disabled={isLoading}
            id="message-input"
            placeholder="Say hi..."
            ref={message}
            required
            rows="5"
          />
        </div>
        <button type="submit" className="text__sm btn bg--purple text-white py-2 px-3 rounded-0 fw-bold rounded-0">
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
