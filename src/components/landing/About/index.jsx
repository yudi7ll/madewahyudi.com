import React from 'react';
import './styles.scss';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 offset-lg-3 py-5">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error similique quaerat distinctio soluta ad exercitationem sed harum facere voluptatum.</p>
            <h2 className="mt-5">Contact Details</h2>
            <p className="mb-0">I Made Wahyudi</p>
            <p className="mb-0">Denpasar, 80117</p>
            <p>madewahyudi22@gmail.com</p>
            <button className="btn btn-secondary font-weight-bold py-2 px-4 rounded-0">DOWNLOAD RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
