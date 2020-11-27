import React from 'react';
import './styles.scss';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <header className="text-center">
              <h2>Contact</h2>
              <p>Like my work? please let me know.</p>
            </header>
            <form action="" method="POST">
              <div className="form-group">
                <label htmlFor="name-input">Name</label>
                <input className="form-control" type="text" name="name" id="name-input" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea className="form-control" name="message" id="message-input" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark py-2 px-3 rounded-0 font-weight-bold">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
