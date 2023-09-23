import React from 'react';
import './Customers.scss';

export default function Customers() {
  return (
    <section className="customers-section">
      <h1 className="section--title">Customers</h1>
      <div className="cards-wrapper">
        <div className="cards-slider">
          {[...Array(39)].map((item, index) => (
            <div className="card" key={index}>
              <img
                src={`/customers/logo ${index + 1}.png`}
                alt={`Logo ${index + 1}`}
                className="customer--logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
