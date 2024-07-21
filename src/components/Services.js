// src/components/Services.js
import React from 'react';


function Services() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-laptop-code"></i>
              <div className="text">Web Design</div>
              <p>As a web designer, I plan to create and code web pages, using both technical and
                 non-technical skills to produce websites that fit my customers' requirements.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Graphic Design</div>
              <p>As a Graphic Designer, I create visual content that communicates messages effectively 
                 through design elements, such as typography, imagery, and layout, to engage and attract target audiences.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-mobile-alt"></i>
              <div className="text">Apps Design</div>
              <p>As an app developer, I am understanding client requirements and how they translate to new
                 application features. I'll do my best to give you the best service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;