import React from 'react';
import './Customers.scss';

export default function Customers() {
  return (
    <section className="customers-section">
        <h1 className="section--title">Customers</h1>
        <div className="cards-wrapper">
    <div className="cards-slider">
        {
            [...Array(11)].map((item, index) => (
                <div className="card" key={index}>
                    <img src={`/customers/logo ${index + 1}.png`} alt="" className="customer--logo" />
                </div>
            ))
        }
        {
            [...Array(6)].map((item, index) => (
                <div className="card" key={index}>
                    <img src={`/customers/logo ${index + 12}.png`} alt="" className="customer--logo" />
                </div>
            ))
        }
    </div>
    <div className="cards-slider">
        {
            [...Array(11)].map((item, index) => (
                <div className="card" key={index}>
                    <img src={`/customers/logo ${index + 12}.png`} alt="" className="customer--logo" />
                </div>
            ))
        }
        {
            [...Array(6)].map((item, index) => (
                <div className="card" key={index}>
                    {/* Add images 23, 24, and 25 to this section */}
                    <img src={`/customers/logo ${index + 20}.png`} alt="" className="customer--logo" />
                </div>
            ))
        }
    </div>
</div>
    </section>
  )
}
